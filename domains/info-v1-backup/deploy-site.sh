#!/bin/bash

set -e

SITE="/home/weiflycc-center/web/domains/info"

echo "================================="
echo " WeiflyCC INFO Site Builder"
echo "================================="

mkdir -p "$SITE"
mkdir -p "$SITE/works"
mkdir -p "$SITE/static/css"
mkdir -p "$SITE/static/js"
mkdir -p "$SITE/static/img"

if [ -f "/home/weiflycc-center/web/static/img/cc02.jpg" ]; then
    cp -f \
    /home/weiflycc-center/web/static/img/cc02.jpg \
    "$SITE/static/img/cc02.jpg"
fi

cp "$SITE/index.html" "$SITE/index.backup.$(date +%Y%m%d-%H%M%S).html" 2>/dev/null || true

echo "✅ 結構建立完成"

echo
echo "請將以下檔案建立完成："
echo "  $SITE/index.html"
echo "  $SITE/static/css/style.css"
echo "  $SITE/static/js/main.js"
echo "  $SITE/works/website.html"
echo "  $SITE/works/cloud.html"
echo "  $SITE/works/ai.html"
echo

echo "========== 檢查 =========="

ls -lah "$SITE/static/img/" 2>/dev/null || true

echo
echo "========== 啟動測試 =========="

echo "cd $SITE"
echo "python3 -m http.server 8080"

echo
echo "========== 部署 =========="

echo "cd $SITE"
echo "npx wrangler pages deploy . --project-name weiflycc-info"

echo
echo "✅ 完成"
