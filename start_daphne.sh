#!bin/bash
cd /var/www/social_network
poetry shell
exec daphne -b 0.0.0.0 -p 8000 config.asgi:application