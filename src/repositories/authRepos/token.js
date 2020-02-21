const jwt = require('jsonwebtoken');

module.exports = {
    tokenGenerator : (metaData) => {
        let token = jwt.sign({ metaData }, 'somePassword')
        console.log('Tken: ' + token)
        return token;
    },
    verifyToken : (token) => {   
        let token2 = jwt.sign(token, 'somePassword');
        let decoded = jwt.verify(token2, 'somePassword');
        console.log("DDDD" + decoded);
        
        console.log(decoded) // bar
        return decoded
    }
}