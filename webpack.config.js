const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // Your existing rules
        ]
    },
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify")
        }
    }
};
