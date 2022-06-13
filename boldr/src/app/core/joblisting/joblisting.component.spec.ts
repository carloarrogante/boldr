import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { JoblistingComponent } from './joblisting.component';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
import { filter, of } from 'rxjs';
import { Item } from 'src/app/models/publication.model';

describe('JoblistingComponent', () => {
  let component: JoblistingComponent;
  let fixture: ComponentFixture<JoblistingComponent>;
  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  dialogRefSpyObj.componentInstance = { body: '' };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      declarations: [ JoblistingComponent ],
      providers: [
        MatDialogModule,
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoblistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should subscribe to the service', () => {
   const checkService = fixture.debugElement.injector.get(HttpService)
   fixture.detectChanges();
   expect(checkService.getData()).toBeTruthy();
  })

  it('should have a running subscription upon component loading',() => {
    expect(component.ngOnInit).toBeTruthy();
   })


it(' should open check the pop up / dialog  ', () => {
   
    expect(dialogSpy).toHaveBeenCalled();
   
});
   

  
});
