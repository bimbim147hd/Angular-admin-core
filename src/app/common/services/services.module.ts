import { NotificationService } from './notification/notification.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderService } from './preloader/preloader.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [NotificationService, PreloaderService]
})
export class ServicesModule {}
