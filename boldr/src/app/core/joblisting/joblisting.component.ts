import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Item, Root } from 'src/app/models/publication.model';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PopupComponent } from '../popup/popup.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.component.html',
  styleUrls: ['./joblisting.component.scss']
})
export class JoblistingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<any>
  displayedColumns: string [] = [
   
    'event',
    'container-title',
    'title',
    'subject',
    'author',
    'type',
    'publisher',

    
  ]
  workData: any;

  constructor(
    private httpService: HttpService,
    public dialog:MatDialog,
  ) { }

  workList!: Observable<Item[]>
  workDetails!: Item
  filterValue: any;

  ngOnInit(): void {
    

    this.httpService.getData().subscribe(
      (data) => (
      this.workData = (data),
      console.log(this.workData),
      this.workList = (data.message.items),
      this.dataSource = new MatTableDataSource(data.message.items),
      this.dataSource.paginator = this.paginator
      )
    )

    
  

    
  }

  onRowsClicked(rows: Item) {

    this.workDetails = rows;
    this.dialog.open(PopupComponent, {
      height: '90%',
      width: '100%',
      data: {details: this.workDetails}
    })
    
    
  }

  filterData(filter : string) {
    this.filterValue = filter
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

 
}
