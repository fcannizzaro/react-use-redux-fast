# @fcannizzaro/react-use-redux-fast

> hooks and notation to use redux store and actions

[![NPM](https://img.shields.io/npm/v/@fcannizzaro/react-use-redux-fast.svg)](https://www.npmjs.com/package/@fcannizzaro/react-use-redux-fast) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @fcannizzaro/react-use-redux-fast
```

## Project Structure

```bash
.
+-- actions
|   +-- user.js
|   +-- ...
|   +-- ...
|   +-- index.js   # <- export actions
|
+-- app.js

```

## Usage

- `actions/user.js`

```jsx
// export action and bound initial state
export const setupProfile = {

  action: (state, profile) => ({...state, profile}),

  state: {
    profile: {
      username: 'default username'
    }
  }

}

// export action without any initial state
export const setupValue = (state, value) => ({...state, value})

```

- `actions/index.js`

```jsx
export * from './user';
```

- `app.js`

```jsx
import {FastReduxProvider, useActions, useStates} from '@fcannizzaro/react-use-redux-fast'
import React from 'react'

const id = () => Math.round(Math.random() * 100)

const InternalComponent = () => {

  // ready to use as dispatched actions
  const {setupProfile, setupValue} = useActions()

  // store values
  const {profile, value} = useStates('profile', 'value')

  return <div>

    <div>
      <button onClick={() => setupProfile({username: 'username#' + id()})}>
        SET RANDOM USERNAME
      </button>
      <div><b>{profile.username}</b></div>
    </div>

    <div>
      <button onClick={() => setupValue(id())}>
        SET A NEW VALUE
      </button>
      <div><b>{value}</b></div>
    </div>

  </div>

}

export default () => {
    // require or import actions directory (module like)
    return <FastReduxProvider bundle={require('./actions')}>
        <InternalComponent />
    </FastReduxProvider>
}
```

## License

MIT © [fcannizzaro](https://github.com/fcannizzaro)
