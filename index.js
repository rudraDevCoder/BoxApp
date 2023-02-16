const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return <div className={`container ${className}`}>{name}</div>;
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="boxes">Boxes</h1>
    <div className="box-container">
      <Box className="small" name="Small" />
      <Box className="medium" name="Medium" />
      <Box className="large" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
