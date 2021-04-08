#!bin/bash
cd /var/www/social_network
source ./.venv/bin/activate && exec daphne -b 0.0.0.0 -p 8000 config.asgi:application