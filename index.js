const core = require('@actions/core');
const axios = require('axios');

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