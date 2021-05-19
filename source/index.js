const replace = require('replace-in-file');

replace.sync({
    files: 'dist/**/*.{html,js,hhc,hhk}',
    from: /\w*\.chm::\//g,
    to: (content) => {
        const result = /(\w*)\.chm::\//.exec(content);
        return `../${result[1]}/`
    }
});

// Not sure these are actually useful
// For now not patching so that the requests all fail for invalid schemas
// replace.sync({
//     files: 'dist/**/checkinstalled.js',
//     from: `"ms-its:" + client + `,
//     to: ''
// });

// replace.sync({
//     files: 'dist/**/*.js',
//     from: /ms-its:/gi,
//     to: ''
// });
