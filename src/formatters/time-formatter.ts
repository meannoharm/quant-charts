import { numberToStringWithLeadingZero } from './price-formatter';

export class TimeFormatter {
	private _formatStr: string;

	public constructor(format?: string) {
		this._formatStr = format || '%h:%m:%s.%ms';
	}

	public format(date: Date): string {
		return this._formatStr.replace('%h', numberToStringWithLeadingZero(date.getHours(), 2)).
			replace('%m', numberToStringWithLeadingZero(date.getMinutes(), 2)).
			replace('%s', numberToStringWithLeadingZero(date.getSeconds(), 2)).
			replace('%ms', numberToStringWithLeadingZero(date.getMilliseconds(), 3));
	}
}
