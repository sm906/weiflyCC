#!/usr/bin/env bash

ROOT="/home/weiflycc-center/web"

for SITE in info com org net
do

cp \
$ROOT/shared/theme.css \
$ROOT/domains/$SITE/static/css/style.css

cp \
$ROOT/shared/main.js \
$ROOT/domains/$SITE/static/js/main.js

done

echo
echo "✅ Shared UI Synced"
echo

