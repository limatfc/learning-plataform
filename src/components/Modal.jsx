import { createPortal } from "react-dom";
import Overlayer from "./Overayer";

export default function Modal({ children }) {
  return (
    <div>{createPortal(children, document.getElementById("modal-root"))}</div>
  );
}
