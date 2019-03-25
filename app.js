const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('message', (text) => {
    return text.toUpperCase()
});

// app.use((request, response, next) => {
//     // let time = new Date().toString();
//     // let log = `${time}: ${request.method} ${request.url}`;
//     // // console.log(`${time}: ${request.method} ${request.url}`);
//     // fs.appendFile('server.log', log + '\n', (error) => {
//     //     if (error) {
//     //         console.log('Unable to log message');
//     //     }
//     response.render('maintenance.hbs', {
//         title: 'Maintenance',
//         year: new Date().getFullYear(),
//         welcome: 'Hello!'
//     });
//     // next();
// });

app.get('/', (request, response) => {
//    response.send('<h1>Hello Express!</h1>')
    response.send({
        name: 'Nikko',
        school: [
            'BCIT',
            'SFU',
            'UBC'
        ]
    })
});

app.get('/info', (request, response) => {
    response.render('about.hbs', {
        title: 'About',
        year: new Date().getFullYear(),
        welcome: 'Hello!'
    })
});

app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })
});

app.listen(8080, () => {
    console.log('Server is up on the port 8080')
});