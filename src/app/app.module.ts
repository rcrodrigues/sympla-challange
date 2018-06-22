import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/event/event.component';
import { HeaderComponent } from './components/header/header.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { EventService } from './services/event/event.service';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		EventsComponent,
		EventComponent,
		PageHeaderComponent,
		AvatarComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule
	],
	providers: [
		EventService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
