const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const exampleModel = mongoose.model('example');
const userModel = mongoose.model('user');

router.route('/login').post((req, res, next) => {
    if (req.body.username, req.body.password) {
        passport.authenticate('local', function (error, user) {
            if (error){
                return res.status(500).send( error);
            }
            req.logIn(user, function (error){
                if (error) {
                    return  res.status(500).send( error);
                }

                return  res.status(200).send('sikeres bejelentkezes');
            });
        })(req, res);
    } else {
        res.status(400).send('hibas keres - username, password, email kozul vmi');
    }
});
router.route('/logout').post((req, res, next) => {

    if (req.isAuthenticated()) {
        req.logout((err) => {
            if(err) {
                return res.status(500).send(err)
            }
            return res.status(200).send('Kijelentkezes sikeres');
        });
    } else {
        return res.status(403).send('Nem is volt bejelentkezve');
    }
})


router.route('/status').get((req,res, next)=>{
    if (req.isAuthenticated()){
        return res.status(200).send(req.session.passport);
    } else {
        return res.status(403).send('nem is volt bejelentkezve');
    }
})

router.route('/user').get((req, res, next) => {
        userModel.find({}, (err, users) => {
            if (err) {
                res.status(500).send('db hiba');
            }
            res.status(200).send(users);
        });
    }
).post((req, res, next) => {
        if (req.body.username && req.body.email && req.body.password) {
            userModel.findOne({username: req.body.username}, (err, user) => {
                if (err) {
                    res.status(500).send('db hiba');
                }
                if (user) {
                    return res.status(400).send('mar letezik ilyen felhasznalo');
                }
                user = new userModel({
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email
                })
                user.save((error) => {
                    if (error) {
                        return res.status(500).send('A mentes soran hiba tortent');
                    }
                    return res.status(200).send('Sikeres mentes tortent');
                })
            })

        } else {
            res.status(400).send('hibas keres - username, password, email kozul vmi');
        }
    }
);


router.route('/example'
).get((req, res, next) => {
    exampleModel.find({}, (err, examples) => {
        res.status(200).send(examples);
    });
}).post((req, res, next) => {
    if (req.body.id && req.body.value) {
        exampleModel.findOne({id: req.body.id}, (err, example) => {
            if (err) {
                res.status(500).send('DB hiba tortent :c');
            }
            if (example) {
                res.status(400).send('van már ilyen id');
            } else {
                const example = new exampleModel(
                    {id: req.body.id, value: req.body.value}
                );
                example.save((error) => {
                    if (error) {
                        return res.status(500).send('A mentes soran hiba tortent');
                    }
                    return res.status(200).send('Sikeres mentes tortent');
                })
            }

        })
    } else {
        return res.status(400).send('nem volt id vagy value');
    }

}).put((req, res, next) => {
    if (req.body.id && req.body.value) {
        exampleModel.findOne({id: req.body.id}, (err, example) => {
            if (err) {
                res.status(500).send('DB hiba tortent :c');
            }
            if (example) {
                example.value = req.body.value;
                example.save((error) => {
                    if (error) {
                        return res.status(400).send('Nincs ilyen id aza adatbazisban');
                    }

                    return res.status(200).send('Sikeres mentes tortent');
                })

            }

        });
    } else {
        res.status(400).send('nincs ilyen id');
    }

}).delete((req, res, next) => {
    if (req.body.id) {
        exampleModel.findOne({id: req.body.id}, (err, example) => {
            if (err) {
                res.status(500).send('DB hiba tortent :c');
            }
            if (example) {
                example.delete((error) => {
                    if (error) {
                        return res.status(500).send('A torles soran hiba tortent');
                    }
                    return res.status(200).send('sikeres torles tortent');
                })
            } else {
                return res.status(400).send('nem volt id vagy value');
            }
        })
    } else {
        return res.status(400).send('nem volt id vagy value');
    }
})

module.exports = router;

