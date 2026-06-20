#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "Installa Node.js 18+ da https://nodejs.org"
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]")"
if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "Serve Node.js 18 o superiore."
  exit 1
fi

npm install

if [ ! -d android ]; then
  npx cap add android
fi

npx cap sync android

SDK_DIR="${ANDROID_HOME:-$HOME/Android/Sdk}"
if [ -d "$SDK_DIR" ] && [ ! -f android/local.properties ]; then
  printf 'sdk.dir=%s\n' "$SDK_DIR" > android/local.properties
  echo "Creato android/local.properties → $SDK_DIR"
fi

echo ""
echo "App Android pronta in mobile/android/"
echo ""
echo "Prossimi passi:"
echo "  1. Installa Android Studio e l'SDK Android 34+"
echo "  2. npm run open"
echo "  3. Run ▶ per provare su emulatore/telefono"
echo "  4. Build → Generate Signed Bundle per Google Play"
