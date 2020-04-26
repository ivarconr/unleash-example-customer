const { User, AuthenticationRequired } = require('@ivarconr/unleash-enterprise');

function enableCustomAuth(app) {
    app.use((req, res, next) => {
        req.user = new User({email: 'demo@unleash-hosted.com', permissions: ['ADMIN']});
        next();
    });
}
module.exports = enableCustomAuth;