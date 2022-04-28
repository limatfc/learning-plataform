import { firebaseAuth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
