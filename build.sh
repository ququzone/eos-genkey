#!/bin/sh

npm run build
docker build -t eos-genkey .