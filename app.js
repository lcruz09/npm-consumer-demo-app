/**
 * Copyright 2009 Intelligent Sense.
 * All Rights Reserved.
 * 
 * This software is the propietary information of 
 * Intelligent Sense.
 * Use this subject to license terms.
 *
 * Filename: app.js
 */


// Load the git module
var gitProducer = require('git-producer-demo-app');

// Load the npm module 
var npmProducer = require('npm-producer-demo-app');

// Test the modules
gitProducer.testModule();
npmProducer.testModule();