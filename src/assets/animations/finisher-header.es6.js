"use strict";

const randomDirection = () => (Math.random() > 0.5 ? 1 : -1);

const skewOffset = (angle, size) => {
  const rad = 0.017453 * Math.abs(angle); // grados a radianes
  const tanVal = Math.tan(rad);
  return Math.ceil(size * tanVal);
};

const hexToRgb = (hex) => {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    let chars = hex.substring(1).split("");
    if (chars.length === 3) {
      chars = chars.flatMap((c) => [c, c]);
    }
    const intVal = parseInt(chars.join(""), 16);
    return {
      r: (intVal >> 16) & 255,
      g: (intVal >> 8) & 255,
      b: intVal & 255,
    };
  }
  return { r: 0, g: 0, b: 0 };
};

class Particle {
  constructor(colorHex, positionType, options) {
    this.options = options;
    this.color = hexToRgb(colorHex);
    this.shape = this.randomShape();
    this.sizePulseDirection = randomDirection();
    this.size = Math.abs(this.randomFromRange(this.options.size));
    this.setPosition(positionType);
    this.vx = this.randomFromRange(this.options.speed.x) * randomDirection();
    this.vy = this.randomFromRange(this.options.speed.y) * randomDirection();
  }

  setPosition(type) {
    const base = this.randomPosition();
    switch (type) {
      case 3:
        this.x = base.x + base.halfWidth;
        this.y = base.y;
        break;
      case 2:
        this.x = base.x;
        this.y = base.y + base.halfHeight;
        break;
      case 1:
        this.x = base.x + base.halfWidth;
        this.y = base.y + base.halfHeight;
        break;
      default:
        this.x = base.x;
        this.y = base.y;
    }
  }

  randomPosition() {
    const halfWidth = this.options.c.w / 2;
    const halfHeight = this.options.c.h / 2;
    return {
      x: Math.random() * halfWidth,
      y: Math.random() * halfHeight,
      halfWidth,
      halfHeight,
    };
  }

  randomFromRange(range) {
    if (range.min === range.max) return range.min;
    return Math.random() * (range.max - range.min) + range.min;
  }

  randomShape() {
    const shapes = this.options.shapes;
    return shapes[Math.floor(Math.random() * shapes.length)];
  }

  rgba(color, alpha) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  }

  animate(ctx, width, height) {
    if (this.options.size.pulse) {
      this.size += this.options.size.pulse * this.sizePulseDirection;
      if (
        this.size > this.options.size.max ||
        this.size < this.options.size.min
      ) {
        this.sizePulseDirection *= -1;
      }
      this.size = Math.abs(this.size);
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.vx *= -1;
      this.x += 1;
    } else if (this.x > width) {
      this.vx *= -1;
      this.x -= 1;
    }

    if (this.y < 0) {
      this.vy *= -1;
      this.y += 1;
    } else if (this.y > height) {
      this.vy *= -1;
      this.y -= 1;
    }

    ctx.beginPath();

    if (this.options.blending && this.options.blending !== "none") {
      ctx.globalCompositeOperation = this.options.blending;
    }

    const centerOpacity = this.rgba(this.color, this.options.opacity.center);
    const edgeOpacity = this.rgba(this.color, this.options.opacity.edge);

    let radius;
    switch (this.shape) {
      case "c":
        radius = this.size / 2;
        break;
      case "t":
        radius = 0.577 * this.size;
        break;
      case "s":
        radius = 0.707 * this.size;
        break;
      default:
        radius = this.size;
    }

    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0.01,
      this.x,
      this.y,
      radius
    );
    gradient.addColorStop(0, centerOpacity);
    gradient.addColorStop(1, edgeOpacity);
    ctx.fillStyle = gradient;

    const r = Math.abs(this.size / 2);

    if (this.shape === "c") {
      ctx.arc(this.x, this.y, r, 0, 2 * Math.PI, false);
    } else if (this.shape === "s") {
      const left = this.x - r;
      const right = this.x + r;
      const top = this.y - r;
      const bottom = this.y + r;
      ctx.moveTo(left, bottom);
      ctx.lineTo(right, bottom);
      ctx.lineTo(right, top);
      ctx.lineTo(left, top);
    } else if (this.shape === "t") {
      const v = skewOffset(30, r);
      const baseY = this.y + v;
      ctx.moveTo(this.x - r, baseY);
      ctx.lineTo(this.x + r, baseY);
      ctx.lineTo(this.x, this.y - 2 * v);
    }

    ctx.closePath();
    ctx.fill();
  }
}

class FinisherHeader {
  constructor(options) {
    this.options = options;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.id = "finisher-canvas";
    this.getContainer().appendChild(this.canvas);
    this.particles = [];

    window.addEventListener(
      "resize",
      this.debounce(() => this.resize(), 150),
      false
    );

    this.init();
    this.animate();
  }

  getContainer() {
    const containers = document.getElementsByClassName(
      this.options.className || "finisher-header"
    );
    if (!containers.length) {
      throw new Error("No .finisher-header element found");
    }
    return containers[0];
  }

  resize() {
    const container = this.getContainer();
    this.options.c = { w: container.clientWidth, h: container.clientHeight };
    this.canvas.width = this.options.c.w;
    this.canvas.height = this.options.c.h;

    const offset = skewOffset(this.options.skew, this.options.c.w / 2);
    const transformValue = `skewY(${this.options.skew}deg) translateY(-${offset}px)`;
    this.canvas.style.cssText = `
      position: absolute;
      z-index: -1;
      top: 0; left: 0; right: 0; bottom: 0;
      transform: ${transformValue};
      -webkit-transform: ${transformValue};
      outline: 1px solid transparent;
      background-color: rgba(${this.bgColor.r},${this.bgColor.g},${this.bgColor.b},1);
    `;
  }

  init() {
    this.bgColor = hexToRgb(this.options.colors.background);
    this.resize();
    this.createParticles();
  }

  createParticles() {
    this.particles = [];
    this.options.activeCount =
      window.innerWidth < 600 && this.options.count > 5
        ? Math.round(this.options.count / 2)
        : this.options.count;

    let colorIndex = 0;
    for (let i = 0; i < this.options.activeCount; i++) {
      const shapeIndex = i % 4;
      const particle = new Particle(
        this.options.colors.particles[colorIndex],
        shapeIndex,
        this.options
      );
      colorIndex++;
      if (colorIndex >= this.options.colors.particles.length) colorIndex = 0;
      this.particles[i] = particle;
    }
  }

  animate() {
    if (this.shouldStop) return;
    window.requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.options.c.w, this.options.c.h);
    for (let i = 0; i < this.options.activeCount; i++) {
      this.particles[i].animate(this.ctx, this.options.c.w, this.options.c.h);
    }
  }

  destroy() {
    this.shouldStop = true;
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }

  debounce(func, wait) {
    let timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(func, wait);
    };
  }
}

// Expose to global window
window.FinisherHeader = FinisherHeader;
