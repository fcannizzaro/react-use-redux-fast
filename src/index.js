import {useSelector} from 'react-redux'

export * from './actions'

export const useState = (key, defaultValue) => useSelector(state => state[key] || defaultValue)

export const useStates = (...keys) => Object.fromEntries(keys.map(key => [key, useState(key)]))
