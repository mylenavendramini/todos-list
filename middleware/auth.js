module.exports = {
  ensureAuth: function (req, res, next) {
    // if the user is authenticated, move on:
    if (req.isAuthenticated()) {
      return next();
    } else {
      // if the user is not authenticated, redirect to the main page:
      res.redirect("/");
    }
  },
};
