import { createReducer, on } from '@ngrx/store';
import { ItemType } from 'src/app/youtube/models/item.model';
import { addYou2BeCardAction } from '../actions/you2Be.actions';

const initialState: ItemType[] = [];

export const you2BeReducer = createReducer(
  initialState,
  on(addYou2BeCardAction, (state, { type, ...rest }) => {
    const temp = [...state];
    temp.push(rest);
    return temp;
  })
);
