self.addEventListener("fetch", function (event) {
  console.log("Service worker fetch: ", event);
});
