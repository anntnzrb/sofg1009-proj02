#!/bin/sh

SRC_FILE='./src/main.typ'
DEST_PDF='./dist/proj02-g8.pdf'

# compile using typst
typst "${SRC_FILE}" "${DEST_PDF}"