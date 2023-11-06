import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // url="https://us-central1-dvizsga-3be0a.cloudfunctions.net/api/"
  constructor(private afAuth:AngularFireAuth,
    private router:Router
    ) { 
      this.getLoggedUser().subscribe(
        (user)=>console.log("User: ")
      );
    }

  getLoggedUser(){
    return this.afAuth.authState
  }

  forgotPassword(email:any){
    return this.afAuth.sendPasswordResetEmail(email)
  }

  signUp(email:any, password:any){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  sendVerificationEmail(){
    this.afAuth.currentUser.then(
      (user)=>user?.sendEmailVerification()
    ).then(()=>this.router.navigate(['/verifyemail']))
    .catch((e)=>console.log("Hiba",e))
  }

  signIn(email:any, password:any){
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  googleAuth(){
    return this.afAuth.signInWithRedirect(new GoogleAuthProvider())

  }
  signOut(){
    return this.afAuth.signOut()
  }
}
