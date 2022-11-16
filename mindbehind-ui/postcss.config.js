module.exports = {
    plugins: {
        'postcss-nested': {},
        "postcss-custom-media": {
            importFrom: [
                {
                    customMedia: {'--m': '(min-width: 959.95px)'}
                },
            ]
        }
    },
}