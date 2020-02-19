import { Injectable } from '@angular/core';

import * as $ from 'jquery';

@Injectable()
export class PreloaderService {
  constructor() {}
  show() {
    if ($('#admin__core-loader').length === 0) {

      const preloader = $('<div id="mask-loader-core"><div id="admin__core-loader"></div></div>');
      $('body').append(preloader);
    }
  }
  hide() {
    if ($('#mask-loader-core').length > 0) {
      $('#mask-loader-core').remove();
    }
  }
}
