import React, { useState } from "react";
import {
   GithubAuthProvider,
   GoogleAuthProvider,
   getAuth,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
   const [user, setUser] = useState(null);

   console.log(user);
   const auth = getAuth(app);
   const provider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const handleLogin = () => {
      signInWithPopup(auth, provider)
         .then((result) => {
            const loginUser = result.user;
            setUser(loginUser);
         })
         .catch((error) => {
            console.log("error: ", error.message);
         });
   };

   const handleGithubLogin = () => {
      signInWithPopup(auth, githubProvider)
         .then((result) => {
            const userDetails = result.user;
            setUser(userDetails);
         })
         .catch((err) => {
            console.log("github login error", err);
         });
   };

   const handleSignOut = () => {
      signOut(auth)
         .then((result) => {
            console.log(result);
            setUser(null);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div>
         {user ? (
            <button onClick={handleSignOut}>SignOut</button>
         ) : (
            <button onClick={handleLogin}>Log in with Google</button>
         )}
         <button onClick={handleGithubLogin}>Login with github</button>
         <div>
            <h3>name: {user ? user.displayName : ""}</h3>
            <img src={user ? user.photoURL : ""} alt="" />
            <p>{user ? user.email : ""}</p>
         </div>
      </div>
   );
};

export default Login;
