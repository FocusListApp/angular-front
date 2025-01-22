import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import  * as heroIconsOutline from '@ng-icons/heroicons/outline';
import  * as heroIconsSolid from '@ng-icons/heroicons/solid';
import { featherGitBranch } from '@ng-icons/feather-icons';
import { provideIcons } from '@ng-icons/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideIcons({...heroIconsOutline, ...heroIconsSolid, featherGitBranch})
  ]
};
