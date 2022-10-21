docker volume create nodemodules
docker compose -f docker-compose.builder.yml run --rm install
docker compose -f docker-compose.builder.yml run --rm build
docker compose down
docker compose up -d
