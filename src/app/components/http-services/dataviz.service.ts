import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChartData, RangeDataBody, RangeDataResponse } from 'src/models/data.models';

@Injectable()
export class DataVizService {
	constructor(private http: HttpClient) {}

	getP2pCdnBandwidth(body: RangeDataBody): Observable<ChartData[]> {
		return this.http.post('/bandwidth', body).pipe(
			map((res: RangeDataResponse) => {
				return this.mapServerDataToChartModel(res, true);
			}),
		);
	}

	getConcurrencyViewers(body: RangeDataBody): Observable<ChartData[]> {
		return this.http.post('/audience', body).pipe(
			map((res: RangeDataResponse) => {
				return this.mapServerDataToChartModel(res);
			}),
		);
	}

	// Mapping data to match the lib format: normally this should be done on server side to avoid client side processing
	// dataFormating params is used to apply computation to received data (ex: bits to GBytes)
	private mapServerDataToChartModel(serverResponse: RangeDataResponse, dataFormating: boolean = false): ChartData[] {
		const mappedData: ChartData[] = [];

		for (const key of ['cdn', 'p2p', 'audience']) {
			const chartData: ChartData = { name: key, series: [] };

			if (serverResponse[key]) {
				for (const entry of serverResponse[key]) {
					chartData.series.push({ name: new Date(entry[0]), value: dataFormating ? this.bitsToGBytes(entry[1]) : entry[1] });
				}
				mappedData.push(chartData);
			}
		}

		return mappedData;
	}

	private bitsToGBytes(bits: number): number {
		return bits * 1.16 * Math.pow(10, -10);
	}
}
