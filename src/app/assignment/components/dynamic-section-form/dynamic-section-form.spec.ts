import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicSectionFormComponent } from './dynamic-section-form';



describe('DynamicSectionForm', () => {
  let component: DynamicSectionFormComponent;
  let fixture: ComponentFixture<DynamicSectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSectionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSectionFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
