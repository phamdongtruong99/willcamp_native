import * as S from "../actionTypes";

import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";
export function* sayHello() {
  // eslint-disable-next-line no-console
  console.log("hello world!", "");
}

function* increment() {
  // eslint-disable-next-line no-console
  console.log("increment saga", "");
}

function* decrement() {
  // eslint-disable-next-line no-console
  console.log("decrement saga", "");
}

export function* watchIncrement() {
  yield takeEvery(S.INCREMENT, increment);
  yield takeEvery(S.DECREMENT, decrement);
}
