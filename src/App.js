import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {

  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()


  const handleSignIn = ()=>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.error("error", error);
    })
  }
  const handleSignout = () =>{
    signOut(auth)
    .then( () =>{
      setUser({})
    })
    .catch( ()=>{
      setUser({})
    })
  }
  const handleGithubSignIn = () =>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);

    })
    .catch((error)=>{
      console.error("error", error);

    })
  }
  
 
  return (
    <div className="App">
      {
        user.uid ?
        <button onClick={handleSignout}>Sign Out</button>
        :
        <div>
        <button onClick={handleSignIn}>Google coming soon</button>
        <button onClick={handleGithubSignIn}>Github login</button>

        </div>
      }
      
     { user.uid && <div>
        <h3>User name: {user.displayName}</h3>
        <p>Email: {user.email}</p>
       <img src={user.photoURL} alt="pic is not found" />
      </div>}
    </div>
  );
}

export default App;
