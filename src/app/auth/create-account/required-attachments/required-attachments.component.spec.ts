import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredAttachmentsComponent } from './required-attachments.component';

describe('RequiredAttachmentsComponent', () => {
  let component: RequiredAttachmentsComponent;
  let fixture: ComponentFixture<RequiredAttachmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequiredAttachmentsComponent]
    });
    fixture = TestBed.createComponent(RequiredAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
