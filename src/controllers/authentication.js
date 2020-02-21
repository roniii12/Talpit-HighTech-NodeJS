const authenticationRepository = require('../repositories/authRepos/token');

module.exports = (app) => {
    app.post('/signin', (req, res, next) => {
        const password = req.body.password
        const userName = req.body.username
        const token = authenticationRepository.tokenGenerator(password)
        
        res.send(authenticationRepository.tokenGenerator({wow : 'wow'}));
    })
    app.post('/signup', (req, res, next) => {
        res.send('hello sweetie');
    })
    app.post('/verify',(req,res)=> {
        res.send(authenticationRepository.verifyToken(req.body.token))
    })
}
