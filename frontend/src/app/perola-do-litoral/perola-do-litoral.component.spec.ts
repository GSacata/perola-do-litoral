import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerolaDoLitoralComponent } from './perola-do-litoral.component';

describe('PerolaDoLitoralComponent', () => {
  let component: PerolaDoLitoralComponent;
  let fixture: ComponentFixture<PerolaDoLitoralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerolaDoLitoralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerolaDoLitoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
