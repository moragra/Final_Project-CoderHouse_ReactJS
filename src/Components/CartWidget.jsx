import { useState } from "react";
import { Bag } from "react-bootstrap-icons";

export default function CartWidget() {
  const [alertBag, setAlert] = useState(0);
  return (
    <div className="CartWidget">
      <div>
        <Bag onClick={() => setAlert(alertBag + 1)}></Bag>
      </div>
      <div className="CartWidgetA">
        <a href="/">{alertBag}</a>
      </div>
    </div>
  );
}
