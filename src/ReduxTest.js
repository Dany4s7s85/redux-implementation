import action from "./action/action";
import { useDispatch, useSelector } from "react-redux";
const ReduxTest = () => {
  const todos = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{todos}</h1>
      <button
        onClick={() => {
          dispatch(action.increament());
        }}
      >
        increament
      </button>
      <button
        onClick={() => {
          dispatch(action.decreament());
        }}
      >
        decreament
      </button>
      <button
        onClick={() => {
          dispatch(action.reset());
        }}
      >
        reset
      </button>
    </>
  );
};

export default ReduxTest;
