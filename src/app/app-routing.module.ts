import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GmailComponent } from './components/gmail/gmail.component';
import { HomeComponent } from './components/home/home.component';
import { EmailhistoryComponent } from './components/emailhistory/emailhistory.component';

const routes: Routes = [
  {
    path:"sendgmail",
    component:GmailComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"emailhistory",
    component:EmailhistoryComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
