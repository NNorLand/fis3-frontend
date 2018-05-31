fis.set('project.ignore', [
    '/**/node_modules/**',
    'package.json',
    'package-lock.json',
    'README.md',
    'fis-conf.js',
    '.*'
]);

fis.match('::package', {
    postpackager: fis.plugin('loader'),
    spriter: fis.plugin('csssprites')
});

fis.match('/public/js/**.js', {
    parser: fis.plugin('babel-6.x', {
        sourceMaps: true,
        presets: ["env"]
    })
});

fis.match('/public/**.png', {
    optimizer: fis.plugin('png-compressor')
});

fis.match('/public/**.styl', {
    useHash: false,
    parser: fis.plugin('stylus', {
        compress: false, // 压缩
        sourcemap: false
    }),
    preprocessor: fis.plugin('autoprefixer', {
        'browsers': ['Android >= 2.1', 'iOS >= 4', 'ie >= 8', 'firefox >= 15'],
        'cascade': false
    }),
    rExt: '.css'
});

fis.match('/public/**.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});
