FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf.template

COPY nginx-entrypoint.sh /nginx-entrypoint.sh
RUN ["chmod", "+x", "/nginx-entrypoint.sh"]

ENTRYPOINT ["/nginx-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
