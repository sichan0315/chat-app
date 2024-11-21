import { inject, Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, getDocs, orderBy, query } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import firebase from 'firebase/compat/app';


export interface FirestoreRec {
  userName: string;
  message: string;
  timestamp: firebase.firestore.Timestamp;
  color?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  firestore: Firestore = inject(Firestore);
  public items$: Observable<FirestoreRec[]> | undefined;

  constructor() {
    this.getData();
  }

  getData() {
    const aCollection = collection(this.firestore, 'cs336-chat');
    const q = query(aCollection, orderBy('timestamp', 'asc'));

    // Subscribe to real-time updates
    this.items$ = collectionData(q, { idField: 'id' }) as Observable<FirestoreRec[]>;
  }

  sendMessage(data: FirestoreRec) {
        addDoc(collection(this.firestore, 'cs336-chat'),
          {
            userName: data.userName,
            message: data.message,
            timestamp: data.timestamp,
            color: data.color,
          }
        )
      }
}