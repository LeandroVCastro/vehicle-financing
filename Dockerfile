# Use an official PHP image as base
FROM php:8.2-fpm

# Set working directory
WORKDIR /var/www/html


# Install dependencies
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    && docker-php-ext-install zip pdo pdo_mysql

# Install Postgre PDO
RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer --quiet

# Set COMPOSER_ALLOW_SUPERUSER to 1
ENV COMPOSER_ALLOW_SUPERUSER 1

# Copy the rest of your application code
RUN rm -rf /var/www/html/backend
COPY ./backend /var/www/html/backend

WORKDIR /var/www/html/backend
# Install project dependencies
RUN composer install

# # Install project dependencies
# RUN composer install --no-scripts --no-autoloader


# Run artisan commands to set up Laravel
RUN php artisan key:generate
RUN php artisan config:cache

# COPY backend /var/www/html/backend/

# Expose port 8000
EXPOSE 8000
EXPOSE 5432

RUN rm -rf /tmp/vendor
RUN mv vendor /tmp/vendor

# Start Laravel development server
CMD cp -R /tmp/vendor /var/www/html/backend/vendor \ 
    && cd /var/www/html/backend/ \
    && php artisan serve --host=0.0.0.0 --port=8000
# "php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]