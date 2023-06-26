import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedprofileComponent } from './addedprofile.component';

describe('AddedprofileComponent', () => {
  let component: AddedprofileComponent;
  let fixture: ComponentFixture<AddedprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
