import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { SahredcompComponent } from './sahredcomp/sahredcomp.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { UpdateDetailsComponent } from './update-details/update-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailsFormComponent,
    DetailsComponent,
    SahredcompComponent,
    MyDirectiveDirective,
    UpdateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
