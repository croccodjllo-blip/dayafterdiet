#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "Installa Node.js 18+ da https://nodejs.org"
  exit 1
fi

npm install

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android

echo ""
echo "Progetto Android pronto."
echo "1. Apri Android Studio: npm run open"
echo "2. Build → Generate Signed Bundle / APK → Android App Bundle (AAB)"
echo "3. Carica l'AAB su Google Play Console"
