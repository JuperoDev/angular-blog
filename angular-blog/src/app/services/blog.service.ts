import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';

// Define the BlogPost interface
export interface BlogPost {
  title: string;
  author: string;
  date: any; // Firestore Timestamp
  image: string;
  content: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private firestore: Firestore;

  constructor() {
    // Initialize Firebase and Firestore
    const app = initializeApp(environment.firebaseConfig);
    this.firestore = getFirestore(app);
  }

  // Fetch all posts from Firestore
  async getAllPosts(): Promise<BlogPost[]> {
    const postsCol = collection(this.firestore, 'posts');
    const postsSnapshot = await getDocs(postsCol);
    return postsSnapshot.docs.map(doc => doc.data() as BlogPost);
  }
}
