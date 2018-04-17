import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { BrowserAppModule } from './app/browser.app.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BrowserAppModule)
    .catch(err => console.log(err));
