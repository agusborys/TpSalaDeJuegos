import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaMarcaComponent } from './adivina-marca.component';

describe('AdivinaMarcaComponent', () => {
  let component: AdivinaMarcaComponent;
  let fixture: ComponentFixture<AdivinaMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
