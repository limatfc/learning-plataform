import { editDocument } from "../firebase/fireStore";
import { uploadFile } from "../../scripts/firebase/cloudStorage";

// Activities actions is like watery water? running runner? Sounds weird
export async function urlComesFromALink(data) {
  const { path, id, inputedData, setStatus, editActivity } = data;
  const result = await editDocument(path, id, inputedData);
  if (result === "") {
    setStatus(1);
    editActivity(id, inputedData);
  }
}

export async function urlComesFromAFileUpload(file, item) {
  const filePath = `activity/${item.id}.png`;
  const newURL = await uploadFile(file, filePath);
  return newURL;
}

export async function urlComesFromAFileEdit(data) {
  const { path, item, inputedData1, setStatus, editActivity } = data;
  const result = await editDocument(path, item.id, inputedData1);
  if (result === "") {
    setStatus(1);
    editActivity(item.id, inputedData1);
  }
}
