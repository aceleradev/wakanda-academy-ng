import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { SigninComponent } from './signin/signin/signin.component';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginGuard } from './compartilhado/auth/loginGuard/login.guard';
import { AuthGuard } from './compartilhado/auth/authGuard/auth.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'Home'
    },
    {
        path: 'login',
        pathMatch: 'full',
        redirectTo: 'Login'
    },
    {
        path: 'signUp',
        pathMatch: 'full',
        redirectTo: 'SignUp'
    },
    {
        path: "Home",
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "Login",
        component: SigninComponent,
        canActivate: [LoginGuard]
    },
    {
        path: "SignUp",
        component: SignupComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}