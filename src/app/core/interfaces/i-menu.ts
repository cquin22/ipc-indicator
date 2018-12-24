import {MenuType} from '../enums/menu.type';
import {TextRenderType} from '../enums/text-render.type';

export interface IMenu  {
  title: string;
  link?: any;
  icon?: string;
  isParent?: boolean;
  child?: Array<IMenu>;
  linkClass?: string;
  action?: string;
  type?: MenuType;
  textTypeRender?: TextRenderType;
  rolePermission?: Array<any>;
}
