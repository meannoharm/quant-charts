function generateData() {
	const res = [];
	const time = new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0));
	for (let i = 0; i < 500; ++i) {
		res.push({
			time: time.getTime() / 1000,
			value: i,
		});

		time.setUTCDate(time.getUTCDate() + 1);
	}

	return res;
}

function runTestCase(container) {
	const chart = QuantCharts.createChart(container, {
		layout: {
			background: {
				type: QuantCharts.ColorType.VerticalGradient,
				topColor: '#b1ff73',
				bottomColor: '#1106b1',
			},
		},
	});

	const series = chart.addLineSeries({
		title: 'ABCD',
	});

	series.setData(generateData());
}
