const express = require('express');
const port = 3000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
const dbUrl = 'mongodb://127.0.0.1:27017/mongo_db_car';

const app = express();
mongoose.connect(dbUrl);
mongoose.connection.on('connected', ()=>{
  console.log('csatlakoztatva');
})
mongoose.connection.on('error', ()=>{
    console.log('hiba tortent a mongossal', err);
} )

require('./example.model')
require('./user.model')
const userModel = mongoose.model('user');

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({}));
app.use(cors());
passport.use('local', new localStrategy(function (username, password, done){
    userModel.findOne({username : username}, function (err, user){
        if (err) {
            return done('hiba a lekeres soran');
        }
        if (!user){
            return done('nincs ilyen felhasznalonev');
        }
        user.comparePasswords(password, function (error, isMatch){
            if (error){
                return done(error, false);
            }
            if (!isMatch) return done('hibas jelszo', false);
            return done(null, isMatch);
        })
    })
}));
app.use(expressSession({secret: 'prf2023', resave: true}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res, next) => {
        res.send('hello world')
        // console.log('a hello world route ')
        // next();
    }
);

passport.serializeUser(function (user, done){
    if (!user){
        return done('nincs megadva beleptetheto user', null);
    }
    return done(null, user);
});

passport.deserializeUser(function (user, done){
    if (!user){
        return done('nincs kileptetheto user', null);
    }
    return done(null, user);
});

app.use('/', require('./routes'));
app.use('/secondary', require('./routes'))

app.use((req, res, next) => {
    console.log('ez a hibakezelo a legvegen');
    res.status(404).send('a kert eroforras nem talalhato');
})


app.listen(port, () => {
    console.log('A szerverem fut');
})