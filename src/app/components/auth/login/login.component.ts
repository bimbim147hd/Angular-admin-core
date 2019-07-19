import { Component, OnInit } from '@angular/core';
import { Store } from '../../../store/store.module';
import { LOGIN_REQUESTED } from './login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user = {
    email: '',
    password: ''
  };
  public store;
  constructor(store: Store) {
    this.store = store.getInstance();
  }

  ngOnInit() {}

  onSubmit() {
    this.store.dispatch({ type: LOGIN_REQUESTED, data: this.user });
  }
}
