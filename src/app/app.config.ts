import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({ "projectId": "chat-app-sp56", "appId": "1:943042345921:web:7de4b4f6ddc689497c8d40", "storageBucket": "chat-app-sp56.firebasestorage.app", "apiKey": "AIzaSyBDFgiY1B20OLZj-VPs8AcCibFhEMUc4J4", "authDomain": "chat-app-sp56.firebaseapp.com", "messagingSenderId": "943042345921", "measurementId": "G-217VKX4RX0" })), provideFirestore(() => getFirestore())]
};
