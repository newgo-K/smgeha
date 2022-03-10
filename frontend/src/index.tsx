import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './lib/modules';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// useEffect는 컴포넌트가 한 번 렌더링된 이후에 실행
// 사용자가 깜빡임 현상을 느낄 수 있어 여기서 사용자 정보 로드
function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
// 사가 이후로 함수 호출
// 먼저 호출하면 디스패치했을 때 사가에서 제대로 호출 안 함
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
