import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private snack : MatSnackBar){
  }

  btnClick(){
    console.log("btn click");
    this.snack.open("Wecome to email app ...!!! ", "cancel");
  }

  emailHistory(){
    console.log("email history");
    this.snack.open("Welcome to email hitory ...!!! ", "cancel");
  }
}
