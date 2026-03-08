#!/bin/bash

# Load variables from .env if it exists (local development)
if [ -f .env ]; then
  set -a
  # shellcheck source=.env
  source .env
  set +a
fi

curl -sL "${GOOGLE_SHEET_MENU_URL}"    -o data/menu.csv
curl -sL "${GOOGLE_SHEET_GALLERY_URL}" -o data/gallery.csv
curl -sL "${GOOGLE_SHEET_CONFIG_URL}"  -o data/config.csv
curl -sL "${GOOGLE_SHEET_SLIDES_URL}"  -o data/slides.csv
curl -sL "${GOOGLE_SHEET_TEXT_URL}"    -o data/text.csv