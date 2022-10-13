import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";
const List = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <p>미완료</p>
      <ListWrap>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
      </ListWrap>

      <p>완료</p>
      <ListWrap>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
      </ListWrap>
    </div>
  );
};

export default List;

const ListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  list-style: none;
  padding: 20px;
`;
