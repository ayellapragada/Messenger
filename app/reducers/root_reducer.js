import { combineReducers } from 'redux';

import ConversationReducer from './conversation_reducer.js';
import SessionReducer from './session_reducer.js';

const RootReducer = combineReducers({
  conversations: ConversationReducer,
  session: SessionReducer,
});

export default RootReducer;
