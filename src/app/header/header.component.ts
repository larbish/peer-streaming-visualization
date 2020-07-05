import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile, Session } from 'src/models/session.model';
import { SessionService } from '../components/session/session.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	public profile: Profile;

	constructor(private sessionService: SessionService, private router: Router) {}

	ngOnInit(): void {
		this.sessionService.session$.subscribe((s) => this.onProfileChange(s));
	}

	public logout(): void {
		this.sessionService.logout().subscribe(() => this.router.navigate(['']));
	}

	private onProfileChange(session: Session): void {
		this.profile = session ? session.profile : null;
	}
}
