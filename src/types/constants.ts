export enum ChangePage {
    NEXT = 'next',
    PREV = 'prev'
}

export type IChangeNewItemData = {
    id: string;
    value: string;
}

export type IOpenPopup = {
    isOpened: boolean;
    isEdit: boolean
}

export type INewItemData = {
    id?: string;
    name: string;
    description?: string;
    measurement_units: string;
    code?: string;
}