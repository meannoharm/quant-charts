# QuantCharts

forked from [lightweight-charts](https://github.com/tradingview/lightweight-charts)

## New Feature

- scatter chart
- multi panel

## Installing

use npm:

```shell
npm install quant-charts
```

use yarn:

```shell
yarn install quant-charts
```

## Example

`quant-charts` provide same api as `lightweight-charts`, but there is a difference when it comes to scatter chart. You can find these difference in the `.d.ts` files.

```javascript
import { createChart } from 'quant-charts';

const chart = createChart(document.body, { width: 400, height: 300 });
const lineSeries = chart.addLineSeries();
lineSeries.setData([
    { time: '2019-04-11', value: 80.01 },
    { time: '2019-04-12', value: 96.63 },
    { time: '2019-04-13', value: 76.64 },
    { time: '2019-04-14', value: 81.89 },
    { time: '2019-04-15', value: 74.43 },
    { time: '2019-04-16', value: 80.01 },
    { time: '2019-04-17', value: 96.63 },
    { time: '2019-04-18', value: 76.64 },
    { time: '2019-04-19', value: 81.89 },
    { time: '2019-04-20', value: 74.43 },
]);
```
