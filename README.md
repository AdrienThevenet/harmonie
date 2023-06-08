<img alt="Drupal Logo" src="https://www.drupal.org/files/Wordmark_blue_RGB.png" height="60px">

Drupal is an open source content management platform supporting a variety of
websites ranging from personal weblogs to large community-driven websites. For
more information, visit the Drupal website, [Drupal.org][Drupal.org], and join
the [Drupal community][Drupal community].



## Information

Drupal Version 10.0.3


Environnement Docker :
- MailHog
- Mysql
- PhpMyAdmin
- PHp-fpm
- Nginx (Webserver)


## Installation

- Clone the project
- You have en .env.exemple to edit your own .env. In your .env you can all about image docker if you want
- Start image with : ``` docker compose up ```
- Go to container php-fpm and run : ``` composer install ```
- Enjoy your drupal 10
