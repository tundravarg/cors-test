#!/bin/bash

FILTER='
  -f name=^test-cors-backend$
'

echo "Remove containers:"
docker ps -a $FILTER
echo "----"

IDS=$(docker ps -q -a $FILTER)

if [[ ! $IDS ]]
then
    echo "No containers"
    exit
fi

docker rm -f $IDS