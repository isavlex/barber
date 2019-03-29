module.exports = {
    'postcss': [],
    'svg': {
        'active': true,
        'workflow': 'symbols',
        'symbolsConfig': {
            'loadingType': 'separate-file-with-link',
            'usePolyfillForExternalSymbols': true,
            'pathToExternalSymbolsFile': ''
        }
    },
    'css': {
        'workflow': 'concat'
    },
    'js': {
        'workflow': 'modular',
        'bundler': 'webpack',
        'lint': true,
        'useBabel': true,
        'removeConsoleLog': true,
        'webpack': {
            'useHMR': false,
            'providePlugin': {}
        },
        'jsPathsToConcatBeforeModulesJs': [],
        'lintJsCodeBeforeModules': false,
        'jsPathsToConcatAfterModulesJs': [],
        'lintJsCodeAfterModules': false
    },
    'sourcemaps': {
        'js': {
            'active': true,
            'inline': true
        },
        'css': {
            'active': true,
            'inline': true
        }
    },
    'notifyConfig': {
        'useNotify': false,
        'title': 'TARS notification',
        'sounds': {},
        'taskFinishedText': 'Task finished at: '
    },
    'minifyHtml': false,
    'generateStaticPath': true,
    'devPath': './dev/',
    'buildPath': './builds/',
    'useBuildVersioning': true,
    'useArchiver': true,
    'ulimit': 4096,
    'templater': 'pug',
    'cssPreprocessor': 'scss',
    'useImagesForDisplayWithDpi': [
        96,
        192
    ],
    'fs': {
        'staticFolderName': 'static',
        'imagesFolderName': 'img',
        'componentsFolderName': 'components'
    },
    'staticPrefix': 'static/'
};
