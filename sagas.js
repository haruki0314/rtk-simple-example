import { takeEvery, put, delay, all } from 'redux-saga/effects';
import { openModal1, closeModal1, openModal2, closeModal2 } from './store';

// Example saga: automatically close modal1 after 2 seconds when opened
function* handleOpenModal1() {
  // wait 2 seconds then close modal1
  yield delay(2000);
  yield put(closeModal1());
}

function* watchModal1() {
  yield takeEvery(openModal1.type, handleOpenModal1);
}

// Example saga: automatically close modal2 after 3 seconds when opened
function* handleOpenModal2() {
  yield delay(3000);
  yield put(closeModal2());
}

function* watchModal2() {
  yield takeEvery(openModal2.type, handleOpenModal2);
}

// root saga
export default function* rootSaga() {
  yield all([
    watchModal1(),
    watchModal2(),
  ]);
}
