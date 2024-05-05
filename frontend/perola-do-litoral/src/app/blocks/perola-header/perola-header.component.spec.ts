import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerolaHeaderComponent } from './perola-header.component';

describe('PerolaHeaderComponent', () => {
  let component: PerolaHeaderComponent;
  let fixture: ComponentFixture<PerolaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerolaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerolaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
