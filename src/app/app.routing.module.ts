import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { SigninComponent } from './signin/signin/signin.component';
import { SignupComponent } from './signup/signup/signup.component';
import { LoginGuard } from './compartilhado/auth/loginGuard/login.guard';
import { AuthGuard } from './compartilhado/auth/authGuard/auth.guard';
import { WakanderTribeDetailComponent } from './wakander/wakander-tribe-detail/wakander-tribe-detail.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: "login",
        component: SigninComponent,
        canActivate: [LoginGuard]
    },
    {
        path: 'signUp',
        component: SignupComponent
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'tribe/:tribo', 
        component: WakanderTribeDetailComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}