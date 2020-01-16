import {action, actionsFrom, reducerFrom} from './util'
import React, {createContext, useContext} from 'react'
import {Provider, useDispatch} from 'react-redux'
import each from 'lodash.foreach'
import {createStore} from 'redux'

const FastReduxActions = createContext(null)

export const FastReduxProvider = ({bundle, children}) => {

  const actions = actionsFrom(bundle)

  const store = createStore(reducerFrom(bundle))

  const Wrapped = () => {

    const dispatch = useDispatch()

    each(actions, (obj, key) => {
      actions[key] = (payload) => dispatch(action(key, payload))
    })

    return <FastReduxActions.Provider value={actions}>
      {children}
    </FastReduxActions.Provider>

  }

  return <Provider store={store}>
    <Wrapped/>
  </Provider>
}

export const useActions = () => useContext(FastReduxActions)
