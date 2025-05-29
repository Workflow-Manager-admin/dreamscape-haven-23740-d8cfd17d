#!/bin/bash
cd /home/kavia/workspace/code-generation/dreamscape-haven-23740-d8cfd17d/dreamscape_haven
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

