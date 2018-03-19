const express = require('express');
const app = express();
app.use(express.static(__dirname+'/css'));
app.use(express.static(__dirname+'/templates'));
app.use(express.static(__dirname+'/assets'));

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.sendFile(index.html);
});

app.get('/cuisines/', (req, res) => {
    res.send('App is working fine :)');
});

app.listen(app.get('port'), () => {
    console.log("Express app started on localhost:",app.get('port'));
});