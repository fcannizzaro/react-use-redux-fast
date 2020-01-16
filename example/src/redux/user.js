export const setupProfile = {

  action: (state, profile) => ({...state, profile}),

  state: {
    profile: {
      username: 'default username'
    }
  }

}

export const setupValue = (state, value) => ({...state, value})
