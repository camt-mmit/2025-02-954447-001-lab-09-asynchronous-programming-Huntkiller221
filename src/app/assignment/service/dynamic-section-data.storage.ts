import { Injectable, signal } from '@angular/core';

export type DynamicSection = readonly (readonly number[])[];

@Injectable({ providedIn: 'root' })
export class DynamicSectionDataService {
  private dataSignal = signal<DynamicSection>([]);
  readonly data = this.dataSignal.asReadonly();

  constructor() {
    this.loadData();
  }

  loadData() {
    const saved = localStorage.getItem('dynamic_sections');
    if (saved) {
      this.dataSignal.set(JSON.parse(saved));
    }
  }

  updateData(newData: DynamicSection) {
    this.dataSignal.set(newData);
    localStorage.setItem('dynamic_sections', JSON.stringify(newData));
  }
}
