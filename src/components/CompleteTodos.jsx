import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  minHeight: "200px",
  width: "400px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style}>
      <p class="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-low">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
