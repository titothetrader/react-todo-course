function Backdrop(props) {
  // The line below is exclusive JSX syntax to close an empty DIV
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
