import { Component, inject } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { DynamicSectionDataService } from '../../service/dynamic-section-data.storage';


@Component({
  selector: 'app-dynamic-section-view-page',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  template: `
    <div class="view-card">
      <h2>Angular week-09: View Mode</h2>
      @for (section of data(); track $index; let sIdx = $index) {
        <div class="section-item">
          <h3>Section {{ sIdx + 1 }}</h3>
          <ul>
            @for (n of section; track $index) {
              <li>Number: {{ n }}</li>
            }
          </ul>
          <p><strong>Result:</strong> {{ getSum(section) | number }}</p> </div>
      } @empty {
        <p>Not Found!!!</p> }
    </div>
  `
})
export class DynamicSectionViewPageComponent {
  private storage = inject(DynamicSectionDataService);
  data = this.storage.data;

  getSum(nums: readonly number[]): number {
    return nums.reduce((a, b) => a + b, 0);
  }
}
