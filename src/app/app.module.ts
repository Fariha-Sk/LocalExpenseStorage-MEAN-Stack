import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddxpenseComponent } from './addxpense/addxpense.component';
import { XpenselistComponent } from './xpenselist/xpenselist.component';
import { EditxpenseComponent } from './editxpense/editxpense.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    AddxpenseComponent,
    XpenselistComponent,
    EditxpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
