#!/bin/bash

echo "Looking for lint errors..."

npm run lint

eslintOutput='npm run lint:fix'

if [[ "$?" == 0 ]]; then
    echo "ESlint Passed!"
else
    echo "ESLint Failed! Following errors found: $eslintOutput"
    exit 1
fi