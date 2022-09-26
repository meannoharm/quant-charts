function runTestCase(container) {
	const chart = QuantCharts.createChart(container);

	const series = chart.addLineSeries({
		lastPriceAnimation: QuantCharts.LastPriceAnimationMode.OnDataUpdate,
	});
	series.setData([
		{ time: '1990-04-24', value: 0 },
		{ time: '1990-04-25', value: 1 },
		{ time: '1990-04-26', value: 2 },
		{ time: '1990-04-28', value: 3 },
	]);

	return new Promise(resolve => setTimeout(resolve, 500));
}
