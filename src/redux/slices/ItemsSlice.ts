import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ChangePage } from '../../types/constants';
import { ITableData, ITableItem } from '../../types/api';


interface ItemsState {
  viewCountSelectorValue: number;
  selectedPage: number;
  totalCount: number;
  data: ITableItem[]
}

const initialState: ItemsState = {
    viewCountSelectorValue: 10,
    selectedPage: 1,
    totalCount: 0,
    data: []
}

export const itemsState = createSlice({
  name: 'items',
  initialState,
  reducers: {
    changeViewCountSelectorValue: (state, action: PayloadAction<number>) => {
        state.viewCountSelectorValue = action.payload
    },
    changePage: (state, action: PayloadAction<string | number>) => {
        const totalPage = Math.ceil(state.totalCount / state.viewCountSelectorValue)

        if (action.payload === ChangePage.NEXT && totalPage !== state.selectedPage) {
            state.selectedPage = state.selectedPage + 1
        } 

        if (action.payload === ChangePage.PREV && state.selectedPage > 1) {
            state.selectedPage = state.selectedPage - 1
        }
    },
    selectPage: (state, action: PayloadAction<number>) => {
        state.selectedPage = action.payload  
    },
    changeTableData: (state, action: PayloadAction<ITableData>) => {
        state.data = action.payload.result
        state.totalCount = action.payload.total
    },
    filterTableData: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter(elem => elem.name.toLowerCase().includes(action.payload.toLowerCase()))
  },
  },
})

export const { 
  changeViewCountSelectorValue, 
  changePage,  
  selectPage, 
  changeTableData,
  filterTableData 
} = itemsState.actions

export default itemsState.reducer