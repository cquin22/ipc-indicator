import {IMenu} from '../interfaces/i-menu';
import {MenuType} from '../enums/menu.type';
import {TextRenderType} from '../enums/text-render.type';

export const TOP_MENU: Array<IMenu> =  [
  {
    'title': null,
    'link':     '/inbox',
    'icon':     'email',
    'isParent': false,
    'action': null,
    'type': MenuType.ONLY_ICON,
  },
  {
    'title': null,
    'link':     '/notifications',
    'icon':     'add_alert',
    'isParent': false,
    'action': null,
    'type': MenuType.ONLY_ICON,
  },
  {
    'title': 'Usuario Local',
    'link':     null,
    'icon':     'account_circle',
    'isParent': true,
    'type': MenuType.USER_INFO,
    'textTypeRender': TextRenderType.TEXT
  }
];
