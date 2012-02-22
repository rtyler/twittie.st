# Twi.st


## Getting started

```
% git submodule update --init
% bundle install
% rake server
```

**Note:** The page and all the JavaScript loads a little slowly because the
"shotgun" web server is creating a new process for each request in development.

For a "production" deployment, you'd build all your Amber JavaScripts into one
single `.js` file.
