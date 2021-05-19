const replace = require('replace-in-file');

const results = replace.sync({
    files: 'dist/**/*.{html,js,hhc,hhk}',
    from: /\w*\.chm::\//g,
    to: (content) => {
        const result = /(\w*)\.chm::\//.exec(content);
        return `../${result[1]}/`
    }
});
