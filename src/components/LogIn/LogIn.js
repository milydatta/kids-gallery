import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
        
    const handleGoogleSignIn = () => {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
            const {displayName, email} = result.user;
            const signedInUser = {userName: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch(err =>{
             console.log(err);
            console.log(err.message);
         })
        }
    return (
        <div className="pl-5">
            <h1 className="mt-5 pt-5">Login</h1>
            <Form style={{height:300,width:500}}>
               <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" required/>
               </Form.Group>
               <Form.Group controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" required />
               </Form.Group>
               <Form.Group controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="success" type="submit" onClick={handleGoogleSignIn}>LogIn</Button>
          </Form>
        </div>
    );
};

export default LogIn;