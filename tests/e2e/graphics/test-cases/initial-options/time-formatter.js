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
		localization: {
			timeFormatter: businessDayOrTimestamp => {
				if (QuantCharts.isBusinessDay(businessDayOrTimestamp)) {
					return 'bd=' + businessDayOrTimestamp.day + '-' + businessDayOrTimestamp.month + '-' + businessDayOrTimestamp.year;
				}

				return 'ts=' + businessDayOrTimestamp;
			},
		},
	});

	const series = chart.addLineSeries();
	series.setData(generateData());
}
