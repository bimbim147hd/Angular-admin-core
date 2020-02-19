import * as _ from 'lodash';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SpinnerComponent } from '../template/shared/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { NgbdpaginationBasicComponent } from '../template/pages/component/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [MainComponent, SpinnerComponent, NgbdpaginationBasicComponent, UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    DataTablesModule
  ],
  entryComponents: [],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  exports: []
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule
    };
  }
}
