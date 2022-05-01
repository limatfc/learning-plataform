import { cloudStorage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import onFailure from "../logic/onFailure";

export async function uploadFile(file, fileName) {
  try {
    const fileReference = ref(cloudStorage, fileName);
    await uploadBytes(fileReference, file);
    return await getDownloadURL(fileReference);
  } catch (error) {
    onFailure(error);
  }
}

export async function deleteFile(fileName) {
  const fileReference = ref(cloudStorage, fileName);
  await deleteObject(fileReference);
}
