import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/models/session.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public profile: Profile;

	constructor() {}

	ngOnInit(): void {
		this.profile = null;
	}
}
