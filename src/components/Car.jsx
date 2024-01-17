export function Car(props) {
  return (
    <div
      className="car"
      style={{
        left: props.left,
        top: props.top,
        transform: `rotate(${props.rotate}deg)`,
      }}
    />
  );
}
