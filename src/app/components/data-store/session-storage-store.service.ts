import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageStoreService {
	constructor() {}

	// tslint:disable-next-line:no-any
	get(key: string): any {
		try {
			return JSON.parse(window.sessionStorage.getItem(key));
		} catch (e) {
			return null;
		}
	}

	// tslint:disable-next-line:no-any
	set(key: string, data?: any): void {
		if (data === undefined) {
			this.del(key);
			return;
		}
		try {
			window.sessionStorage.setItem(key, JSON.stringify(data));
		} catch (e) {}
	}

	del(key: string): void {
		try {
			window.sessionStorage.removeItem(key);
		} catch (e) {}
	}

	clear(): void {
		try {
			window.sessionStorage.clear();
		} catch (e) {}
	}
}
