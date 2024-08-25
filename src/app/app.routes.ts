import { Routes } from '@angular/router';
import { AppBanner } from './components/app-banner/app-banner.component';
import { OptimizeImageComponent } from './components/optimize-image/optimize-image.component';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: AppBanner,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: OptimizeImageComponent,
  },
];
