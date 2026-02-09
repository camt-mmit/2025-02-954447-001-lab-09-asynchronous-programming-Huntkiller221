import { Routes } from '@angular/router';
import { AssignmentRoot } from './pages/assignment-root/assignment-root';
import { DynamicSectionViewPageComponent } from './pages/dynamic-section-view-page/dynamic-section-view-page';
import { DynamicSectionFormPageComponent } from './pages/dynamic-section-form-page/dynamic-section-form-page';

export default [
  {
    path: '',
    component: AssignmentRoot,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },

      { path: 'view', component: DynamicSectionViewPageComponent },
      { path: 'form', component: DynamicSectionFormPageComponent },
    ],
  },
] as Routes;
