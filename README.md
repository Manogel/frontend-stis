<!--
*** Obrigado por estar vendo o nosso README. Se você tiver alguma sugestão
*** que possa melhorá-lo ainda mais dê um fork no repositório e crie uma Pull
*** Request ou abra uma Issue com a tag "sugestão".
*** Obrigado novamente! Agora vamos rodar esse projeto incrível :D
-->

<!-- PROJECT SHIELDS -->

[![npm](https://img.shields.io/npm/v/cra-template-manogel.svg?label=npm%20package)](https://www.npmjs.com/package/cra-template-manogel)
[![npm](https://img.shields.io/npm/dt/cra-template-manogel.svg)](https://www.npmjs.com/package/cra-template-manogel)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Manogel Template for Reactjs</h3>
</p>

```sh
npx create-react-app my-react-app --template manogel
```

## Additional step ESLINT required

```sh
yarn add babel-eslint@10.0.3 eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier babel-plugin-root-import customize-cra eslint-import-resolver-babel-plugin-root-import react-app-rewired eslint-plugin-import-helpers -D
```

## Dependencies configured

- [History](https://www.npmjs.com/package/react-history)
- [React router dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [React icons](https://react-icons.netlify.com/#/)
- [Polished](https://github.com/styled-components/polished)
- [Redux](https://redux.js.org/)
  - [Redux Saga](https://redux-saga.js.org/)
- [Axios](https://github.com/axios/axios)
- [Prop Types](https://github.com/facebook/prop-types)
- [Styled Components](https://github.com/styled-components/styled-components)
- [Reactotron](https://github.com/infinitered/reactotron)
  - [reactotron-react-js](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-js.md)
  - [reactotron-redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)
  - [reactotron-redux-saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)
- [Babel](https://babeljs.io/)
  - [babel-eslint](https://github.com/babel/babel-eslint)
  - [babel-plugin-root-import](https://github.com/entwicklerstube/babel-plugin-root-import)
- [ESLint](https://eslint.org/)
  - [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
  - [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  - [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-import-helpers](https://www.npmjs.com/package/eslint-plugin-import-helpers)
  - [eslint-import-resolver-babel-plugin-root-import](https://github.com/olalonde/eslint-import-resolver-babel-root-import)
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
  - [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks)
- [Prettier](https://prettier.io/)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [EditorConfig](https://editorconfig.org/)

## File Structure

```bash
manogel
├── src/
│   ├── config/
│   │   └── ReactotronConfig.js
│   ├── pages/
│   │   └── Main/
│   │       └── index.js
│   ├── services/
│   │   ├── api.js
│   │   └── history.js
│   ├── store/
│   │   ├── ducks/
│   │   │   └── index.js
│   │   ├── sagas/
│   │   │   └── index.js
│   │   └── index.js
│   ├── styles/
│   │   └── global.js
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── config-overrides.js
├── jsconfig.js
├── package.json
└── README.md
```

<!-- CONTACT -->

## Contact

Manoel Gomes - [Github](https://github.com/Manogel) - **manoelgomes53@gmail.com**

Repo: [Manogel/cra-tamplate-manogel](https://github.com/Manogel/cra-template-manogel)
