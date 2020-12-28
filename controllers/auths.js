import signupTables from '../models/signUpModels.js';

export const createUsers = (req, res) => { 
    const signUp = new signupTables({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    signUp.save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
}