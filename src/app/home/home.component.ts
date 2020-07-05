import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ChartData, P2pCdnBandwidthBody } from 'src/models/data.models';
import { Session } from 'src/models/session.model';
import { DataVizService } from '../components/http-services/dataviz.service';
import { SessionService } from '../components/session/session.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	public session: Session;
	public loading: boolean;

	/***** DATA VIZ *******/
	public bsConfig: Partial<BsDatepickerConfig>;
	public chartView: number[] = [window.innerWidth - 200, 500];
	public colorScheme: { domain: string[] } = { domain: ['#b22dec', '#3065fe'] };
	public from: Date;
	public to: Date;

	// P2P CDN Bandwith
	public p2pCdnBandwidthData: ChartData[];

	constructor(private sessionService: SessionService, private dataVizService: DataVizService) {}

	ngOnInit(): void {
		this.sessionService.session$.subscribe((s) => this.onProfileChange(s));

		// Set datepicker theme
		this.bsConfig = Object.assign({}, { containerClass: 'theme-dark-blue' });
	}

	// Datepicker from date change event
	public fromDateChange(value: Date): void {
		this.from = value;
		this.getP2pCdnBandwidth();
	}

	// Datepicker to date change event
	public toDateChange(value: Date): void {
		this.to = value;
		this.getP2pCdnBandwidth();
	}

	private onProfileChange(session: Session): void {
		// If no session or no token, return
		if (!session || !session.token) {
			this.session = null;
			return;
		}

		this.session = session;

		// From is 15 days before today
		this.from = new Date(new Date().setDate(new Date().getDate() - 15));
		this.to = new Date();

		this.getP2pCdnBandwidth();
	}

	private getP2pCdnBandwidth(): void {
		const body: P2pCdnBandwidthBody = {
			from: Date.parse(this.from.toString()),
			to: Date.parse(this.to.toString()),
			session_token: this.session.token,
		};

		this.loading = true;

		this.dataVizService.getP2pCdnBandwidth(body).subscribe((res: ChartData[]) => {
			this.loading = false;
			this.p2pCdnBandwidthData = res;
		});
	}
}
