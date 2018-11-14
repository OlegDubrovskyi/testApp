'use strict';

exports.config = {

    host: 'localhost',
    port: 4723,
    path: '/wd/hub',

    baseUrl: 'http://localhost:4723',

    capabilities: {
        /*browserName: '',
        'appium-version': '1.9.1',
        deviceName: '192.168.56.101:5555',
        platformVersion: '8.0',
        platformName: 'Android',
         //'YT910NEAKY',
        app: "http://appium.github.io/appium/assets/selendroid-test-app-0.10.0.apk"*/
    },

    sync: true,

    /*logLevel: 'error',
    coloredLogs: true,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    failAmbiguousDefinitions: true,
    failFast: false,
    ignoreUndefinedDefinitions: false,*/

    specs: './tests/*.feature',

    framework: 'cucumber',
    frameworkPath: require.resolve('cucumber'),

    cucumberOpts: {
        require: [
            './step_definitions/*.step.ts',
            /*'./support/!*.ts'*/
        ],
        /*compilers: ['ts:ts-node/register'],*/
        timeout: 10000,
    },

    before:(function() {
        require('ts-node/register');
    })
};

