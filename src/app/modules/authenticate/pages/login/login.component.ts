import { Component, OnInit } from '@angular/core';

import {FormGroup} from '@angular/forms';
// @ts-ignore
import {DynamicFormService, IField} from 'ng-field-management';
import {LOGIN} from './form-login.constant';
import {IUser} from '../../../../core/interfaces/i-user';
import {AuthenticationService} from '../../../../security/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../index-authenticate/index-authenticate.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public fields: Array<IField> = LOGIN;
  public isLoading: boolean;

  constructor(
    private dynamicFormService: DynamicFormService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    const orderFieldsLogin = this.dynamicFormService.orderArrayFields(this.fields);
    this.loginForm = this.dynamicFormService.buildForm(orderFieldsLogin);
  }

  public login (user: IUser, isValid: boolean) {
    if (isValid) {
        this.isLoading = true;
        this.authenticationService.login(user).subscribe( () => {
          this.router.navigate(['/dashboard/ipc'], {} );
        });
    }
  }

}
