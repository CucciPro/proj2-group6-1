const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({
  helpers: {
    format_date_input: date => {
      return `${date.getUTCFullYear()}-${('0' + (date.getUTCMonth() + 1)).slice(-2)}-${('0' + date.getUTCDate()).slice(-2)}`;
    },
    format_date_display: date => {
      return `${('0' + (date.getUTCMonth() + 1)).slice(-2)}/${('0' + date.getUTCDate()).slice(-2)}/${date.getUTCFullYear()}`;
    },
    getSelectedValue: (arg1,arg2) => {
      //console.log(arg1,arg2);
      return arg1 === arg2 ? 'selected' : false;
    }
  }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('='.repeat(50) + '\n Now listening at localhost:3001 \n' + '='.repeat(50)));
});
