import merge from 'lodash.merge'
import mapValues from 'lodash.mapvalues'

export const action = (type, payload) => ({type, payload})

export const actionsFrom = (bundle) =>
  mapValues(bundle, value => typeof value === 'function' ? value : value.action)

export const statesFrom = (bundle) =>
  mapValues(bundle, value => value.state)

export const reducerFrom = (bundle) => {

  // pick each initial state
  const states = statesFrom(bundle)

  const actions = actionsFrom(bundle)

  // merge initial states
  const initialState = merge({}, ...Object.values(states))

  return (state = initialState, action) => {
    const runner = actions[action.type]
    return runner ? runner(state, action.payload) : state
  }

}
