import styled from "styled-components";
import { useDispatch } from "react-redux";
import { checkTodo, delTodo } from "../redux/module/todos";
import { Link } from "react-router-dom";

const Todo = ({ id, title, body, isDone }) => {
  const dispatch = useDispatch();

  return (
    <TodoItem>
      <Link to={`/${id}`}>상세보기</Link>
      <p>{title}</p>
      <p>{body}</p>
      <ButtonWrap>
        <RedButton onClick={() => dispatch(delTodo(id))}>삭제</RedButton>
        <BlueButton onClick={() => dispatch(checkTodo(id))}>
          {isDone ? "취소" : "확인"}
        </BlueButton>
      </ButtonWrap>
    </TodoItem>
  );
};

export default Todo;

const TodoItem = styled.li`
  border: 1px solid black;
  border-radius: 15px;
  padding: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Button = styled.button`
  padding: 15px;
  font-size: 15px;
  font-weight: 700;
  flex: 1;
`;

const BlueButton = styled(Button)`
  border: 1px solid skyblue;
`;

const RedButton = styled(Button)`
  border: 1px solid red;
`;
