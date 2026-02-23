import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { provideHttpClient } from '@angular/common/http';

const PizzaTheme = definePreset(Aura, {
  primitive: {
    orange: {
      50: '#fff7e6',
      100: '#ffebc2',
      200: '#ffd685',
      300: '#ffc147',
      400: '#ffb51f',
      500: '#ffaf18',
      600: '#e69a16',
      700: '#bf8012',
      800: '#99660f',
      900: '#7d530c',
      950: '#4d3307',
    },
  },
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
  },
});
export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: PizzaTheme,
        options: {
          darkModeSelector: false,
        },
      },
    }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
