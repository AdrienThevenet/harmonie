FROM php:8.1-fpm

WORKDIR "/application"

COPY php-ini-overrides.ini "$PHP_INI_DIR/conf.d/99-overrides.ini"

# Fix debconf warnings upon build
ARG DEBIAN_FRONTEND=noninteractive
ARG UID
ARG GID

# Install selected extensions and other stuff
RUN apt-get update \
    && apt-get -y --no-install-recommends install \
    vim \
    zip \
    unzip \
    wget \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

# PHP iMagick
RUN apt-get update && apt-get install -y --no-install-recommends libmagickwand-dev imagemagick \
	&& pecl install imagick \
	&& docker-php-ext-enable imagick \
	&& apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

# GD & MySql
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
  && docker-php-ext-install gd pdo_mysql \
  && docker-php-ext-enable gd

# ADD SOME CACHE
RUN docker-php-ext-enable opcache
RUN pecl install apcu && docker-php-ext-enable apcu

# Install git
RUN apt-get update \
    && apt-get -y install git \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

## Mise en place Mailhog
RUN wget https://github.com/mailhog/mhsendmail/releases/download/v0.2.0/mhsendmail_linux_amd64 -O /usr/local/bin/mhsendmail
RUN chmod +x /usr/local/bin/mhsendmail

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/bin --filename=composer

# Install npm
RUN apt-get update && apt-get install -y nodejs npm

# Install yarn
RUN npm install -g yarn

# User
RUN groupadd -g $GID drupal
RUN adduser --uid $UID --gid $GID drupal
USER drupal

# Export vendor bin to get Drush
ENV PATH="$PATH:/application/vendor/bin"

# Export
ENV PATH="$PATH:/home/drupal/.config/composer/vendor/bin"
