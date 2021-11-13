import "./styles.css";

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return (
    number +
    " " +
    titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  );
}

const titles = ["год", "года", "лет"];

export default function Preview({ childState, parentState, isSave }) {
  if (isSave) {
    return (
      <div className="preview">
        <h5 className="form__title">Персональные данные</h5>
        <p className="preview__parent">
          {parentState.username}, {declOfNum(parentState.age, titles)}
        </p>
        <h5 className="form__title">Дети</h5>
        {childState.map((child, i) => (
          <div key={i}>
            <p className="preview__child">
              {child.childname}, {declOfNum(child.childage, titles)}
            </p>
          </div>
        ))}
      </div>
    );
  } else return null;
}
