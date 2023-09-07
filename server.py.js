const app = require('./app');

app.listen(app.use('port'), () => {
    console.log(`server is listening on port ${app.use('port')}`);
});