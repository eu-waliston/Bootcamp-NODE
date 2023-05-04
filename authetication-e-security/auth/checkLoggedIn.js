function checkLoggedIn(req, res, next) {
  console.log('Current user is', req.user);
  const isLoggedIn = rq.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: "You must log in!",
    });
  }
  next();
}

module.exports = checkLoggedIn;
