// module.exports = {
//   chainWebpack: (config) => {
//     // Load and handle images
//     config.module
//       .rule('images')
//       .use('url-loader')
//       .loader('url-loader')
//       .tap((options) => {
//         if (!options.hasOwnProperty('limit')) {
//           options.limit = 8192;
//         }
//         return options;
//       });
//   },
// };
