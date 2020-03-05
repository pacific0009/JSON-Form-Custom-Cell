import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { combineReducers, createStore, Reducer, AnyAction } from 'redux';
import { Actions, jsonformsReducer, JsonFormsState } from '@jsonforms/core';
import {
  materialCells,
  materialRenderers
} from '@jsonforms/material-renderers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initState: JsonFormsState = {
  jsonforms: {
    cells: materialCells,
    renderers: materialRenderers
  }
};

const rootReducer: Reducer<JsonFormsState, AnyAction> = combineReducers({
  jsonforms: jsonformsReducer()
});
const store = createStore(rootReducer, initState, devToolsEnhancer({}));
ReactDOM.render(<App store={store} />, document.getElementById('root'));
