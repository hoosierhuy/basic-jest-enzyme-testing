import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENT } from "../../actions/types";

it('Handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };
  
  const newState = commentsReducer([], action);
  // newState : array
  expect(newState).toEqual(['New Comment']);
});

it('Handles actions with unknown type', () => {
  const newState = commentsReducer([], { type: 'bacon' });
  expect(newState).toEqual([]);
});