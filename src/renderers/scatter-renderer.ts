import { ensureNever } from '../helpers/assertions';

import { PricedValue } from '../model/price-scale';
import { SeriesMarkerShape } from '../model/series-markers';
import { SeriesItemsIndexesRange, TimedValue } from '../model/time-data';

import { ScaledRenderer } from './scaled-renderer';
import { drawArrow } from './series-markers-arrow';
import { drawCircle } from './series-markers-circle';
import { drawSquare } from './series-markers-square';
export interface ScatterItem extends PricedValue, TimedValue {
	color: string;
}

export interface PaneRendererScatterData {
	scatters: ScatterItem[];
	shape: SeriesMarkerShape;
	size: number;
	visibleRange: SeriesItemsIndexesRange | null;
}

export class PaneRendererScatter extends ScaledRenderer {
	protected _data: PaneRendererScatterData | null = null;

	public setData(data: PaneRendererScatterData): void {
		this._data = data;
	}

	protected override _drawImpl(ctx: CanvasRenderingContext2D, isHovered: boolean, hitTestData?: unknown): void {
		if (this._data === null || this._data.scatters.length === 0 || this._data.visibleRange === null) {
			return;
		}
		const { size, scatters, visibleRange, shape } = this._data;

		for (let i = visibleRange.from; i < visibleRange.to; ++i) {
			const scatter = scatters[i];
			ctx.fillStyle = scatter.color;
			drawShape(scatter, shape, size, ctx);
		}
	}
}

function drawShape(item: ScatterItem, shape: SeriesMarkerShape, size: number, ctx: CanvasRenderingContext2D): void {
	if (size === 0) {
		return;
	}

	switch (shape) {
		case 'arrowDown':
			drawArrow(false, ctx, item.x, item.y, size);
			return;
		case 'arrowUp':
			drawArrow(true, ctx, item.x, item.y, size);
			return;
		case 'circle':
			drawCircle(ctx, item.x, item.y, size);
			return;
		case 'square':
			drawSquare(ctx, item.x, item.y, size);
			return;
	}

	ensureNever(shape);
}
