import { Injectable } from '@angular/core';

import * as $ from 'jquery';
import * as _ from 'lodash';

@Injectable()
export class NotificationService {
  scrollTop() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      500
    );
  }
  constructor() {}

  show(type: string, content: string, time: number = 0, scollTop?: Boolean) {
    if (!_.isUndefined(scollTop) && scollTop === true) {
      this.scrollTop();
    }

    this.remove();

    const notify = document.createElement('div');
    notify.id = 'admin__core-notify';
    // tslint:disable-next-line:max-line-length
    const html = `<div class="notify-container notify-${type}"><span class="notify-message">${content}</span><i class="fa fa-close"></i></div>`;
    $(notify).append(html);
    $('body').prepend(notify);

    $('.notify-container').animate(
      {
        width: 400
      },
      500
    );

    if (time && time > 0) {
      setTimeout(function() {
        $('.notify-container').animate(
          {
            width: 0
          },
          500,
          function() {
            $(this).remove();
          }
        );
      }, time);
    }
    $(notify)
      .find('.fa-close')
      .click(function() {
        if ($('body').find('#admin__core-notify').length) {
          $(notify).animate(
            {
              width: 0
            },
            500,
            function() {
              $(this).remove();
            }
          );
        }
      });
  }
  remove() {
    if ($('body').find('#admin__core-notify').length) {
      $('#admin__core-notify').animate(
        {
          width: 0
        },
        500,
        function() {
          $(this).remove();
        }
      );
    }
  }
}
