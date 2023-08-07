#!/bin/sh

SRC_FILE='./main.typ'
DEST_PDF='./proj02-g8.pdf'

# compile using typst
typst "${SRC_FILE}" "${DEST_PDF}"