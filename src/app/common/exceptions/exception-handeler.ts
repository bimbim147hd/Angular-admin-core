import { ErrorHandler } from '@angular/core';
import { NotificationService } from '../services/notification/notification.service';

export class AppErrorHandler implements ErrorHandler {
  public notification = new NotificationService();
  handleError(error) {
    const message = (<Error>error).message;
    console.error(error);
    this.notification.show('warning', message, 3000);
  }
}
