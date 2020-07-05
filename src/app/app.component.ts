import { Component, OnInit } from '@angular/core';
import { SessionService } from './components/session/session.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public title: string = 'peer-streaming-visualization';

	constructor(private sessionService: SessionService) {}

	ngOnInit(): void {
		// Load session configuration
		this.sessionService.load();
	}
}
