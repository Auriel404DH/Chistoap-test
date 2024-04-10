import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IChangeNewItemData, INewItemData, IOpenPopup } from '../../types/constants';

interface PopupSlice {
    isPopupOpen: boolean;
    newItemData: INewItemData;
    isEdit: boolean;
}

const emptyNewItemData = {
    id: '',
    name: '',
    description: '',
    measurement_units: '',
    code: ''
}

const initialState: PopupSlice = {
    isPopupOpen: false,
    isEdit: false,
    newItemData: emptyNewItemData
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    togglePopupOpen: (state, action: PayloadAction<IOpenPopup>) => {
        state.isPopupOpen = action.payload.isOpened
        state.isEdit = action.payload.isEdit
        
    },
    changeNewItemData: (state, action: PayloadAction<IChangeNewItemData>) => {
        state.newItemData = {...state.newItemData, [action.payload.id]: action.payload.value}
    },
    changeItemData: (state, action: PayloadAction<INewItemData>) => {
        state.newItemData = action.payload
    },
    clearNewItemData: (state) => {
        state.newItemData = emptyNewItemData
    }
  },
})

export const { 
    togglePopupOpen,
    changeNewItemData,
    changeItemData,
    clearNewItemData
} = popupSlice.actions

export default popupSlice.reducer