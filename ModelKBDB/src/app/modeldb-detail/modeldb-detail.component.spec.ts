import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldbDetailComponent } from './modeldb-detail.component';

describe('ModeldbDetailComponent', () => {
  let component: ModeldbDetailComponent;
  let fixture: ComponentFixture<ModeldbDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldbDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldbDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
