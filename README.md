# Hooked on Hooks

## Summary

Practice using React hooks for a simple todo app. This Todo App is taken from a tutorial on hooks and is a combination of notes for quick reference for me in the future. Hooks components "hook" into state and lifecycle methods with useState(), useEffect(), custom hooks, etc., to pass data between different components in this Todo App. (Technically, the React Docs state that hooks allow you to access lifecycle FEATURES, not lifecycle methods. Basically the concept is hooks are an easier way to pass state).

## React Hooks

Hooks are functional components, not class components. Instead of building a constructor function, using super, initializing state, & binding functions as with class components, hooks "just" return an array with a "slice" of state and a function that updates that slice (NOTE: this is a cliff notes version of the base concept, hence the quotes around just).  The benefits of hooks is less writing and less wrapping of components (the pattern of higher order components or HOCs, which are components that take in other components and return a new component, much like higher order functions. HOCs are a pattern to re-use component state and are different from the "usual" components that takes in props and renders a new piece of data on screen). With less code and less wrapping the benefit is easier/quicker to pass state, easier to read code, and easier to understand code.

One downside of less code is being less explicit. With less code, there are assumptions made about what is being passed from components, which component receives data, and where the data is coming from. That can be addressed with style guides and descriptive code comments.

### useState

useState() is a function that takes in one argument (the intial state) and returns two elements: a "slice" of state and a function that updates that slice.  The initial state does NOT have to be an object like this.state;

The code below is based on the React Docs, and shown as a quick reference for the basic concept. 

`
import React, { useState } from 'react';

export default Counter(){
    // setting the two elements for useState.
    // count is the slice of state & 
    // setCount is the function that updates that slice
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Click to increase count. Count is {count}</p>
            <button> onClick = {() => setCount(count + 1)}>
                Click Me!
            </button>
        </div>
    );
}

`




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
