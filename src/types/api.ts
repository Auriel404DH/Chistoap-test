import { INewItemData } from "./constants";

export type ITableItem = {
    id: string;
    code?: string;
    name: string;
    measurement_units?: string;
}

export type ITableData = {
    total: number;
    result: ITableItem[]
}

export type IGetTableData = {
    selectedPage: number,
    viewCountSelectorValue: number;
}

export type IgetTableDataREturn = {
    ok: boolean;
    data?: ITableData;
    error?: string;
}

export type ICreaateNewTableItemReturn = {
    ok: boolean;
    data?: INewItemData;
    error?: string;
}