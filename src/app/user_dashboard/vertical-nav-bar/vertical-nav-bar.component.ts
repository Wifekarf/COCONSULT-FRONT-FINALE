import { Component, OnInit } from '@angular/core';
import {
  barChartOutline,
  appsOutline,
  bulbOutline,
  callOutline,
  settingsOutline,
} from 'ionicons/icons';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user_dashboard/monprofil', title: 'mon-profile',  icon: 'person', class: '' },
    { path: '/user_dashboard/salary', title: 'Salary',  icon:'money', class: '' }, 
    { path: '/user_dashboard/Conge', title: 'Conge',  icon:'event', class: '' }, 
    { path: '/user_dashboard/users', title: 'Users',  icon:'person', class: '' },
     { path: '/user_dashboard/evaluation', title: 'evaluation',  icon:'assessment', class: '' },
     { path: '/user_dashboard/evaluation-manager', title: 'evaluation-manager',  icon:'assessment', class: '' },
     { path: '/user_dashboard/pointage', title: 'pointage',  icon:'camera', class: '' },
    { path: '/user_dashboard/solutions', title: 'solutions',  icon:'dashboard', class: '' },
    { path: '/user_dashboard/settings', title: 'settings&Infos',  icon:'settingsOutline', class: '' },
    
    
   
];

@Component({
  selector: 'app-vertical-nav-bar',
  templateUrl: './vertical-nav-bar.component.html',
  styleUrls: ['./vertical-nav-bar.component.css']
})
export class VerticalNavBarComponent implements OnInit {
  barChartOutline = barChartOutline;
  appsOutline = appsOutline;
  bulbOutline = bulbOutline;
  callOutline = callOutline;
  settingsOutline = settingsOutline;

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
