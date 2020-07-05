import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionStorageStoreService } from './components/data-store/session-storage-store.service';
import { ServerHostPreInterceptor } from './components/http/server-host.pre-interceptor';
import { SessionService } from './components/session/session.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [AppComponent, HomeComponent, HeaderComponent],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	// Http Pre Interceptor used to set server host at each http call
	// Http Post interceptor can be implemented to handle server errors generically
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: ServerHostPreInterceptor, multi: true }, SessionService, SessionStorageStoreService],
	bootstrap: [AppComponent],
})
export class AppModule {}
