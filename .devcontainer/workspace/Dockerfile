FROM amazonlinux:2

COPY httpd.conf /etc/httpd/conf.d/my.conf

RUN yum update -y \
  && yum -y install tar gzip zip unzip git

# Apache
RUN yum -y install httpd \
  && systemctl enable httpd

# MariaDB
RUN yum -y install mariadb-server \
  && systemctl enable mariadb

# PHP
RUN amazon-linux-extras install epel
RUN yum -y install epel-release
RUN rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm
RUN yum install -y composer php74 php74-php php74-php-mysqlnd php74-php-mbstring php74-php-mbstring php74-php-xml
RUN ln -nfs /usr/bin/php74 /usr/bin/php

# Node.js
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum install -y nodejs
RUN npm install -g @vue/cli

# Git
RUN yum install -y curl-devel expat-devel gettext-devel openssl-devel perl-devel zlib-devel wget make gcc
WORKDIR /usr/local/src/
RUN wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.29.1.tar.gz
RUN tar xzvf git-2.29.1.tar.gz
WORKDIR /usr/local/src/git-2.29.1/
RUN make prefix=/usr/local all
RUN make prefix=/usr/local install

RUN echo PS1=\"[\\u@\\h \\W]$ \" >> ~/.bashrc
