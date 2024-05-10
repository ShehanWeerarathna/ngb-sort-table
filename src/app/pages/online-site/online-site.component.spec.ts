import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineSiteComponent } from './online-site.component';

describe('OnlineSiteComponent', () => {
  let component: OnlineSiteComponent;
  let fixture: ComponentFixture<OnlineSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
