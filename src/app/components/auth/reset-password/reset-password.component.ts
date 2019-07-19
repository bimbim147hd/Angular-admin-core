import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store/store.module';
import { RESET_PASSWORD_REQUESTED } from './reset-password.actions';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public store;
  public data: any = {
    password: '',
    password_confirmation: ''
  };
  constructor(store: Store) {
    this.store = store.getInstance();
  }

  ngOnInit() {}

  onSubmit() {
    if (this.data.password !== this.data.password_confirmation) {
      return false;
    }
    this.store.dispatch({ type: RESET_PASSWORD_REQUESTED, data: this.data });
  }
}
