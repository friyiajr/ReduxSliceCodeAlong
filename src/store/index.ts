import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { all, fork } from "redux-saga/effects";

import numberReducer from "../redux/reducers/number.reducer";
import { numbersRootSaga } from "../redux/sagas/numbers.saga";

const reducers = combineReducers({
  number: numberReducer,
});

const rootSaga = function* rootSaga() {
  yield all([fork(numbersRootSaga)]);
};

const sagaMiddware = createSagaMiddleware();

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const reduxDefaultMiddleware = getDefaultMiddleware();
    return [...reduxDefaultMiddleware, logger, sagaMiddware];
  },
});

sagaMiddware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
