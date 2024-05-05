import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadreperHeaderComponent } from './madreper-header.component';

describe('MadreperHeaderComponent', () => {
  let component: MadreperHeaderComponent;
  let fixture: ComponentFixture<MadreperHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadreperHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadreperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
