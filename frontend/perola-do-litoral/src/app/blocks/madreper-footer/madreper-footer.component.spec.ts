import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadreperFooterComponent } from './madreper-footer.component';

describe('MadreperFooterComponent', () => {
  let component: MadreperFooterComponent;
  let fixture: ComponentFixture<MadreperFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadreperFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadreperFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
