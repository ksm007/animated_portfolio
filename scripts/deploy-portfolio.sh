#!/usr/bin/env bash

  set -euo pipefail

  APP_NAME="animated-portfolio"
  BRANCH="${1:-main}"

  if [ -s "${HOME}/.nvm/nvm.sh" ]; then
    . "${HOME}/.nvm/nvm.sh"
  fi

  git fetch origin "${BRANCH}"
  git checkout "${BRANCH}"
  git pull --ff-only origin "${BRANCH}"

  npm ci
  npm run build

  if pm2 describe "${APP_NAME}" >/dev/null 2>&1; then
    pm2 restart "${APP_NAME}" --update-env
  else
    pm2 start ecosystem.config.cjs
  fi

  pm2 save
  pm2 logs "${APP_NAME}" --lines 40 --nostream