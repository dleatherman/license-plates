
module.exports = function (eleventyConfig) {

  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes"
    }
  };
};
