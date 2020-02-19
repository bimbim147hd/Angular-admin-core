import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [CommonModule, UserRoutingModule, DataTablesModule],
  declarations: [ListComponent, EditComponent, CreateComponent]
})
export class UserModule {}
