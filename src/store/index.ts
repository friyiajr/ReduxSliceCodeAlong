import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import logger from "redux-logger";

import numbersReducer from "../redux/Numbers/Numbers.reducer";

import { all, fork } from "@redux-saga/core/effects";
import createSagaMiddleware from "@redux-saga/core";

import { numberRootSaga } from "../redux/Numbers/Numbers.saga";

const reducers = combineReducers({
  number: numbersReducer,
});

const rootSaga = function* rootSaga() {
  yield all([fork(numberRootSaga)]);
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleWare) => {
    const reduxDefaultMiddleware = getDefaultMiddleWare();
    return [...reduxDefaultMiddleware, logger, sagaMiddleware];
  },
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
