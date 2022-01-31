# Can Of Books

* [Published Via Netlify](https://app.netlify.com/sites/mystifying-leakey-7fb2c2/overview)

**Author**: Chuck Altopiedi, Regan Hayes, Robb Alexander
**Version**: 0.9.0

## Overview

Can Of Books is a web-based app that stores the titles and descriptions of books that the users wish to track. Book data is stored in a database and retrieved by the back-end server, while the user experiences a web page interface that allows for addition, deletion, and display of their book data.

Repos are available for [front-end](https://github.com/raechanel/can-of-books-frontend) and [back-end](https://github.com/ChuckAlto/can-of-books-backend) code.

## Getting Started

This app was built in Node.JS around starter code for a React app and for basic server functions. Response and request functions were written out to perform state-based data collection and display.

## Architecture

 Using Netlify as a web client host and Heroku for server support, the database itself was hosted on MongoDB. The Mongoose library was used for ease of server-to-DB functionality. GitHub was used for git-based DVC.

## Change Log

01/24/22

01/25/22

* 01/26/22
  * Deployed to [Netlify](https://app.netlify.com/sites/mystifying-leakey-7fb2c2/overview)
 (front-end) and [Heroku](https://can-of-books-301.herokuapp.com/) (back-end)

01/27/22

### Features

#### User Book Addition Form

Estimated feature build time: 2 Hours
01/25/22

Actual completion time: 6:00PM-8:20PM PST

#### User Book Deletion Button

1/25/22 - 1/26/22

Estimated feature build time: 0.75 Hours

Actual Completion time: 85 minutes (8:45-9:25 PST 1/25/22, 2:30-3:15 PM PST 1/26/22)

#### Modal Display for Addition & Update Forms

#### User Book Update Form

1/26/22
Estimated feature build time: 3 Hours

Actual Completion Time: 2.45 Hours (3:30-6:15PM PST)

#### Login Authenication (powered by Auth0)

1/30/22
Estimated feature build time: 2 Hours

Actual Completion Time: Hours (4:30-7:45PM PST, minus 1 hour worth of breaks and waiting on mutual availability)

## Credit and Collaborations

Assistance was provided by Code Fellows staff members: Ryan Gallaway, Riva Davidowski, Sarah Creager

## Work Log

* 01/24/22: Driver Log [Other teammate non-navigation actions in brackets]:

  * [Robb: when not driving, periodically recorded in ReadMe]
  * Rae: Created front-end repo [cloned locally]; deployment of front-end to Netlify;
  * Chuck: Created back-end repo [cloned locally]; deployed to back-end to Heroku;
  * Rae: set up MongoDB  [also setup MongoDB accounts]
  * Chuck: installed Mongoose [also installed Mongoose]; wrote code to import Mongoose library
  * Rae: Wrote book schema; modularized
  * Chuck: Seeded 4 books – troubleshooting for connection to local Mongo
  * Rae: (with Ryan's oversight) – refactored from `.save` format to `.create`.

* 01/25/22: Driver Log
  * Chuck: Caught up Lab 11 Backend features []
  * Robb: Caught up Lab 11 Frontend features []
  * Rae: Coded POST request functionality of user form per Lab 12.1 in Trello [Updated ReadMe]

* 01/26/22: Driver Log
  * Chuck: Caught up remaining Lab 12 Features: Modals, deletion, carousel styling& functionality ; built out PUT request functionality

* 1/30/22: Driver Log
  * Rae: Implemented Auth0 authentication to site login [Robb: setup Auth0 account and provided domain & ID codes]

## Team Agreement

### Logistical

#### Work hours

Remo Hours: “~1:00 – 6:00 PST”

#### Communication Platforms

Remo, Slack

#### Break frequency

Roughly 10 minutes per hour

#### Catch-up strategy

Possibility for additional hours (up to 3 past main schedule)

### Cooperative Assessment

#### Respective Strengths

* Robb: Writing, proofreading,
* Rae: Leadership, researching code solutions, use of asynchronous functions,
* Chuck: Listening, constructor functions,

#### Developer Development

* Robb: Seeks to develop better intuition for setting up server files;

* Rae: Seeks to get more comfortable with arrow function refactoring; Wants to get better at communicating about code,

* Chuck: Wants to get better at communicating about code;

### Day-to-Day

#### Group of three

The Driver-Navigator roles will require one person directly coding and two others observing, guiding, and researching solutions. Driver role will rotate between members, with the goal being rough balance of time and practice in desired growth areas.

#### Conflict Resolution

Set clear goals and divisions of tasks.
Communicate first: attempt to resolve issues directly as a full group, then ask for Ryan’s involvement.
Approach each other with kindness, grace, and empathy. This is first and foremost a learning environment-- this project should be an opportunity for maximum growth, not best possible results.
