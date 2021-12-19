import { ToastContainer as ReactToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastContainer(props) {
  return (
    <ReactToast
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      {...props}
    />
  );
}
