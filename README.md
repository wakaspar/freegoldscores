# *FreeGoldScores*

FreeGoldScores is front-end single-page web application that interacts with the PinballMaps.com API to pull information and (potentially) CRUD high scores for my favorite local pinball arcade, FreeGoldWatch.  

This app uses Angular, Materialize, and JQuery (as a dependency of Materialize).  The CDNs are all linked in index.html.

A note on file structure:  This front-end was originally built with Bootstrap, but I've been learning Materialize, so I switched it over.  Some of the old Bootstrap files are still lingering around (like old_index.html and styles.css).

Otherwise, super straightforward stuff here.

## Live Deployment
These days, I have a live deployment up.  A lack of proper CORS headers still prohibits the actual CRUDing of high scores, but the rest of the app is available to tinker with [here](http://freegoldscores.bitballoon.com).

## Index Page
![screen shot 2017-03-06 at 10 11 01 pm](https://cloud.githubusercontent.com/assets/22823273/23644150/968b4aa2-02ba-11e7-95cb-ec2ec4b887ff.png)

## Show Page
![screen shot 2017-03-06 at 10 11 26 pm](https://cloud.githubusercontent.com/assets/22823273/23644149/968b138e-02ba-11e7-849c-3576d59c9b66.png)


## Server Setup
I've been using budo to run a locally hosted server, if you don't have it (or something similar) you may need to install it.

#### Globally Install budo
```
npm install budo -g
```
#### Launch budo Server
```
budo -P --host=localhost --open
```

## Credits
My dog, Indigo.

#### Shout-out to the crew @ PinballMap
http://www.pinballmap.com
#### PBM API Docs
http://pinballmap.com/api/v1/docs

