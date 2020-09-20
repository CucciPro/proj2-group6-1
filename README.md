# Project 2 - Group 6 - Project Name TBD

This project demonstrates the use of the following packages : 
- <a href="https://www.npmjs.com/package/express" target="_blank">express</a>
- <a href="https://www.npmjs.com/package/express-session" target="_blank">express-session</a>
- <a href="https://www.npmjs.com/package/express-handlebars" target="_blank">express-handlebars</a>
- <a href="https://www.npmjs.com/package/sequelize" target="_blank">sequelize</a>
- <a href="hhttps://www.npmjs.com/package/connect-session-sequelize" target="_blank">connect session sequelize</a>
- <a href="https://www.npmjs.com/package/mysql2" target="_blank">mysql12</a>
- <a href="https://www.npmjs.com/package/dotenv" target="_blank">dotenv</a>
- <a href="https://www.npmjs.com/package/bcrypt" target="_blank">bycrypt</a>
- <a href="https://bulma.io/" target="_blank">bulma</a>

## Setup Instructions

*Instructions written for Windows.*

1. Open a terminal on your computer
1. Change directory to desired location for repository : cd <desired_repo_location>
1. Clone repo : git clone <this_repo>
1. Change directory into the repo directory created from the clone command : cd <repo_directory>
1. Initialize npm : npm init -y
1. Install packages : npm install express express-session sequelize mysql2 express-handlebars connect-session-sequelize dotenv bcrypt bulma
1. If you don't have nodemon installed globally already, do that now.  If you do, skip this step : npm install -g nodemon
1. Install nodemon as dev dependency for this repo (if not installed globally you will encounter an error, install globally first [command found in step above]) : npm install --save-dev nodemon
1. Create a .env file in the root directory and add values for DB_NAME, DB_USER, and DB_PW, like so :
    
    DB_NAME='proj2_group6_db'

    DB_USER='root'
    
    DB_PW='<your mysql password goes here>'

1. Start mysql (this step is where the walkthrough video starts) : mysql -u root -p
1. If prompted for a password, enter the password for your mysql db
1. Set up db : source db/schema.sql;
1. Optional, confirm that the db was created : show databases;
1. Quit mysql : \q;
1. Seed db : npm run seed
1. Start the server with either of the following commands : npm start -or- node server.js

