import firebase from 'firebase'

export const ForgotPassword = (props) => {
    firebase.auth().sendPasswordResetEmail(props.email)
      .then(function (user) {
        alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
  }


export default ForgotPassword
