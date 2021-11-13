import React, { useState } from "react";
import ChildForm from "./ChildForm";
import AddButton from "./AddButton";
import Preview from "./Preview";
import "./styles.css";
import logo from "./img/logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [parentState, setParentState] = useState({
    username: "",
    age: ""
  });

  const [childState, setChildState] = useState([
    { childname: "", childage: "" }
  ]);

  const [isSave, setSave] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSave(true);
  };

  const updateParent = (e) => {
    setParentState({ ...parentState, [e.target.name]: e.target.value });
  };

  const updateChild = (e, index) => {
    const newArr = childState.slice();
    newArr[index] = { ...newArr[index], [e.target.name]: e.target.value };
    setChildState(newArr);
  };

  const deleteChild = (index) => {
    const newArr = childState.slice();
    newArr.splice(index, 1);
    setChildState(newArr);
  };

  const addChild = (e) => {
    e.preventDefault();
    const newArr = childState.slice();
    newArr.splice(0, 0, { childname: "", childage: "" });
    setChildState(newArr);
  };

  return (
    <Router>
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="logo"></img>
          <ul className="list">
            <li className="list__item">
              <Link to="/" className="list__link">
                Форма
              </Link>
            </li>
            <li className="list__item">
              <Link to="/preview" className="list__link">
                Превью
              </Link>
            </li>
          </ul>
        </header>
        <footer className="footer">all rights reserved</footer>
        <Switch>
          <Route exact path="/">
            <form className="form" onSubmit={submit}>
              <h5 className="form__title">Персональные данные</h5>
              <label className="form__label">
                Имя
                <input
                  className="form__input"
                  value={parentState.username}
                  name="username"
                  onChange={updateParent}
                  required
                />
              </label>
              <label className="form__label">
                Возраст
                <input
                  className="form__input"
                  value={parentState.age}
                  name="age"
                  type="number"
                  onChange={updateParent}
                  required
                />
              </label>
              <div className="form__title--wrapper">
                <h5 className="form__title">Дети (макс. 5)</h5>
                <AddButton
                  className="add-button"
                  addChild={addChild}
                  childState={childState}
                />
              </div>
              <ChildForm
                childState={childState}
                updateChild={updateChild}
                setChildState={setChildState}
                deleteChild={deleteChild}
              />
              <button className="save-button">Сохранить</button>
            </form>
          </Route>
          <Route path="/preview">
            <Preview
              childState={childState}
              parentState={parentState}
              isSave={isSave}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
