import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {details: any},
    public dialogRef: MatDialogRef<PopupComponent>,
  ) { }

  ngOnInit(): void {

  

  }

  closeDialog():void {
    this.dialogRef.close();
  };

}
