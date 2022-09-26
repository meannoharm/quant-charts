import * as QuantChartsModule from './index';

// put all exports from package to window.QuantCharts object
// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-unsafe-member-access
(window as any).QuantCharts = QuantChartsModule;
