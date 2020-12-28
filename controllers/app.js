

export const homePage = (req, res) => {
    res.render('home', {title: 'Home'});
}

export const aboutPage = (req, res) => {
    res.render('about', {title: 'About'});
}

export const newUser = (req, res) => {
    res.render('login', {title: 'Login'})
}

export const errorPage = (req, res) => {
    res.status(404).render('404', {title: '404'});
}

