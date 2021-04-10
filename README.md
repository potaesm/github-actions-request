# Request

[Request for GitHub Actions using Axios.](https://github.com/potaesm/github-actions-request)

# Usage

```yml
uses: potaesm/github-action-request
with:
  url: /user
  method: get
  baseURL: https://some-domain.com/api/
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
  params: { ID: 12345 }
  data: { firstName: 'Fred' }
  timeout: 30000
  auth: { username: 'janedoe', password: 's00pers3cret' }
  proxy:
    {
      protocol: 'https',
      host: '127.0.0.1',
      port: 9000,
      auth: { username: 'mikeymike', password: 'rapunz3l' },
    }
```
Ref. [Axois](https://www.npmjs.com/package/axios#request-config)