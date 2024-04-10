import { ICreaateNewTableItemReturn } from "../types/api";
import { INewItemData } from "../types/constants";
import { mainInstance } from "./instance";

export const createNewTableItem = ({ name, description, measurement_units, code }: INewItemData): Promise<ICreaateNewTableItemReturn> =>
    mainInstance
        .post('/api/items', JSON.stringify({
            name,
            description,
            measurement_units,
            code
        }))
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

export const editTableItem = ({ name, description, measurement_units, code, id }: INewItemData): Promise<ICreaateNewTableItemReturn> =>
    mainInstance
        .patch(`/api/items/${id}`, JSON.stringify({
            name,
            description,
            measurement_units,
            code
        }))
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