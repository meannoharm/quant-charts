function runTestCase(container) {
	const chart = QuantCharts.createChart(container);

	const mainSeries = chart.addLineSeries({
		lineType: QuantCharts.LineType.WithSteps,
	});

	mainSeries.setData([
		{ time: 1, value: 1, color: 'red' },
		{ time: 2, value: 2, color: 'green' },
		{ time: 3, value: 1, color: 'blue' },
	]);

	chart.timeScale().fitContent();
}
