import { Injectable } from "@angular/core";
import firebase from "firebase";

@Injectable()
export class AuthProvider {
  constructor() {}

  /*** loginUser takes in an email and password and signs the user into the application. */
  loginUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  /**
   * signupUser takes in an email and password and does 3 things:
   * 1. It creates the new user.
   * 2. It signs the user into the application.
   * 3. It creates a database node for the user to store the userProfile, which starts with just
   *    the email address.
   */
  signupUser(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  /*** Reset your password */
  resetPassword(email: string): firebase.Promise<any> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  /*** logout User, the currently logged in user. */
  logoutUser(): firebase.Promise<any> {
    return firebase.auth().signOut();
  }
}
