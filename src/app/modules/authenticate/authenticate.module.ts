import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexAuthenticateComponent} from './index-authenticate/index-authenticate.component';
import {LoginComponent} from './pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticateRoutesModule} from './authenticate.route';
import {NgFieldsCoreModule} from 'ng-field-management';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticateRoutesModule,
    NgFieldsCoreModule.forRoot(),
    TranslateModule.forChild()
  ],
  declarations: [
    IndexAuthenticateComponent,
    LoginComponent
  ]
})
export class AuthenticateModule { }
