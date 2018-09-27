This application is an example in [Create React App](https://github.com/facebookincubator/create-react-app) of how to identify the update available with [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/) and notify the user that a cache update exists.

## Demo

![alt text](https://raw.githubusercontent.com/lourencorodrigo/images/master/react-service-worker.gif)

## Installation & Configuration

It is important to remember that by default the Service Worker of the [Create React App](https://github.com/facebookincubator/create-react-app) is configured to run only in the production environment.

```bash
# Clone the repo
git clone https://github.com/lourencorodrigo/update-available-service-worker.git

# Change directory
cd update-service-worker

# Install project dependencies
yarn

# Builds the app for production
yarn build
```
