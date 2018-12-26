import {IMenu} from '../interfaces/i-menu';
import {MenuType} from '../enums/menu.type';
import {TextRenderType} from '../enums/text-render.type';

export const TOP_MENU: Array<IMenu> =  [
  {
    'title': null,
    'link':     '/authenticate/logout',
    'icon':     'exit_to_app',
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
