import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPanelComponent } from './angular-panel.component';

describe('AngularPanelComponent', () => {
  let component: AngularPanelComponent;
  let fixture: ComponentFixture<AngularPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
