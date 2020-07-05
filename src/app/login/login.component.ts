import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from 'src/models/session.model';
import { SessionService } from '../components/session/session.service';
import { LoginService } from './login.service';

@Component({
	selector: 'app-login',
	templateUrl: 'login.component.html',
	styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
	public loading: boolean;

	public errorMessage: string;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private sessionService: SessionService,
		private loginService: LoginService,
	) {}

	ngOnInit(): void {
		// If session already exist, come back to home page
		this.sessionService.session$.subscribe((session) => {
			if (session) return this.router.navigate(['']);
		});

		// Else load login form
		this.loginForm = this.fb.group({
			identifiant: ['', [Validators.required]],
			password: ['', [Validators.required]],
		});
	}

	onSubmit($event: Event): void {
		$event.stopPropagation();

		if (!this.loginForm.valid) return;

		this.loading = true;

		this.loginService.login(this.loginForm.getRawValue() as LoginCredentials).subscribe(
			() => {
				this.router.navigate(['']);
				this.loading = false;
			},
			() => {
				this.errorMessage = 'Something went wrong, check network error for more infos.';
				this.loading = false;
			},
		);
	}
}
