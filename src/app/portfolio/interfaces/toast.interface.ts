export interface ToastData {
  id: number;
  title: string;
  message: string;
  type?: 'info' | 'success' | 'error' | 'warning';
  duration?: number; // ms
}
