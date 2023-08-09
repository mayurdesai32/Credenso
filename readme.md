# CREDENSO :- Social Media App

## 1. Introduction

Purpose
The "CREDENSO" Social Media App is designed to provide users with a platform for social interaction. Users can connect with friends, share posts, like and comment on posts, and more.

Features
User Registration and Login
User Profiles
Post Creation and Sharing
Like and Comment on Posts

Technologies Used
Frontend: ReactJS, HTML, CSS
Backend: Node.js, Express, MongoDB
Other: Axios, Nodemailer, Bcrypt, Cors

## 2a. Installation and Setup (without docker)

Prerequisites
Node.js and npm installed
MongoDB installed and running

Running the App
Install frontend dependencies: npm install (inside frontend directory)
Install backend dependencies: npm install (inside backend directory)
Start frontend development server: npm start (inside frontend directory)
Start backend server: npm start (inside backend directory)

## 2a. Installation and Setup (via docker)

Prerequisites
Docker

### Install frontend dependencies:

#### go inside frontend directory

cd frontend

#### to install/uninstall dependencies

to install/uninstall dependencies :- add/delete dependenciesname in package.json

#### build image

docker build -t \<image-name> .

#### to install/uninstall dependencies

docker run -it -v \<filelocation>\:/app \<image-name> install \<dependencies name>

#### Install backend dependencies: npm install (go backend directory)

#### go inside backend directory

cd frontend

#### to install/uninstall dependencies

add/delete dependenciesname in package.json

#### build image

docker build -t \<image-name> .

#### to install/uninstall dependencies

docker run -it -v \<filelocation>:/app \<image-name> install \<dependencies name>
