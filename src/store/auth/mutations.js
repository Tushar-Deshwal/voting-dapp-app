export function signIn(state, { token, user, idToken }) {
    state.token = token
    state.user = user
    state.idToken = idToken
  }
  
  export function saveUser(state, { user }) {
    state.user = user
  }
  
  export function saveTrader(state, { trader }) {
    state.trader = trader
  }