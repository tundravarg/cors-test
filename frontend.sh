#!/bin/bash

docker compose -f docker-compose-frontend.yml up --build "$@"
