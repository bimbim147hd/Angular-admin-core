import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Store } from '../../../store/store.module';
import { Subscription } from 'rxjs';
import { FETCH_USERS_REQUESTED } from './list.actions';
import * as _ from 'lodash';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public store;
  public navigationSubscription: Subscription;
  dtOptions: DataTables.Settings = {
    paging: false,
    info: false
  };

  constructor(
    private activeRouter: ActivatedRoute,
    private route: Router,
    store: Store
  ) {
    this.store = store.getInstance();
    this.navigationSubscription = this.route.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.store.dispatch({
          type: FETCH_USERS_REQUESTED,
          data: this.parseQuery()
        });
      }
    });
  }

  public parseQuery(): object {
    const supportedParams = ['constraints', 'page', 'search'];
    let queryParams = {};
    if (_.keys(this.activeRouter.snapshot.queryParams).length > 0) {
      queryParams = _.assign(
        queryParams,
        this.activeRouter.snapshot.queryParams
      );
    }
    return _.pick(queryParams, supportedParams);
  }

  ngOnInit() {}
}
