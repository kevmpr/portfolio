import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { ToastData } from '../interfaces/toast.interface';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private toastsSubject = new BehaviorSubject<ToastData[]>([]);
  toasts$ = this.toastsSubject.asObservable();

  private counter = 0;

  showToast(toast: Omit<ToastData, 'id'>) {
    this.counter++;
    const newToast: ToastData = {
      id: this.counter,
      duration: 3000,
      ...toast,
    };

    const currentToasts = this.toastsSubject.getValue();
    this.toastsSubject.next([...currentToasts, newToast]);

    // Auto elimina el toast luego de la duración
    setTimeout(() => this.removeToast(newToast.id), newToast.duration);
  }

  removeToast(id: number) {
    const filtered = this.toastsSubject.getValue().filter(t => t.id !== id);
    this.toastsSubject.next(filtered);
  }
}
