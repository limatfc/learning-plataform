import { firebaseAuth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import onFailure from "../logic/onFailure";

export async function createUser(email, password) {
  let data = null;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    data = userCredential.user.uid;
  } catch (error) {
    onFailure(error);
  }
  return data;
}

export async function recoverUser(email) {
  let data = null;

  try {
    await sendPasswordResetEmail(firebaseAuth, email);
    data = 1;
  } catch (error) {
    onFailure(error);
    data = null;
  }
  return data;
}

export async function loginUser(email, password) {
  let data = null;

  try {
    const uid = await signInWithEmailAndPassword(firebaseAuth, email, password);
    data = uid.user.uid;
  } catch (error) {
    onFailure(error);
  }

  return data;
}
