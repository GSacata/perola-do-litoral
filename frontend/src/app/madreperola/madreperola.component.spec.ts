import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadreperolaComponent } from './madreperola.component';

describe('MadreperolaComponent', () => {
  let component: MadreperolaComponent;
  let fixture: ComponentFixture<MadreperolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadreperolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadreperolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
