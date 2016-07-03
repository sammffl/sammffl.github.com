/**
 * Created by SamMFFL on 2016/7/3.
 */
var express = require('express');
var ejs = require('ejs'),
    path = require('path');
// Path to our public directory

var pub = __dirname + '/public';
var bow = __dirname + '/bower_components';
// setup middleware

var app = express();
app.use('/public/', express.static(path.join(__dirname, 'public')));
app.use('/bower_components/', express.static(path.join(__dirname, 'bower_components')));
// Optional since express defaults to CWD/views

app.set('views', __dirname);

// Set our default template engine to "jade"
// which prevents the need for extensions
// (although you can still mix and match)
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render('index');
});


/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}