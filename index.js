const core = require('@actions/core');
const axios = require('axios');

const config = {
    url: '/user',
    method: 'get',
    baseURL: 'https://some-domain.com/api/',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    params: {
        ID: 12345
    },
    data: {
        firstName: 'Fred'
    },
    timeout: 30000,
    auth: {
        username: 'janedoe',
        password: 's00pers3cret'
    },
    proxy: {
        protocol: 'https',
        host: '127.0.0.1',
        port: 9000,
        auth: {
            username: 'mikeymike',
            password: 'rapunz3l'
        }
    }
};
try {
    const inputKeyArr = ['url', 'method', 'baseURL', 'headers', 'params', 'data', 'timeout', 'auth', 'proxy'];
    const config = {};
    for (let inputKey of inputKeyArr) {
        const input = core.getInput(inputKey);
        if (!!input) {
            if (input[0] === '{') {
                config[inputKey] = JSON.parse(input);
            } else {
                config[inputKey] = input;
            }
        }
    }
    axios(config)
        .then(function (response) {
            console.log(response);
            core.setOutput('response', response);
            core.setOutput('isError', !(response.status >= 200 && response.status < 300));
        })
        .catch(function (error) {
            core.setFailed(JSON.stringify(error));
        });
} catch (error) {
    core.setFailed(JSON.stringify(error));
}