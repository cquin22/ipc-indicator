import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexAuthenticateComponent} from './index-authenticate/index-authenticate.component';
import {LoginComponent} from './pages/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthenticateRoutesModule} from './authenticate.route';
import {NgFieldsCoreModule} from 'ng-field-management';
import {TranslateModule} from '@ngx-translate/core';
import {AuthenticationService} from '../../security/authentication.service';
import {LoaderComponent} from '../../core/components/loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticateRoutesModule,
    NgFieldsCoreModule.forRoot(),
    TranslateModule.forChild()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthenticationService
  ],
  declarations: [
    IndexAuthenticateComponent,
    LoginComponent,
    LoaderComponent
  ]
})
export class AuthenticateModule { }
