import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store/store.module';
import { FORGOT_PASSWORD_REQUESTED } from './forgot-password.actions';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public user = {
    email: ''
  };
  public store;
  constructor(store: Store) {
    this.store = store.getInstance();
  }

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch({ type: FORGOT_PASSWORD_REQUESTED, data: this.user });
  }
}
