import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBlT2NxmO60KMVQ6MVjvvetDm5_MJKgwXI",
    authDomain: "crown-db-c0e50.firebaseapp.com",
    databaseURL: "https://crown-db-c0e50.firebaseio.com",
    projectId: "crown-db-c0e50",
    storageBucket: "crown-db-c0e50.appspot.com",
    messagingSenderId: "357715828469",
    appId: "1:357715828469:web:ef5a790c409886784d2fbc",
    measurementId: "G-CE3CBBP8ME"
  }

  export const createUserProfileDocument= async(userAuth, additionalData) =>{
      if(!userAuth) return;

      const userRef= firestore.doc(`users/${userAuth.uid}`)
      const snapshot = await userRef.get()
      if(!snapshot.exists){
          const {displayName, email} = userAuth
          const createdAt = new Date()
          try{
              await userRef.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          }catch(error){
              console.log('Error creating user: ', error.message)
          }
      }
      return userRef
  }

  firebase.initializeApp(config)

  export const auth= firebase.auth()
  export const firestore = firebase.firestore()

  const provider= new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle= () => auth.signInWithPopup(provider)

  export default firebase