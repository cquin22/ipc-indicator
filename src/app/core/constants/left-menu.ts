import {IMenu} from '../interfaces/i-menu';

export const ADMIN_LEFT_MENU: Array<IMenu> =  [
  {title: 'DASHBOARD_HOME', isParent: false, link: '/dashboard/ipc', icon: 'build'},
  {title: 'CONTACT', isParent: false, link: '/dashboard/contact', icon: 'phone'},
  {title: 'SUMMARY', isParent: false, link: '/dashboard/summary', icon: 'info'},
];

export const SALES_LEFT_MENU: Array<IMenu> =  [
  {title: 'DASHBOARD_HOME', isParent: false, link: '/dashboard/ipc', icon: 'build'}
];
