import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionViewPageComponent } from './dynamic-section-view-page';

describe('DynamicSectionViewPageComponent', () => {
  let component: DynamicSectionViewPageComponent;
  let fixture: ComponentFixture<DynamicSectionViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSectionViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSectionViewPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
