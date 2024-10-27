import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { DetailsComponent } from './details/details.component';
import { GaurdGuard } from './gaurd.guard';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'form', component: DetailsFormComponent, canActivate: [GaurdGuard] },
  { path: 'details', component: DetailsComponent, canActivate: [GaurdGuard] },
  { path: 'updatedetails', component: UpdateDetailsComponent, canActivate: [GaurdGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
