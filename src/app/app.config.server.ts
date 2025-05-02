import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // Use provideRouter for route setup
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(serverRoutes)
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
