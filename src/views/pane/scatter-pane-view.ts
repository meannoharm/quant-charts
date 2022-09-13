import { BarPrice } from '../../model/bar';
import { ChartModel } from '../../model/chart-model';
import { Series } from '../../model/series';
import { SeriesBarColorer } from '../../model/series-bar-colorer';
import { TimePointIndex } from '../../model/time-data';
import { PaneRendererScatter, PaneRendererScatterData, ScatterItem } from '../../renderers/scatter-renderer';
import { IPaneRenderer } from './../../renderers/ipane-renderer';

import { LinePaneViewBase } from './line-pane-view-base';

export class SeriesScatterPaneView extends LinePaneViewBase<'Scatter', ScatterItem> {
	private readonly _scatterRenderer: PaneRendererScatter = new PaneRendererScatter();

	// eslint-disable-next-line no-useless-constructor
	public constructor(series: Series<'Scatter'>, model: ChartModel) {
		super(series, model);
	}

	public renderer(): IPaneRenderer | null {
		if (!this._series.visible()) {
			return null;
		}

		const scatterStyleProps = this._series.options();

		this._makeValid();
		const data: PaneRendererScatterData = {
			scatters: this._items,
			shape: scatterStyleProps.shape,
			size: scatterStyleProps.size,
			visibleRange: this._itemsVisibleRange,
		};

		this._scatterRenderer.setData(data);

		return this._scatterRenderer;
	}

	protected _createRawItem(time: TimePointIndex, price: BarPrice, colorer: SeriesBarColorer): ScatterItem {
		const item = this._createRawItemBase(time, price) as ScatterItem;
		item.color = colorer.barStyle(time).barColor;
		return item;
	}
}
