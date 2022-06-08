'use strict';

const axios = require('axios');
const _ = require('lodash');

const baseUrl = 'https://api.breakingbadquotes.xyz/v1';

module.exports = (opts, callback) => {
    return new Promise((resolve, reject) => {
        opts = opts || '';

        let url = '/quotes';
        if (!_.isUndefined(opts.flags.number) && opts.flags.number != '') {
            url += '/' + opts.flags.number;
        }
        
        axios.get(baseUrl + url)
            .then(response => {
                if (response.data && _.isArray(response.data)) {
                    let result = response.data;
                    return resolve(result);
                }

                return resolve(response.data);
            })
            .catch(err => reject(err));
    });
};


