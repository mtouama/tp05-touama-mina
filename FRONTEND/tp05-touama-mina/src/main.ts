// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Modifications cruciales
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPlugin, NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { importProvidersFrom } from '@angular/core';
import { isDevMode } from '@angular/core';
import { ProductState } from './app/states/product-state';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    
    // Configuration du store
    importProvidersFrom([
      NgxsModule.forRoot([ProductState]),
      NgxsReduxDevtoolsPluginModule.forRoot()
    ])
  ]
}).catch(err => console.error(err));