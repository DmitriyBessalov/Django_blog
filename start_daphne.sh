#!bin/bash
cd /var/www/social_network
poetry shell
exec daphne social_network.asgi:application