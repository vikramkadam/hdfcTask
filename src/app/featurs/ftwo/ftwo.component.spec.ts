import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtwoComponent } from './ftwo.component';

describe('FtwoComponent', () => {
  let component: FtwoComponent;
  let fixture: ComponentFixture<FtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
