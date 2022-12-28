import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';
import { LoginPageComponent } from './main/login/containers/login-page.component';
import { RegisterPageComponent } from './main/register/containers/register-page.component';
import { HomeComponent } from './project/home/home.component';
import { ProjectsComponent } from './project/projects/projects.component';
import { ContactsComponent } from './project/contacts/contacts.component';
import { FeedbackComponent } from './project/feedback/feedback.component';

const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
    { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
    { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
