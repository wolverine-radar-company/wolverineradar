
#
# (c)2024 Wolverine Radar Company. All rights reserved.
#

DOMAINS = radarography.com www.radarography.com
EMAIL = info@wolverineradar.com


# DEVELOPMENT TARGETS
push:
	@python ./scripts/deploy.py

shell:
	@ssh -i ./chickadee-access.pem ec2-user@radarography.com

install:
	@bash ./scripts/install.sh

start:
	@service docker start


# CERTBOT TARGETS
certbot-test:
	@chmod +x ./server/register_ssl.sh
	@sudo ./server/register_ssl.sh --domains "$(DOMAINS)" --email $(EMAIL) --data-path ../certbot --staging 1

certbot-prod:
	@chmod +x ./server/register_ssl.sh
	@sudo ./server/register_ssl.sh --domains "$(DOMAINS)" --email $(EMAIL) --data-path ../certbot --staging 0


# DEVELOPMENT DATABASE TARGETS
db-local:
	@docker compose \
					-f docker-compose.db.yml \
					up -d --build --force-recreate


# DEPLOYMENT TARGETS
deploy:
	@docker compose \
					-f docker-compose.yml \
					-f docker-compose.web.yml \
					up -d --build --force-recreate

deploy-test:
	@docker compose \
					-f docker-compose.yml \
					-f docker-compose.web.yml \
					up --build --force-recreate

deploy-dev:
	@docker compose \
					-f docker-compose.dev.yml \
					up --build --force-recreate


# TERMINATION TARGETS
dev-down:
	@docker compose \
					-f docker-compose.dev.yml \
					down

down:
	@docker compose \
					-f docker-compose.yml \
					-f docker-compose.web.yml \
					down

clean: down
	@docker system prune -af


#
# (c)2024 Wolverine Radar Company. All rights reserved.
#
