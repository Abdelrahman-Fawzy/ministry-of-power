import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactingInformationComponent } from './contacting-information.component';

describe('ContactingInformationComponent', () => {
  let component: ContactingInformationComponent;
  let fixture: ComponentFixture<ContactingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactingInformationComponent]
    });
    fixture = TestBed.createComponent(ContactingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
