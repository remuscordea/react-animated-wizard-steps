function timeout(ms = 600) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  timeout,
};
