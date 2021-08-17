const fakeUser = {
    username: "Nicolas",
    loggedIn: true,
  };

export const testbirdmain = (req, res) => res.render("home", {pageTitle: "main", fakeUser});