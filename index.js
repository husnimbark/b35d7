const express = require ('express');

const app = express();
const port = 4500;

const isLogin = true;

// PORT
app.listen(port, function () {
    console.log(`Server running on port: ${port}`);
  });

// VIEW ENGINE
app.set('view engine', 'hbs');

app.use('/public', express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
  
// ROUTING
app.get('/', function (req, res){
    res.render('index')
});

app.get('/home', function (req, res){
    res.render('index')
});


app.get('/project', function (req, res){
    res.render('project')
});

app.post('/project', function (req, res){
    const data = req.body;
    console.log(data);

    res.redirect('/');
});

app.get('/project-detail/:index', function (req, res){
    const index = req.params.index;

    res.render('project-detail', {data: index});
});

app.get('/contact', function(req, res){
    res.render('contact')
});


