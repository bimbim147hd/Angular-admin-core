import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { main_menu_items } from './main.menu-items';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  public main_menu_items = main_menu_items;
  name: string;

  constructor() {}

  // This is for Notifications
  notifications: Object[] = [
    {
      round: 'round-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      round: 'round-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      round: 'round-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // this is for the open close
  isActive = true;
  showMenu = '';
  showSubMenu = '';

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }
  eventCalled() {
    this.isActive = !this.isActive;
  }
  // End open close

  ngAfterViewInit() {
    $(function() {
      $('.preloader').fadeOut();
    });

    const set = function() {
      const width =
        window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      const topOffset = 70;
      if (width < 1170) {
        $('body').addClass('mini-sidebar');
        $('.navbar-brand span').hide();
        $('.scroll-sidebar, .slimScrollDiv')
          .css('overflow-x', 'visible')
          .parent()
          .css('overflow', 'visible');
      } else {
        $('body').removeClass('mini-sidebar');
        $('.navbar-brand span').show();
      }

      let height =
        (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 1;
      height = height - topOffset;
      // tslint:disable-next-line:curly
      if (height < 1) height = 1;
      if (height > topOffset) {
        $('.page-wrapper').css('min-height', height + 'px');
      }
    };
    $(window).ready(set);
    $(window).on('resize', set);

    $('.search-box a, .search-box .app-search .srh-btn').on(
      'click',
      function() {
        $('.app-search').toggle(200);
      }
    );

    (<any>$('[data-toggle="tooltip"]')).tooltip();

    (<any>$('.scroll-sidebar')).slimScroll({
      position: 'left',
      size: '5px',
      height: '100%',
      color: '#dcdcdc'
    });

    $('body').trigger('resize');

    $(function() {
      $('.sidebartoggler').on('click', function() {
        if ($('body').hasClass('mini-sidebar')) {
          $('body').trigger('resize');
          $('.scroll-sidebar, .slimScrollDiv')
            .css('overflow', 'hidden')
            .parent()
            .css('overflow', 'visible');
          $('body').removeClass('mini-sidebar');
          $('.navbar-brand span').show();
          // $(".sidebartoggler i").addClass("ti-menu");
        } else {
          $('body').trigger('resize');
          $('.scroll-sidebar, .slimScrollDiv')
            .css('overflow-x', 'visible')
            .parent()
            .css('overflow', 'visible');
          $('body').addClass('mini-sidebar');
          $('.navbar-brand span').hide();
          // $(".sidebartoggler i").removeClass("ti-menu");
        }
      });
    });
  }
}
