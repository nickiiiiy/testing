import ReactDOM from "react-dom";

const Portal = ({ children, container = document.body }) => {
  return ReactDOM.createPortal(children, container);
};

export default Portal;
