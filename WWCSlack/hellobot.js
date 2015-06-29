module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botLady = {
    text : 'Hello amazing coder, ' + userName + '!'
  };


//avoid infinite loop
if (userName !== 'slackbot'){
  return res.status(200).json(botLady);
} else {
  return res.status(200).end();
}
}