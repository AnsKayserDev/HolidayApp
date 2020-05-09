/* eslint-disable prettier/prettier */
import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './src/redux/reducers';
import Routes from './src/routes/routes';

import createSagaMiddleware from 'redux-saga';


export default class App extends React.Component {

  render() {
    const middleWare = [];
    const sagaMiddleware = createSagaMiddleware();
    middleWare.push(sagaMiddleware)

    const loggerMiddleware = createLogger({
      predicate: () => process.env.NODE_ENV === 'development',
    });

    middleWare.push(loggerMiddleware);
    const store = createStore(reducers, {}, applyMiddleware(...middleWare));
    sagaMiddleware.run();
    return (
      <Fragment>
        <Provider store={store}>
          <Routes  />
        </Provider>
      </Fragment>
    );
  }


}
