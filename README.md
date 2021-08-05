## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Simple React Demo app of how an AI could help in customer relations.
---
> User: "Hello"

*AI understands that this is a Greeting*

> AI: "Hello :) How can I help you?"
---

In order to understand what the user wants, our AI is trained to recognize different intents. 

For each intent the AI gets a list of user messages (we call them expressions) as training data to learn 
how users express that intent. 
For every intent there will also be a reply that the AI Bot should give, once it recognizes that intent. 
In the above example that intent would look like this:

---
```
Intent: Greeting
- Training Expressions: "Hello", "Hi", "Hey there!", "Good morning!", ...
- Reply: "Hello :) How can I help you?"
```
---

Most of those intents are specific to the client and their use case. An airline will have other intents 
than an eCommerce platform.
