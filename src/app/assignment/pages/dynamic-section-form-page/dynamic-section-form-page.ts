import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicSectionFormComponent } from '../../components/dynamic-section-form/dynamic-section-form';


@Component({
  selector: 'app-dynamic-section-form-page',
  standalone: true,
  imports: [CommonModule, DynamicSectionFormComponent],
  template: `
    <div class="page-container">
      <h2>Manage Sections</h2>
      <app-dynamic-section-form></app-dynamic-section-form>
    </div>
  `
})
export class DynamicSectionFormPageComponent {}
