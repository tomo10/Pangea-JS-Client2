# Pangea 

A crowdfunding platform for conservation projects. Users can create a profile to create, follow and donate to a wide variety of projects.

## Project background
1. Used a Rails API backend link: https://github.com/tomo10/Pangea-API 
2. Used a React frontend 
3. Has authentication and authorisations features using JavaScrpit Web Tokens. 

## Technical details
- frontend built with HTML and React.
- styling with CSS and Material UI.
- backend built with Ruby on Rails with three endpoints (one for the users, one for projects, and one for watched projects). 
- user JWT for Authentication.

## Getting started
Fork and clone the project front end at https://github.com/tomo10/Pangea-JS-Client2 
Fork and clone the project back end at https://github.com/tomo10/Pangea-API

1. In your terminal, go to the client repository `cd client` 
- run `npm install` 
- `npm install @material-ui/core` for the material design library
- `npm install --save reactstrap react react-dom` for reactstrap component
- `npm start`

2. Go to the server repository `cd server`
- run `bundle install`
- `rails db:seed`
- `rails db:migrate`
- `rails s -p 3001`

## Uses
If you have an account, just login. If you don't, sigup!
Browse conservation projects, donate to them, add them to your watchlist, and see updated stats on your dashboard. 

## Author
Thomas Edwards (https://github.com/tomo10)
