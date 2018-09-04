#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');

const pkg = require('./package.json');
const quote = require('./index');

const cli = meow(`
    Usage
        $ breaking-bad-quotes [options]

    Options
        --number    Set number of quotes returned (default: 1)

    Examples
        $ breaking-bad-quotes
        I'm not in the meth business. I'm in the empire business. - Walter White

        $ breaking-bad-quotes --number 3
        I'm not in the meth business. I'm in the empire business. - Walter White
        Shut the f*ck up and let me die in peace. - Mike Ehrmantraut
        Yeah, bitch! Magnets! - Jesse Pinkman
    `, {
        flag: {
            number: {
                type: 'string',
                default: '1'
            }
        }
    }
);

updateNotifier({ pkg: pkg }).notify();

quote({ input: cli.input[0], flags: cli.flags })
    .then(result => {
        result.forEach(item => {
            console.log(
                chalk.cyan(item.quote) + chalk.white(' - ' + item.author)
            );
        });
        
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        console.log(chalk.bold.red(err));
        process.exit(1);
    });