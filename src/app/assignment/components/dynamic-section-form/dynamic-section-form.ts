import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicSectionDataService } from '../../service/dynamic-section-data.storage';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-dynamic-section-form',
  standalone: true,
  imports: [
    CommonModule, FormsModule, DecimalPipe,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './dynamic-section-form.html',
})
export class DynamicSectionFormComponent {
  private storage = inject(DynamicSectionDataService);
  sections = signal<number[][]>([]);
  form = form(this.sections)

  constructor() {
    const initialData = this.storage.data();
    if (initialData && initialData.length > 0) {
      this.sections.set(initialData.map(s => [...s]));
    } else {
      this.addSection();
    }

    effect(() => {
      this.storage.updateData(this.sections());
    });
  }

  addSection() {
    this.sections.update(s => [...s, [0]]);
  }

  removeSection(sIdx: number) {
    if (this.sections().length > 1) {
      this.sections.update(s => s.filter((_, i) => i !== sIdx));
    }
  }

  addNumber(sIdx: number) {
    this.sections.update(s => {
      const newSections = [...s];
      newSections[sIdx] = [...newSections[sIdx], 0];
      return newSections;
    });
  }

  removeNumber(sIdx: number, nIdx: number) {
    this.sections.update(s => {
      const newSections = [...s];
      if (newSections[sIdx].length > 1) {
        newSections[sIdx] = newSections[sIdx].filter((_, i) => i !== nIdx);
      }
      return newSections;
    });
  }

  updateValue(sIdx: number, nIdx: number, value: string) {
    const numValue = parseFloat(value) || 0;
    this.sections.update(s => {
      const newSections = [...s];
      newSections[sIdx][nIdx] = numValue;
      return newSections;
    });
  }

  calculateTotal(sIdx: number): number {
    return this.sections()[sIdx]?.reduce((acc, curr) => acc + curr, 0) || 0;
  }
}
