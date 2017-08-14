# portfolio
Personal website

# Installation

## Clone repository

git clone https://github.com/MiguelGonzalez/portfolio.git

## Launch docker instances

docker-compose build

docker-compose up

## Create host

Add to /etc/hosts

	127.0.0.1	portfolio

## Install dependencies

Launch inside site folder (cd site):

composer install

	database_host	db
	database_port	3306
	database_name	portfolio
	database_user	userDev
	database_password	d3vP455w0rd

bower install

## Fix permissions

HTTPDUSER=www-data
sudo setfacl -dR -m u:"$HTTPDUSER":rwX -m u:$(whoami):rwX var
sudo setfacl -R -m u:"$HTTPDUSER":rwX -m u:$(whoami):rwX var

# Launch assetic listener

bin/console assetic:watch --force
