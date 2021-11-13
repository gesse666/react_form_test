import "./styles.css";

export default function ChildForm({
  update,
  childState,
  updateChild,
  deleteChild
}) {
  return childState.map((props, index) => {
    return (
      <div key={index} className="child-form">
        <label className="form__label child-form__label">
          Имя
          <input
            className="form__input child-form__input"
            value={props.childname}
            name="childname"
            onChange={(e) => updateChild(e, index)}
            required
          />
        </label>
        <label className="form__label child-form__label">
          Возраст
          <input
            className="form__input child-form__input"
            value={props.childage}
            name="childage"
            type="number"
            onChange={(e) => updateChild(e, index)}
            required
          />
        </label>
        <p className="child-form__btn" onClick={(e) => deleteChild(e, index)}>
          удалить
        </p>
      </div>
    );
  });
}
