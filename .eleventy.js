module.exports = function(eleventyConfig) {
  // Copy assets to output directory
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  // Watch for changes in CSS files
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Configure markdown options
  eleventyConfig.setLibrary("md", require("markdown-it")({
    html: true,
    breaks: true,
    linkify: true
  }));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"]
  };
};