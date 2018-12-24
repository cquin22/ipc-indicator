import {DataTableType, IField} from 'ng-field-management';


export const LOGIN: Array<IField> = [
  {
    'type': DataTableType.STRING,
    'model': 'email',
    'value': '',
    'placeHolder': 'EMAIL_PLACEHOLDER',
    'validations': [
      {
        'type': 'required',
        'value': null
      },
      {
        'type': 'email',
        'value': null
      }
    ],
    'listValue': null,
    'mask': null,
    'position': null,
    'group': null,
    'order': 1
  },
  {
    'type': DataTableType.PASSWORD,
    'model': 'password',
    'value': '',
    'placeHolder': 'PASSWORD_CREATE_PLACEHOLDER',
    'validations': [
      {
        'type': 'required',
        'value': null
      }
    ],
    'listValue': null,
    'mask': null,
    'position': null,
    'group': null,
    'order': 2
  },
];
