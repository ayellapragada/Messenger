import { combineReducers } from 'redux';

import ConversationReducer from './conversation_reducer.js';

const RootReducer = combineReducers({
  conversations: ConversationReducer,
});

export default RootReducer;
