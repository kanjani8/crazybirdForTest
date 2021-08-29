import User from "../models/user";

export const getEnroll = (req, res) => res.render("enroll", {pageTitle:"enroll"});
export const postEnroll = (req, res) => res.render("enroll", {pageTitle:"enroll"});


export const user = (req, res) => res.send("userPage!");
export const edit = (req, res) => res.send("user editPage!");

export const getLogin = (req, res) => res.render("login",{pageTitle:"login"});
export const postLogin = (req, res) => res.render("login",{pageTitle:"login"});

export const logout = (req, res) => res.send("user logoutPage!");
