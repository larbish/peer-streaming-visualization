import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, map, mergeMap } from 'rxjs/operators';
import { AuthResponse, LoginCredentials, Profile } from 'src/models/session.model';
import { SessionService } from '../components/session/session.service';

@Injectable()
export class LoginService {
	constructor(private sessionService: SessionService, private http: HttpClient) {}

	login(credentials: LoginCredentials): Observable<Profile> {
		// Get session token
		return this.http.post('/auth', credentials).pipe(
			mergeMap((res: AuthResponse) => {
				// Get user info from session token
				return this.http.post('/myinfo', res).pipe(
					map((profile: Profile) => {
						// Use session service to share session to all app components that need it
						this.sessionService.openSession({ profile, token: res.session_token });
						return profile;
					}),
				);
			}),
		);
	}
}
