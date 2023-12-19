import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyJobOfferComponent } from './modify-job-offer.component';

describe('ModifyJobOfferComponent', () => {
  let component: ModifyJobOfferComponent;
  let fixture: ComponentFixture<ModifyJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyJobOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
