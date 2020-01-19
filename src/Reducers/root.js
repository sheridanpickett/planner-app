const initialState = {
  token: ''
}     

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'TOKEN_RETREIVED':
      return {...state, token: action.payload}
      break;
    default:
      return state;
  }
}

export default reducer;