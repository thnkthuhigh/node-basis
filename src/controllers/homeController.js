const getHomepage = (rep, res) => {
  res.render("sample");
};

const abcPage = (rep, res) => {
  res.send("check abc");
};

module.exports = {
  getHomepage,
  abcPage,
};
