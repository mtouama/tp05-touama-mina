import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierProductComponent } from './panier-product.component';

describe('PanierProductComponent', () => {
  let component: PanierProductComponent;
  let fixture: ComponentFixture<PanierProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanierProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanierProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
