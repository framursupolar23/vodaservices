module.exports =
{
    getToken: function (username, scopes)
    {
        var sha256 = require('sha256');

        var ups = username + '|' + scopes + '|' + Date.now();
        var encrypt = sha256(ups);
        var token = { token: ups + '|' + encrypt };

        return token;
    }
}