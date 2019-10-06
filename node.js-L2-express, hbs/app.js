const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path'); /*для того, щоб вирівнювати слеші*/

//запустити сервер через модуль express
const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs'
}));

app.set('view engine', '.hbs'); /* встановлюємо сетінгс*/
app.set('views', path.join(__dirname, 'static'));

app.get('/login', (req, res)=> {
    res.render('login');
    console.log('login');
});

app.post('/register', (req, res)=> {
    console.log(req);

});
app.get('/', (req, res)=> {
    res.render('home', {title: 'pam-param-pam'});
    // console.log(main);

});

app.post('/register', (req, res)=> {
    let body = req.body;
    users.push(body);
    res.render('login')
});

app.get('./users', (req, res)=> {
    res.json(users)
});


/*http протокол має 8 методів:
get - щоб щось отримати - не має body
post - щоб щось записати, створити, має body
put - оновити повністю
delete -  не має body
patch - частоке оновлення
option
 */

//templete engine Handlebars.js





app.listen(3000, ()=> {
    console.log(3000);
});
