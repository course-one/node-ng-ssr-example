import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
    imports: [
        AppModule,
        BrowserModule.withServerTransition({ appId: 'ssr-example' }),
        ServerModule,
    ],
    bootstrap: [AppComponent]
})
export class ServerAppModule { }
