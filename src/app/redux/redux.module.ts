import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { customCardsReducer } from './reducers/custom-cards.reducer';
import { you2BeReducer } from './reducers/you2Be.reducer';
import { StoreType } from './state.models';

@NgModule({
  imports: [
    StoreModule.forRoot<StoreType>({
      customCards: customCardsReducer,
      you2BeCards: you2BeReducer,
    }),
  ],
  // exports: [StoreModule],
})
export class ReduxModule {}
