import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionStorageStoreService } from './components/data-store/session-storage-store.service';
import { ServerHostPreInterceptor } from './components/http-interceptors/server-host.pre-interceptor';
import { DataVizService } from './components/http-services/dataviz.service';
import { SessionService } from './components/session/session.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxChartsModule, BrowserAnimationsModule, BsDatepickerModule.forRoot()],
	// Http Pre Interceptor used to set server host at each http call
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: ServerHostPreInterceptor, multi: true },
		SessionService,
		SessionStorageStoreService,
		DataVizService,
		DatePipe,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
