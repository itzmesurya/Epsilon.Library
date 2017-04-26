module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var report = './report/';
    var root = './';
    var server = './src/server/';
    var temp = './.tmp/';
    var specRunnerFile = 'specs.html';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({
        devDependencies: true
    })['js'];
    var config = {
        alljs: [
            './src/**/*.js',
            './*.js',
            '!./src/client/libraries/**/*.js'
        ],
        build: './build/',
        client: client,
        css:{
            all:[client + '**/*.css',
             '!' + client + 'styles/materialLab/*.css',
             '!' + client + 'styles/ace/*.css'],
            materialLab:[client + 'styles/materialLab/vendor.bundle.css',
            client + 'styles/materialLab/app.bundle.css',
            client + 'styles/materialLab/theme-a.css'],
            ace:{
                bootstrap:[client + 'styles/ace/bootstrap.min.css',
                client + 'fonts/ace/font-awesome.min.css'
                ],
                plugins:[client + 'styles/ace/jquery-ui.custom.min.css',
                client + 'styles/ace/chosen.min.css',
                client + 'styles/ace/bootstrap-datepicker3.min.css',
                client + 'styles/ace/bootstrap-datetimepicker.min.css',
                client + 'styles/ace/daterangepicker.min.css',
                client + 'styles/ace/bootstrap-datetimepicker.min.css',
                client + 'styles/ace/bootstrap-colorpicker.min.css',
                client + 'styles/ace/fonts.googleapis.com.css'],
                acestyles:[client + 'styles/ace/ace.min.css',
                client + 'styles/ace/ace-skins.min.css',
                client + 'styles/ace/ace-rtl.min.css']}
    },
        fonts: [
            client + 'fonts/**/*.*'
        ],
        html: clientApp + '**/*.html',
        htmltemplates: clientApp + 'templates/**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: {
            app: [
                clientApp + '**/*.module.js',
                clientApp + '**/*.js',
                '!' + clientApp + '**/*.spec.js'
            ],
            libraries: {
                all:[ client + 'libraries/**/*.js',
                 '!' + client + 'libraries/materialLab/*.js',
                 '!' + client + 'libraries/ace/*.js'],
                materialLab:[client + 'libraries/materialLab/vendor.bundle.js',
                 client + 'libraries/materialLab/app.bundle.js'],
                ace:{
                    plugins:[client + 'libraries/ace/jquery-2.1.4.min.js',
                    client + 'libraries/ace/bootstrap.min.js',
                    client + 'libraries/ace/jquery-ui.custom.min.js',
                    client + 'libraries/ace/jquery.ui.touch-punch.min.js',
                    client + 'libraries/ace/chosen.jquery.min.js',
                    client + 'libraries/ace/spinbox.min.js',
                    client + 'libraries/ace/bootstrap-datepicker.min.js',
                    client + 'libraries/ace/bootstrap-timepicker.min.js',
                    client + 'libraries/ace/moment.min',
                    client + 'libraries/ace/daterangepicker.min.js',
                    client + 'libraries/ace/bootstrap-datetimepicker.min.js',
                    client + 'libraries/ace/bootstrap-colorpicker.min.js',
                    client + 'libraries/ace/jquery.knob.min.js',
                    client + 'libraries/ace/autosize.min.js',
                    client + 'libraries/ace/jquery.inputlimiter.min.js',
                    client + 'libraries/ace/jquery.maskedinput.min.js',
                    client + 'libraries/ace/bootstrap-tag.min.js'],
                    acejs:[client + 'libraries/ace/ace-elements.min.js',
                    client + 'libraries/ace/ace.min.js']}
            }
        },
        less: client + 'styles/styles.less',
        report: report,
        root: root,
        server: server,
        temp: temp,
        /**         * optimized files           */
        optimized: {
            app: 'app.js',
            lib: 'lib.js',
            ace: 'ace.js'
        },
        /**         * template cache            */
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'ep.formly.templates',
                standAlone: false,
                root: 'app/templates/'
            }
        },
        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },
        packages: [
            './package.json',
            './bower.json'
        ],
        /**
         * specs.html, our HTML spec runner
         */
        specRunner: client + specRunnerFile,
        specRunnerFile: specRunnerFile,
        testlibraries: [
            'node_modules/mocha/mocha.js',
            'node_modules/chai/chai.js',
            'node_modules/mocha-clean/index.js',
            'node_modules/sinon-chai/lib/sinon-chai.js'
        ],
        specs: [clientApp + '**/*.spec.js'],

        /**
         * Karma and testing settings
         */
        specHelpers: [client + 'test-helpers/*.js'],
        serverIntegrationSpecs: [client + 'tests/server-integration/**/*.spec.js'],

        /**
         * Node settings
         */
        defaultPort: 7201,
        nodeServer: './src/server/app.js'
    };
    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };
    config.karma = getKarmaOptions();

    return config;

    ////////////////

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                client + '**/*.module.js',
                client + '**/*.js',
                temp + config.templateCache.file,
                config.serverIntegrationSpecs
            ),
            exclude: [].concat(
            ),
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    { type: 'html', subdir: 'report-html' },
                    { type: 'lcov', subdir: 'report-lcov' },
                    { type: 'text-summary' }
                ]
            },
            preprocessors: {}
        };
        options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }
};
