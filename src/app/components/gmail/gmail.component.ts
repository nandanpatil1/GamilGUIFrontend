import { Component, OnInit } from '@angular/core';
import { BackendemailService } from '../../services/backendemail.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gmail',
  templateUrl: './gmail.component.html',
  styleUrl: './gmail.component.css'
})
export class GmailComponent
{
  data={
    to:"",
    subject:"",
    message:""
  }

  flag=false;

  constructor(private email:BackendemailService,private snack:MatSnackBar){

  }

  doSubmitForm(){
    console.log("try to submit form ");
    console.log("Data :",this.data);
    
    if(this.data.to==''|| this.data.subject=='' || this.data.message==''){
        this.snack.open("fields cannot be empty !!", "OK");
        return ;
    }

    this.flag=true;
    this.email.sendEmail(this.data).subscribe(

      response=>{
        console.log(response);
        this.flag=false;
        this.snack.open("Send Succuss","Ok");
      },
      error=>{
        console.log(error);
        this.flag=false;
        this.snack.open("Error","Ok");
      }
    );
  }
}
