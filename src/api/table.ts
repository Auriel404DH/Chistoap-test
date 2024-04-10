import { IGetTableData, IgetTableDataREturn } from "../types/api";
import { mainInstance } from "./instance";

export const authUser = (): Promise<any> =>
    mainInstance
        .post('/api/auth/login', JSON.stringify({
            login: 'admin',
            password: 'admin',
        }))
        .then(data => {
            return {
                ok: true,
                data
            };
        })
        .catch(data => {
            return {
                ok: false,
                error: data.message,
            };
        });


export const getTableData = ({ selectedPage, viewCountSelectorValue }: IGetTableData): Promise<IgetTableDataREturn> =>
    mainInstance
        .get('/api/items', {
            params: {
                page: selectedPage,
                pageSize: viewCountSelectorValue
            }
        })
        .then(data => {
            return {
                ok: true,
                data: data.data
            };
        })
        .catch(data => {
            return {
                ok: false,
                error: data.message,
            };
        });
