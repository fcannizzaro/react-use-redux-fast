import {FastReduxProvider, useActions, useStates, useState} from '@fcannizzaro/react-use-redux-fast'
import React from 'react'

const id = () => Math.round(Math.random() * 100)

const InternalComponent = () => {

  // ready to use as dispatched actions
  const {setupProfile, setupValue} = useActions()

  // store values
  const {profile, value} = useStates('profile', 'value')

  // apply a transform
  const other = useState('value', 0, it => it * 3)

  return <div>

    <div className='table'>
      <button onClick={() => setupProfile({username: 'username#' + id()})}> SET RANDOM USERNAME</button>
      <div><b>{profile.username}</b></div>
    </div>

    <div className='table'>
      <button onClick={() => setupValue(id())}> SET A NEW VALUE</button>
      <div><b>{String(value)}</b> vs {String(other)}</div>
    </div>

  </div>

}

export default () => {
  // require or import actions directory (module like)
  return <FastReduxProvider bundle={require('./actions')}>
    <InternalComponent />
  </FastReduxProvider>
}
