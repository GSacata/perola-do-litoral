import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerolaFooterComponent } from './perola-footer.component';

describe('PerolaFooterComponent', () => {
  let component: PerolaFooterComponent;
  let fixture: ComponentFixture<PerolaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerolaFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerolaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
