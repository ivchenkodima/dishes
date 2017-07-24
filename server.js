import fs from 'fs';
import path from 'path';
import { Server } from 'http';
import Express from 'express';

const app = new Express();
const server = new Server(app);

app.set('view engine', 'ejs');
app.engine('html', function (path, options, callbacks) {
    fs.readFile(path, 'utf-8', callback);
});

app.use(Express.static(path.join(__dirname, 'src')));
app.get('*', function(req, res) {
    res.render('index');
});


const port = 8000;
app.listen(port, function () {
    console.log('running at localhost:' + port);
});
