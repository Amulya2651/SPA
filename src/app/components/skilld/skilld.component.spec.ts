import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilldComponent } from './skilld.component';

describe('SkilldComponent', () => {
  let component: SkilldComponent;
  let fixture: ComponentFixture<SkilldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkilldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
