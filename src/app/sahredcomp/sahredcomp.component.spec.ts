import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahredcompComponent } from './sahredcomp.component';

describe('SahredcompComponent', () => {
  let component: SahredcompComponent;
  let fixture: ComponentFixture<SahredcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SahredcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SahredcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
