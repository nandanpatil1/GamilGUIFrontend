import { Component } from '@angular/core';
import { BackendemailService } from '../../services/backendemail.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-emailhistory',
  templateUrl: './emailhistory.component.html',
  styleUrl: './emailhistory.component.css'
})
export class EmailhistoryComponent {

  allemailHistory : any;
  dialogOpen: boolean = false;
  
  constructor(private service:BackendemailService, private snak : MatSnackBar, public dialog: MatDialog){
    this.getEmails1();
    }

    getEmails1(){
      this.service.getEmails().subscribe(
        response=>{
          console.log(response);
          this.allemailHistory=response;
          console.log(this.allemailHistory);
          console.log("Trueee")
        },
        error=>{
          console.log(error);
          console.log("Error");
        }
      );
    }

    
  deleteRecord(email:any) {
    this.service.deleteEmail(email.id).subscribe(
      response => {
        console.log(response);
        this.snak.open("Deleted Record of Email ID : " + email.id, "Ok");
        this.getEmails1();
      },
      error => {
        console.log(error);
      }
    );
  }

}