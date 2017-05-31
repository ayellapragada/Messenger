
const _nullConversations = {};

const ConversationReducer = (state = _nullConversations, action) => {
  Object.freeze(state);

  switch(state, action.type) {
    default:
      return state;
  }
  
};


export default ConversationReducer;

