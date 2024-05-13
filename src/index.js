import { initializeApp } from 'firebase/app'
import { update } from 'firebase/database';
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc, updateDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCjUoHtx3J6Nfv3GrC2RBqUsktRTrf1I6E",
    authDomain: "furkan-udemy-javascript.firebaseapp.com",
    projectId: "furkan-udemy-javascript",
    storageBucket: "furkan-udemy-javascript.appspot.com",
    messagingSenderId: "734321826349",
    appId: "1:734321826349:web:4486b4f215dc3d0c68b6a4",
    measurementId: "G-6TRNKNP8CW"
};

// init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'books');

// queries
const q = query(colRef, orderBy('createdAt'))

// real time collection data
onSnapshot(q, (snapshot) => {
    let books = []
    snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
})

// adding documents
const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(colRef, {
        title: addBookForm.title.value,
        author: addBookForm.author.value,
        createdAt: serverTimestamp()
    })
        .then(() => {
            addBookForm.reset()
        })

})

// deleting documents 
const deleteBookForm = document.querySelector('.delete')
deleteBookForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', deleteBookForm.id.value)

    deleteDoc(docRef)
        .then(() => {
            deleteBookForm.reset()
        })
})

// get a single document
const docRef = doc(db, 'books', 'ApT7IIRABga2moxZqrzv')

onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id)
})

// updating a document 
const updateForm = document.querySelector('.update')
updateForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'books', updateForm.id.value)

    updateDoc(docRef, {
        title: 'update title'
    })
    .then(() => {
        updateForm.reset()
    })

})