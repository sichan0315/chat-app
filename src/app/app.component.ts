import { Component, inject } from '@angular/core';
import { DataService } from './services/data.service';
import { FormsModule } from '@angular/forms'
import firebase from 'firebase/compat/app';
import { AsyncPipe, DatePipe } from '@angular/common';
import 'firebase/compat/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, AsyncPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  handle = localStorage.getItem('handle') || '';
  color = localStorage.getItem('color') || '#000000';
  newMessage = '';

  dataSvc = inject(DataService);

  saveHandle(newhandle: string) {
    localStorage.setItem('handle', newhandle)
  }

  saveColor(newColor: string) {
    localStorage.setItem('color', newColor)

  }

  storeMessage() {
    if (this.newMessage.trim()) {
      this.dataSvc.sendMessage({
        userName: this.handle,
        message: this.newMessage,
        timestamp: firebase.firestore.Timestamp.now(),
        color: this.color,
      });
      this.newMessage = '';
    }
  }
}

