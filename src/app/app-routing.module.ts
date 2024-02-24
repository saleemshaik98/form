import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { DetailsComponent } from './details/details.component';
import { GaurdGuard } from './gaurd.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'form', component: DetailsFormComponent, canActivate: [GaurdGuard] },
  { path: 'details', component: DetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
