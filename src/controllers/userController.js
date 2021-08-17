export const user = (req, res) => res.send("userPage!");
export const edit = (req, res) => res.send("user editPage!");
export const login = (req, res) => res.render("login",{pageTitle:"login"});
export const logout = (req, res) => res.send("user logoutPage!");
export const enroll = (req, res) => res.render("enroll", {pageTitle:"enroll"});