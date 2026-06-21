#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

ANDROID_DIR="$ROOT/android"
KEYSTORE="$ANDROID_DIR/dadayfterdiet-upload.keystore"
PROPS="$ANDROID_DIR/keystore.properties"
OUT_DIR="$ROOT/dist"
AAB_SRC="$ANDROID_DIR/app/build/outputs/bundle/release/app-release.aab"
AAB_DST="$OUT_DIR/dadayfterdiet-release.aab"

if ! command -v keytool >/dev/null 2>&1; then
  echo "Serve Java JDK (keytool)."
  exit 1
fi

if [ ! -f "$KEYSTORE" ]; then
  STORE_PASS="$(openssl rand -base64 24 | tr -d '/+=' | head -c 20)"
  KEY_PASS="$STORE_PASS"
  keytool -genkeypair -v \
    -keystore "$KEYSTORE" \
    -alias dad-upload \
    -keyalg RSA -keysize 2048 -validity 10000 \
    -storepass "$STORE_PASS" -keypass "$KEY_PASS" \
    -dname "CN=DaD, OU=Mobile, O=DayafterDiet, L=Italy, ST=Italy, C=IT"
  cat > "$PROPS" <<EOF
storeFile=dadayfterdiet-upload.keystore
storePassword=$STORE_PASS
keyAlias=dad-upload
keyPassword=$KEY_PASS
EOF
  chmod 600 "$PROPS" "$KEYSTORE"
  echo ""
  echo "Creato keystore di upload: $KEYSTORE"
  echo "Salva una copia di backup di keystore + keystore.properties (password incluse)."
  echo ""
fi

SDK_DIR="${ANDROID_HOME:-$HOME/Android/Sdk}"
if [ -d "$SDK_DIR" ] && [ ! -f "$ANDROID_DIR/local.properties" ]; then
  printf 'sdk.dir=%s\n' "$SDK_DIR" > "$ANDROID_DIR/local.properties"
fi

npm install
npx cap sync android
(cd "$ANDROID_DIR" && ./gradlew bundleRelease)

mkdir -p "$OUT_DIR"
cp "$AAB_SRC" "$AAB_DST"

echo ""
echo "Bundle pronto per Google Play:"
echo "  $AAB_DST"
echo ""
echo "Caricamento su Play Console:"
echo "  1. Apri https://play.google.com/console"
echo "  2. Crea app (se non esiste) → Nome: DaD — Calorie e dieta"
echo "  3. Release → Produzione (o Test interno) → Crea nuova release"
echo "  4. Carica il file .aab sopra"
echo "  5. Compila scheda store (testi in mobile/play-store-listing.json)"
echo "  6. Privacy policy: https://croccodjllo-blip.github.io/dayafterdiet/privacy-policy.html"
echo "  7. Invia in revisione"
echo ""
echo "Package: com.dadayfterdiet.app | versione: $(node -p "require('./package.json').version")"
