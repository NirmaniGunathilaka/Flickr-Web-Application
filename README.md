# Flickr Feed Viewer and Search 

Simple web application that reads data from Flickr's public feeds and displays the images on the page to the user.

# Table of Contents

[General Infro](#GeneralInfo)

[Demo](#Demo)

[Technologies](#Technologies)

[API Testing](#APITesting)

[API Methods](#APIMethods)

[Setup](#Setup)

## General Info

This is an full stack application that can be used to load the public feed images of the API as a grid view and also to search images which returns from the API by giving a keyword.

Flickr API has used as the 3rd party API.

* Reads the Flickr's public feed

* Search images


Public Feed : "https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"

Search      : "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key="+apikey+"&tags="+value+"&format=json&nojsoncallback=1"

## Demo

![image](https://user-images.githubusercontent.com/36589720/109418198-187d3180-79ed-11eb-9831-d8196ce8a92f.png)

![image](https://user-images.githubusercontent.com/36589720/109418617-6135ea00-79ef-11eb-87e0-a122dc922c45.png)

![image](https://user-images.githubusercontent.com/36589720/109418433-5e86c500-79ee-11eb-95a0-04bc4f62bd6f.png)




## Technologies

Frontend - Reactjs 

Backend - Nodejs/Expressjs [v10.16.3]

## API Testing

Jest

$ npm run test

## API Methods

api/photos       : load the public feed images

api/search/[tag] : returns the images which is match with the relevant tag.

## Setup

### Backend

$ cd flickr-app

$ npm install

$ cd backend

$ nodemon server

### Frontend

$ cd flickr-app

$ npm install

$ npm start

