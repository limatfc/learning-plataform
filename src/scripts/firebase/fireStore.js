import { fireStore } from "./firebase";
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";
import onFailure from "../logic/onFailure";

export async function addDoc(path, id, content) {
  let data = null;

  try {
    await setDoc(doc(fireStore, path, id), content);
    data = "";
  } catch (error) {
    onFailure(error);
  }

  return data;
}

export async function readDoc(path, id) {
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
