import Card from "react-bootstrap/Card";

export default function ItemListContainer(props) {
  return (
    <Card body className="ItemListContainer">
      <span>{props.Name}</span>
      <span>-</span>
      <span>{props.Cant}</span>
      <span>+</span>
      <span>{props.Price}</span>
    </Card>
  );
}
