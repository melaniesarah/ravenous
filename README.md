In order to run this code
1. A `config.js` file must be created in 'src/util/'. The `config.js` file contains: 

```javascript
    export const config = {
        API_KEY: 'yourApiKey'
    };
```
2. Login to Yelp or create a Yelp Api account at https://www.yelp.com/developers 
3. Creating a new app at https://www.yelp.com/developers/v3/manage_app. 
4. Once your app is created, the manage app page will show you your API Key. Copy the string and put it into the `config.js` file where 'yourApiKey' is in the code above.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

