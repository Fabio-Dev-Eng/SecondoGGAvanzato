import React from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState([]);
  const addTodo = () => {
    // aggiungere un elemento alla lista
    //  copia della lista con aggiunta di un elemento
    //  settare lo stato
    const newTodo = {
      id: Math.random().toString(),
      text: text,
      isDone: false
    };
    /*
    const listCopy = list.slice();
    listCopy.push(newTodo);
    setList(listCopy);
    */
    setList([...list, newTodo]);
    setText("");
  };
  return (
    <div>
      <div>
        <input value={text} onChange={event => setText(event.target.value)} />
        <button onClick={addTodo}>aggiungi</button>
      </div>
      <div>
        {list.map(todo => {
          return (
            <TodoMemo
              key={todo.id}
              todo={todo}
              onToggle={() => {
                console.log("on toggle");
                // cambiare lo stato isDone del todo
                // copiare la list
                // copia del todo
                // lista[id] = todo
                setList(
                  list.map(oldTodo =>
                    oldTodo.id === todo.id
                      ? { ...todo, isDone: !todo.isDone }
                      : oldTodo
                  )
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// function Todo(props) {
//  const {todo} = props;
function Todo({ todo, onToggle }) {
  wait(100);
  return (
    <div key={todo.id}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => {
          // console.log(todo);
          // devo cambiare lo stato di check
          onToggle();
        }}
      />{" "}
      {todo.text}
    </div>
  );
}
const TodoMemo = React.memo(Todo);

function wait(ms) {
  const was = performance.now();
  while (true) if (performance.now() - was > ms) break;
}
