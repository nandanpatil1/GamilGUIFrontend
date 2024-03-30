import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './components/navabar/navabar.component';
import { HomeComponent } from './components/home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { GmailComponent } from './components/gmail/gmail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BackendemailService } from './services/backendemail.service';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { EmailhistoryComponent } from './components/emailhistory/emailhistory.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    HomeComponent,
    GmailComponent,
    EmailhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync(),
    MatSnackBar,BackendemailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
