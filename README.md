# ES2015 Modular Architecture Project Boilerplate (UMD for Server w/ Webpack)

This repository contains a ready-to-go project structure w/ ES2015 modules and the proper tools to compile these modules into a browser-ready version (w/ [SystemJs](https://github.com/systemjs/systemjs))

## Install

Clone the repository

    git clone https://github.com/juanmaguitar/project-es2015-webpack-umd.git

Install the dependencies

    npm install

And you can compile and check that the final files work fine in the server
    
    npm start 
    node dist/project-babel-webpack.js

... and in the browser

    npm start
    open "index.html"


## Real time compile and execute

You can also launch real-time-compiling-and-executing in server 

    (npm start &) && nodemon dist/project-babel-webpack.js

With this, everytime you modify something on the `src` folder you'll see in the console the execution of the final files 

CTRL-C (CMD-C) to stop it

With _&_ we launch tasks in background so if you launch this several times be aware of doing 

    ps 
    kill [id-task]

to kill previous similar tasks

## Notes

This project is based on the [generator-babel-webpack](https://github.com/Pitzcarraldo/generator-babel-webpack) w/ some modifications added

[![Travis build status](http://img.shields.io/travis/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack.svg?style=flat)](https://travis-ci.org/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack)
[![Code Climate](https://codeclimate.com/github/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack/badges/gpa.svg)](https://codeclimate.com/github/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack)
[![Test Coverage](https://codeclimate.com/github/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack/badges/coverage.svg)](https://codeclimate.com/github/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack)
[![Dependency Status](https://david-dm.org/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack.svg)](https://david-dm.org/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack)
[![devDependency Status](https://david-dm.org/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack/dev-status.svg)](https://david-dm.org/Not authed.  Run &#39;npm adduser&#39;/project-babel-webpack#info=devDependencies)