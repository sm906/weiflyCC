#!/usr/bin/env bash

BASE="/home/weiflycc-center/web"

echo
echo "WeiflyCC Shared UI"
echo

for SITE in info com org net
do

echo "[CHECK] $SITE"

grep -n "<header" \
$BASE/domains/$SITE/index.html

done

echo
echo "Shared Navbar Ready"
echo
