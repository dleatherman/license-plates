const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    components: "./components/**/*.webc"
  });

  eleventyConfig.addPassthroughCopy('./src/style.css')
  eleventyConfig.addPassthroughCopy('./static/', '.')

  return {
    dir: {
      data: "_data",
      input: "src",
    }
  };
};
