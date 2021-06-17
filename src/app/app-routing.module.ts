import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { IndexComponent } from './pages/index/index.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'index', component: IndexComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
