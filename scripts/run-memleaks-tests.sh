#!/bin/bash
set -e
echo "Preparing"

npm run build

echo "Memleaks tests"
node ./tests/e2e/memleaks/runner.js ./dist/quant-charts.standalone.development.js
