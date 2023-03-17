const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "components/**/*.webc"
  });

  return {
    dir: {
      data: "_data",
      input: "src",
    }
  };
};
