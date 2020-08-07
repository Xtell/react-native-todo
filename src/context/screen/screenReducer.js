import { OPEN_TODO, GO_BACK } from '../types';

const handlers = {
  [OPEN_TODO]: (state, { id }) => id,
  [GO_BACK]: () => null,
  DEFAULT: (state) => state,
};

export const screenReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
