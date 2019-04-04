import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldbUploadComponent } from './modeldb-upload.component';

describe('ModeldbUploadComponent', () => {
  let component: ModeldbUploadComponent;
  let fixture: ComponentFixture<ModeldbUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldbUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldbUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
