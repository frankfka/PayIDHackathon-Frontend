module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // Import global styles
        prependData: `
          @import "@/global.scss";
        `,
      },
    },
  },
};
