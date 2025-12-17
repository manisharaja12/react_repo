const Props = (props) => {
  return (
    <div>
      <h1>This is props component</h1>
      <ol>
        <li>
          Props are:
          <ul>
            <li>{props.h1}</li>
            <li>I completed my {props.grade} grade by the age of {props.age} years</li>
            <li><img src={props.img} alt="Example" width="100" /></li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Props;