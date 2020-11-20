FROM nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY ./templates /etc/nginx/templates

CMD ["nginx", "-g", "daemon off;"]