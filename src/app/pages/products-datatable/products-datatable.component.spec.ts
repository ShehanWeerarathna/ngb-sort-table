import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDatatableComponent } from './products-datatable.component';

describe('ProductsDatatableComponent', () => {
  let component: ProductsDatatableComponent;
  let fixture: ComponentFixture<ProductsDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
