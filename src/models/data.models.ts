export enum AggregateType {
	'SUM' = 'sum',
	'AVERAGE' = 'average',
	'MAX' = 'max',
	'MIN' = 'min',
}

export interface RangeDataBody {
	session_token: string;
	from: number;
	to: number;
	aggregate?: AggregateType;
}

export interface RangeDataResponse {
	cdn: number[][];
	p2p: number[][];
}

export interface ChartDataSerie {
	value: number;
	name: Date;
}

export interface ChartData {
	name: string;
	series: ChartDataSerie[];
}
