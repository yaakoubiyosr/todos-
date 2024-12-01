import { useReducer } from 'react';
import './App.css';

const Todos = {
  todos: [
    { id: 1, title: "gym", done: false },
    { id: 2, title: "work", done: true },
    { id: 3, title: "shopping", done: false }
  ],
  title: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'delete':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };

    case 'update':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      };

    case 'add':
      if (!state.title)
         return state; 
      const newTodo = {
        id: "",
        title: state.title,
        done: false
      };
      return {
        ...state, todos: [...state.todos, newTodo], title: ''
      };

    case 'setTitle':
      return {
        ...state,title: action.title
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatchTodo] = useReducer(reducer, Todos);

  const handleDelete = (todo) => {
    dispatchTodo({
      type: 'delete',
      id: todo.id
    });
  };

  const handleUpdate = (todo) => {
    dispatchTodo({
      type: 'update',
      id: todo.id
    });
  };

  const handleAdd = () => {
    dispatchTodo({
      type: 'add'
    });
  };

  const handleChange = (e) => {
    dispatchTodo({
      type: 'setTitle',
      title: e.target.value
    });
  };

  return (
    <div className="App">
      <h1>Todos List</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
        <input type="text" value={state.title} onChange={handleChange} placeholder="Enter new todo"/>
        <input type="button" value="Add" onClick={handleAdd} />
      </form>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
              <p>{todo.title}</p>
              <p className='done'>
              </p>
            <button onClick={() => handleUpdate(todo)}>
            {todo.done ? 'Done' : 'Pending'}
                </button>
            <button className='delete' onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;