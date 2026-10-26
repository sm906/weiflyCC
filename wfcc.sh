#!/usr/bin/env bash

set -e

ROOT="/home/weiflycc-center/web"

case "$1" in

sync)

echo
echo "===== Shared Sync ====="
echo

~/web/shared/build-pages.sh

;;

status)

echo
echo "========== WeiflyCC =========="
echo

curl -s https://weiflycc.info/api/status
echo
echo

;;

deploy)

echo
echo "[INFO]"
cd $ROOT/domains/info
wrangler pages deploy . --project-name=weiflycc-info

echo
echo "[COM]"
cd $ROOT/domains/com
wrangler pages deploy . --project-name=weiflycc-com

echo
echo "[ORG]"
cd $ROOT/domains/org
wrangler pages deploy . --project-name=weiflycc-org

echo
echo "[NET]"
cd $ROOT/domains/net
wrangler pages deploy . --project-name=weiflycc-net

;;

api)

echo
echo "[CORE API]"
cd $ROOT/core-api

wrangler deploy

;;

all)

$0 api
$0 deploy

;;

*)

echo
echo "wfcc status"
echo "wfcc deploy"
echo "wfcc api"
echo "wfcc all"
echo

;;

esac
