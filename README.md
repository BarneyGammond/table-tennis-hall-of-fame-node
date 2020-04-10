# Table Tennis Hall of Fame API (Built with Node, Koa and MySQL)

This API can be used alongside my [table tennis tournament app](https://github.com/BarneyGammond/table-tennis-tournament) to save the winners of previous tournaments (with stats) and include them in later tournaments. Currently this can only be run locally. A PHP Laravel version of this back-end can be found [here](https://github.com/BarneyGammond/table-tennis-hall-of-fame)

## Run App Locally

1. Clone the repository with the following command

      `git clone git@github.com:BarneyGammond/table-tennis-hall-of-fame-node.git <local folder name>`

2. Run the following commands for setup
    * `npm install`
    * `vagrant up`
    * `npm start`

4. Use [http://localhost:8000](http://localhost:8000) to make API requests

## API Routes

#### `GET/players`
This will return an array of player objects with an id for each
#### Data Format
```json
[{
    "name" : "playerName",
    "tournaments_won" : 1,
    "points_won" : 21,
    "points_conceded" : 2
}]
```
#### `GET/players/{id}`
This will return the player which matches the id in the url
#### Data Format
```json
{
    "name" : "playerName",
    "tournaments_won" : 1,
    "points_won" : 21,
    "points_conceded" : 2
}
```
#### `POST/players/`
This will add a player to the database
#### Data Format
```json
{
    "name" : "",
    "tournaments_won" : ,
    "points_won" : ,
    "points_conceded" : 
}
```
#### `PUT/players/{id}`
This will update the player who's ID matches the url
#### Data Format
```json
{
    "name" : "",
    "tournaments_won" : ,
    "points_won" : ,
    "points_conceded" : 
}
```
