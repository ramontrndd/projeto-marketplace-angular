import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectbuttonComponent } from './selectbutton.component';

describe('SelectbuttonComponent', () => {
  let component: SelectbuttonComponent;
  let fixture: ComponentFixture<SelectbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
