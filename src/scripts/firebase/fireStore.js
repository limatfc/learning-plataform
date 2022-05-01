import { fireStore } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import onFailure from "../logic/onFailure";

export async function addDocument(path, id, content) {
  let data = null;

  try {
    await setDoc(doc(fireStore, path, id), content);
    data = "";
  } catch (error) {
    onFailure(error);
  }

  return data;
}

export async function readDocument(path, id) {
  let data = null;

  try {
    const documentPath = doc(fireStore, path, id);
    const document = await getDoc(documentPath);

    data = document.data();
  } catch (error) {
    onFailure(error);
  }

  return data;
}

export async function getCollection(path) {
  let data = null;
  try {
    const collectionPath = collection(fireStore, path);
    const snapshot = await getDocs(collectionPath);
    const documents = snapshot.docs.map((item) => {
      return { id: item.id, ...item.data() };
    });
    data = documents;
  } catch (error) {
    onFailure(error);
  }

  return data;
}

export async function addDocumentWithNoId(path, content) {
  let data = null;
  let uid = "";
  try {
    uid = await addDoc(collection(fireStore, path), content);
    data = "";
  } catch (error) {
    onFailure(error);
  }

  return { data, id: uid.id };
}

export async function editDocument(path, documentId, content) {
  let data = null;
  try {
    const cityRef = doc(fireStore, path, documentId);
    setDoc(cityRef, content, { merge: true });
    data = "";
  } catch (error) {
    onFailure(error);
  }
  return data;
}

export async function deleteDocument(path, documentId) {
  let data = null;
  try {
    await deleteDoc(doc(fireStore, path, documentId));
    data = "";
  } catch (error) {
    onFailure(error);
  }
  return data;
}
