import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly _isMenuActive = signal<boolean>(false);
  readonly isMenuActive = this._isMenuActive.asReadonly();

  toggleMenu(): void {
    this._isMenuActive.update((prev) => !prev);
  }
}
