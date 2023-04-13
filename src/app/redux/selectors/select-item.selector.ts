import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemType } from 'src/app/youtube/models/item.model';
import { StoreType } from '../state.models';

type SelectItemType = { id: string };

export const selectItem = createSelector(
  (state: StoreType) => state.you2BeCards,
  (items: ItemType[], { id }: SelectItemType) =>
    items.find((item) => item.id === id)
);
