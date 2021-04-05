# Getting Started with Create React App

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
~/react-admin-ui $ git remote add origin https://github.com/vantamin/react-admin-ui.git
~/react-admin-ui $ git push -u origin master
```

### Packages

- Prettier

  ```bash
  ~/react-admin-ui $ yarn add --dev --exact prettier
  ~/react-admin-ui $ echo {}> .prettierrc
  ~/react-admin-ui $ yarn prettier --write .
  ```

- Pre-commit Hook

  Install husky, lint-staged

  ```bash
  ~/vantamin $ npx mrm lint-staged
  ```

  package.json

  ```json
  {
    "lint-staged": {
      "**/*": "prettier --write --ignore-unknown"
    }
  }
  ```

- Storybook

  ```bash
  ~/react-admin-ui $ npx sb init
  ~/react-admin-ui $ yarn storybook
  ~/react-admin-ui $ yarn prettier --write .
  ```

- Material-UI

  ```bash
  ~/react-admin-ui $ yarn add @material-ui/core @material-ui/icons @fontsource/roboto
  ```

## 북마크

- [Adding TypeScript | Create React App](https://create-react-app.dev/docs/adding-typescript/)
- [Install · Prettier](https://prettier.io/docs/en/install.html)
- [Pre-commit Hook](https://prettier.io/docs/en/precommit.html)
- [Install Storybook](https://storybook.js.org/docs/react/get-started/install)
- [Installation - Material-UI](https://material-ui.com/getting-started/installation/)
- [fontsource-roboto](https://www.npmjs.com/package/fontsource-roboto)
