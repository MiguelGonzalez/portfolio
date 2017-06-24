FROM php:7-fpm

RUN docker-php-ext-install mysqli

ADD uploads.ini /usr/local/etc/php/conf.d/uploads.ini

EXPOSE 9000