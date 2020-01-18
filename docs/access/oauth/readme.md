# Welcome to OAuth 2.0 with NodeJS/MySQL

- You can see the authorization code in the url
- code is valid for 1 minute
- within 1 minute below code should be executed to get access_token

**Request:


```sh
curl 'https://login.shoppre.com/oauth/token' -H 'Content-Type: application/x-www-form-urlencoded' --data 'code=0746d1d46e4ffbb3e89e626a1d804ef583a02421'
```


**Response:

```json
{
  "token_type": "bearer",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwNiwiaWF0IjoxNTc5MzM5ODQxLCJleHAiOjE1NzkzNDM0NDF9.m1MfSXgWJcdib6zxRo3-OyKkSYYe1vf1jqrahEGwkdA",
  "expires_in": 3600,
  "refresh_token": "e36520bcfc067b7afb61a4142a401614b49d4bbe"
}

```

## [Learn more](https://identity.shoppre.com/guide/nodejs-oauth-implementation.html)
