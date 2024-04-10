import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import TableItem from './TableItem'
import { getTableData } from '../../api/table'
import { ITableItem } from '../../types/api'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { changeTableData } from '../../redux/slices/ItemsSlice'

const Table:React.FC = () => {
    const dispatch = useAppDispatch()

    const { selectedPage, viewCountSelectorValue, data } = useAppSelector(({ items }) => items)

    const getCurrentData = async () => {
        const data = await getTableData({ selectedPage, viewCountSelectorValue })
        
        if (data.ok && data.data) {
            dispatch(changeTableData(data.data))
        }
    }

    useEffect(() => {
        getCurrentData()
    }, [selectedPage, viewCountSelectorValue])


    return (
        <div className={styles.wrapper}>
            <div className={styles.headers}>
                <div>Название</div>
                <div>Единица измерения</div>
                <div>Артикул/код</div>
                <div />
            </div>
            <div className={styles.items}>
                {data.map(item => <TableItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default Table