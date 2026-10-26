#!/bin/bash

set -e

SITE="/home/weiflycc-center/web/domains/info"

echo "=========================================="
echo " WeiflyCC INFO Site Builder"
echo "=========================================="

mkdir -p "$SITE"
mkdir -p "$SITE/works"
mkdir -p "$SITE/static/css"
mkdir -p "$SITE/static/js"
mkdir -p "$SITE/static/img"

echo
echo "[1/8] 建立目錄完成"

if [ -f "$SITE/index.html" ]; then

  BACKUP="$SITE/index.backup.$(date +%Y%m%d-%H%M%S).html"

  cp "$SITE/index.html" "$BACKUP"

  echo "✅ 已備份：$BACKUP"

fi

echo
echo "[2/8] 檢查素材"

REQUIRED=(
logo4.jpg
cc02.jpg
ccpeople.jpg
ccfamily.jpg
luluqq.jpg
)

FAILED=0

for FILE in "${REQUIRED[@]}"
do

  if [ ! -f "$SITE/static/img/$FILE" ]; then

    echo "❌ 缺少：$FILE"

    FAILED=1

  else

    echo "✅ $FILE"

  fi

done

if [ "$FAILED" -eq 1 ]; then

  echo
  echo "素材缺失，停止執行"
  exit 1

fi

echo
echo "[3/8] 寫入首頁"

cat > "$SITE/index.html" <<'EOF'
（貼入 PART 1 index.html 全部內容）
EOF

echo
echo "[4/8] 寫入 CSS"

cat > "$SITE/static/css/style.css" <<'EOF'
（貼入 PART 2 style.css 全部內容）
EOF

echo
echo "[5/8] 寫入 JavaScript"

cat > "$SITE/static/js/main.js" <<'EOF'
（貼入 PART 3 main.js 全部內容）
EOF

echo
echo "[6/8] 寫入作品頁"

cat > "$SITE/works/website.html" <<'EOF'
（貼入 PART 4 website.html 全部內容）
EOF

cat > "$SITE/works/cloud.html" <<'EOF'
（貼入 PART 5 cloud.html 全部內容）
EOF

cat > "$SITE/works/ai.html" <<'EOF'
（貼入 PART 6 ai.html 全部內容）
EOF

echo
echo "[7/8] 路徑檢查"

echo

test -f "$SITE/index.html" && echo "✅ index.html"

test -f "$SITE/static/css/style.css" && echo "✅ style.css"

test -f "$SITE/static/js/main.js" && echo "✅ main.js"

test -f "$SITE/works/website.html" && echo "✅ website.html"

test -f "$SITE/works/cloud.html" && echo "✅ cloud.html"

test -f "$SITE/works/ai.html" && echo "✅ ai.html"

echo
echo "========== 樹狀結構 =========="

find "$SITE" -type f | sort

echo
echo "[8/8] 完成"

echo
echo "本機測試："

echo
echo "cd $SITE"
echo "python3 -m http.server 8080"

echo
echo "開啟："
echo "http://localhost:8080"

echo
echo "Cloudflare Pages 部署："

echo
echo "cd $SITE"
echo "npx wrangler pages deploy . --project-name weiflycc-info"

echo
echo "✅ WeiflyCC INFO Site Ready"
