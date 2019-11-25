# useReducer

## Redux Flow

<img src="https://user-images.githubusercontent.com/7090906/69519846-58f63000-0f9e-11ea-8b7f-fefd7cebbccc.png" width="200" />

> 리듀서는 현재 상태(State)를 업데이트하기 위해 필요한 정보를 담은 액션(Action) 객체를 전달받아 새로운 상태를 반환하는 **함수**입니다.

```js
function reducer(state, action){
    return { ... }
}
```

액션 객체는 주로 다음과 같이 생겼습니다.

```js
{
  type: "INCREMENT";
}
```

## useReducer를 이용한 카운터 예제

```js
/// Counter.js
import React, { useReducer } from "react";

//리듀서 구현체
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

//카운터 컴포넌트
const Counter = () => {
  //useReducer는 상태, 액션을 실행시키는 함수를 반환합니다.
  const [state, dispatch] = useReducer(reducer, { value: 0 }); //두번째 인자는 초기 상태값입니다.

  return (
    <div>
      <p>현재 카운터 값은 {state.value}입니다.</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
```
