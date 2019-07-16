import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [AngularCommonModule, ServicesModule],
  exports: [],
  declarations: []
})
export class AppCommonModule {}
