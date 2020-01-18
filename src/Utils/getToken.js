const getToken = () => {
  let token = '';
  try {
    token = localStorage.getItem('token');
  } catch(err) {
    token = '';
  }
  console.log(token);
  if(token) {
    //set Redux 
  } else {
    //set Redux token = ''
  }
}

export default getToken;