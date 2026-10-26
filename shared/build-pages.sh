#!/usr/bin/env bash

ROOT="/home/weiflycc-center/web"

echo
echo "===== WeiflyCC Shared Sync ====="
echo

for SITE in info com org net partner
do

mkdir -p $ROOT/domains/$SITE/static/css
mkdir -p $ROOT/domains/$SITE/static/js

cp $ROOT/shared/theme.css \
   $ROOT/domains/$SITE/static/css/style.css

cp $ROOT/shared/main.js \
   $ROOT/domains/$SITE/static/js/main.js

echo "✅ $SITE"

done

echo
echo "✅ Shared CSS"
echo "✅ Shared JS"
echo
