import plus from "./img/plus.svg";
import "./styles.css";

export default function AddButton({ addChild, childState }) {
  if (childState.length < 5) {
    return (
      <div>
        <p
          style={{
            backgroundImage: "url(" + plus + ")",
            backgroundRepeat: "no-repeat"
          }}
          className="add-button"
          onClick={(e) => addChild(e)}
        >
          {" "}
          добавить ребенка
        </p>
      </div>
    );
  } else return null;
}
