import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/module/todos";

const Form = () => {
  const init = {
    title: "",
    body: "",
  };
  const dispatch = useDispatch();

  const [todo, setTodo] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (todo.title === "" || todo.body === "") {
      alert("다 입력해");
    }

    dispatch(addTodo(todo));

    setTodo(init);
  };

  return (
    <>
      <FormContainer onSubmit={onSubmitHandler}>
        <div>
          <label>제목</label>
          <input name={"title"} onChange={onChangeHandler} value={todo.title} />
          <label>본문</label>
          <input name={"body"} onChange={onChangeHandler} value={todo.body} />
        </div>
        <button>추가하기</button>
      </FormContainer>
    </>
  );
};

export default Form;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;

  button {
    margin-left: 20px;
  }
`;
