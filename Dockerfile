### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:14-alpine as builder

#COPY package.json ./
COPY package-lock.json ./

RUN apk add --no-cache git
RUN git --version

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm install -g angular

RUN npm i && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

ARG CONFIG=prod
ARG BASEHREF=/pms/webapp-v2/
## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --configuration="$CONFIG" --output-path=dist --base-href "$BASEHREF"

## Run kendo license
COPY kendo-ui-license.txt ./
RUN npm install --save @progress/kendo-licensing && npx kendo-ui-license activate



### STAGE 2: Setup ###

FROM nginx:1.14.1-alpine

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
