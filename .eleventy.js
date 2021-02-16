module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/styles/styles.css");

  return {
    dir: {
      input: "src",
    },
  };
};
