import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateTodo } from "../redux/module/todos";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  const { id } = useParams();

  useEffect(() => {
    dispatch(updateTodo(parseInt(id)));
  }, [dispatch, id]);

  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.body}</p>
    </div>
  );
};

export default Detail;
