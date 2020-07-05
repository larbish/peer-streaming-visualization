import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChartData, P2pCdnBandwidthBody, P2pCdnBandwidthResponse } from 'src/models/data.models';

@Injectable()
export class DataVizService {
	constructor(private http: HttpClient) {}

	getP2pCdnBandwidth(body: P2pCdnBandwidthBody): Observable<ChartData[]> {
		return this.http.post('/bandwidth', body).pipe(
			map((res: P2pCdnBandwidthResponse) => {
				// I map data to match the lib format but normally I should have done that on server side to avoid client side processing
				const p2pAndCdnData: ChartData[] = [];

				for (const key of ['cdn', 'p2p']) {
					const chartData: ChartData = { name: key, series: [] };

					for (const entry of res[key]) {
						chartData.series.push({ name: new Date(entry[0]), value: this.bitsToGBytes(entry[1]) });
					}

					p2pAndCdnData.push(chartData);
				}

				return p2pAndCdnData;
			}),
		);
	}

	private bitsToGBytes(bits: number): number {
		return bits * 1.16 * Math.pow(10, -10);
	}
}
