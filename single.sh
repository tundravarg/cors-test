#!/bin/bash

docker compose -f docker-compose-single.yml up --build "$@"
