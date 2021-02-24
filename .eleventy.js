module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/styles/styles.css");

  eleventyConfig.addPassthroughCopy("./src/img/*.png");
  eleventyConfig.addPassthroughCopy("./src/img/projects/");
  eleventyConfig.addPassthroughCopy("./src/img/photography/");

  eleventyConfig.addPassthroughCopy("./src/js/");

  return {
    dir: {
      input: "src",
    },
  };
};
