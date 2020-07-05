import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:ordered-imports
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Session } from 'src/models/session.model';
import { SessionStorageStoreService } from '../data-store/session-storage-store.service';

@Injectable()
export class SessionService {
	public static readonly sessionKey: string = 'session';

	public session$: BehaviorSubject<Session> = new BehaviorSubject(null);

	constructor(private storeService: SessionStorageStoreService, private http: HttpClient) {}

	logout(): Observable<void> {
		const session: Session = this.session$.getValue();

		if (!session) return;

		return this.http.post('/logout', { session_token: session.token }).pipe(
			map(() => {
				this.closeSession();
			}),
		);
	}

	load(): void {
		const session: Session = this.storeService.get(SessionService.sessionKey);

		if (!session) return;

		this.openSession(session);
	}

	openSession(session: Session): void {
		this.storeService.set(SessionService.sessionKey, session);
		this.session$.next(session);
	}

	private closeSession(): void {
		this.storeService.del(SessionService.sessionKey);
		this.session$.next(null);
	}
}
