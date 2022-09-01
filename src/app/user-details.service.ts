import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Users } from 'src/app/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUsers(user: Users) {
    return this.firestore.collection('users').add(user);
  }

  updateUsers(user: Users) {
  //  delete user.id;
    this.firestore.doc('users/' + user.id).update(user);
  }


  deleteUsers(userId: string) {
    this.firestore.doc('users/' + userId).delete();
  }

}
