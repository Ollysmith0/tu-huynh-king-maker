import path from 'path';

module.exports = {
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
