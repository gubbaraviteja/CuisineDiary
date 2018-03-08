const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/cuisines/', (req, res) => {
    res.send('App is working fine :)');
});

app.listen(app.get('port'), () => {
    console.log("Express app started on localhost:",app.get('port'));
});