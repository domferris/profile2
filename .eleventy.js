module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/img/*.png");
  eleventyConfig.addPassthroughCopy("./src/img/photography/");

  return {
    dir: {
      input: "src",
    },
  };
};
