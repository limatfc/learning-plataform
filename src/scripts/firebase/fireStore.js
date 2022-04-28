import { fireStore } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
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
