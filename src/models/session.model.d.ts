export interface LoginCredentials {
	identifiant: string;
	password: string;
}

export interface AuthResponse {
	session_token: string;
}

export interface Profile {
	company: string;
	fname: string;
	lname: string;
	email: string;
	website: string;
	timestamp: string;
	description: string;
	apitoken: string;
}

export interface Session {
	profile: Profile;
	token: string;
}
