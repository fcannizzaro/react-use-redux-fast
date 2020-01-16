import {FastReduxProvider, useActions, useStates} from '@fcannizzaro/react-use-redux-fast'
import React from 'react'

const id = () => Math.round(Math.random() * 100)

const InternalComponent = () => {

  const {setupProfile, setupValue} = useActions()
  const {profile, value} = useStates('profile', 'value')

  return <div>

    <div className='table'>
      <button onClick={() => setupProfile({username: 'username#' + id()})}> SET RANDOM USERNAME</button>
      <div><b>{profile.username}</b></div>
    </div>

    <div className='table'>
      <button onClick={() => setupValue(id())}> SET A NEW VALUE</button>
      <div><b>{String(value)}</b></div>
    </div>

  </div>

}

export default () => <FastReduxProvider bundle={require('./redux')}>
  <InternalComponent />
</FastReduxProvider>
