#!/bin/bash

echo "Fixing lint errors..."

npm run lint:Fixing
echo "Looking for lint errors..."

eslintOutput='npm run lint'

if [[ "$?" == 0 ]]; then
    echo "ESlint Passed!"
else
    echo "ESLint Failed! Following errors found: $eslintOutput"
    exit 1
fi