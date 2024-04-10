import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { SearchIcon } from '../Icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { changeTableData, filterTableData } from '../../../redux/slices/ItemsSlice'
import { getTableData } from '../../../api/table'

const Search = () => {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState('')

    const { selectedPage, viewCountSelectorValue, data } = useAppSelector(({ items }) => items)

    const getCurrentData = async () => {
        const data = await getTableData({ selectedPage, viewCountSelectorValue })
        
        if (data.ok && data.data) {
            dispatch(changeTableData(data.data))
        }
    }

    useEffect(() => {
        if (search.length === 0 && data.length !== viewCountSelectorValue) {
            getCurrentData()
        }
    }, [search])

    const onChangeSearch = (value: string) => {
        setSearch(value)
    }

    const onStartSearch = () => {
        dispatch(filterTableData(search))
    }
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.searchWrapper}>
                <img className={styles.searchIcon} src={SearchIcon} alt='s' />
                <input 
                    className={styles.searchInput} 
                    value={search} 
                    placeholder='Поиск по названию'
                    onChange={(e) => onChangeSearch(e.target.value)}
                />
            </div> 
            <div 
                onClick={onStartSearch} 
                className={styles.searchButton}
            >
                Поиск
            </div>  
        </div>
    )
}

export default Search