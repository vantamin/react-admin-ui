# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Setting React App

### Create React App with TypeScript

```bash
$ npx create-react-app react-admin-ui --template typescript
$ cd react-admin-ui
~/react-admin-ui $ yarn start
```

### Git 저장소 만들기

```bash
~/react-admin-ui $ git init
~/react-admin-ui $ git add --all
~/react-admin-ui $ git config --local user.name "vantamin"
~/react-admin-ui $ git config --local user.email "vantablack.min@gmail.com"
~/react-admin-ui $ git commit -m "Initial commit"
~/react-admin-ui $ git remote add origin <url>
~/react-admin-ui $ git push -u origin master
```

### Packages

- Prettier

  ```bash
  ~/react-admin-ui $ yarn add --dev --exact prettier
  ~/react-admin-ui $ echo {}> .prettierrc
  ~/react-admin-ui $ yarn prettier --write .
  ```

## 북마크

[Adding TypeScript | Create React App](https://create-react-app.dev/docs/adding-typescript/)
[Install · Prettier](https://prettier.io/docs/en/install.html)
