// 중앙 state 관리소인 store를 만드는 설정 코드들이 있는 파일
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../module/todos";

const todo = combineReducers({
  todos,
});

const store = createStore(todo);

export default store;
