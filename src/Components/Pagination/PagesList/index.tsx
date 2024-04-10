import { ArrowIcon } from '../../Common/Icons'
import cn from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import styles from './styles.module.css'
import { changePage, selectPage } from '../../../redux/slices/ItemsSlice';
import { ChangePage } from '../../../types/constants';
import { useMemo } from 'react';

const PagesList = () => {
    const dispatch = useAppDispatch()
    
    const { selectedPage, viewCountSelectorValue, totalCount } = useAppSelector(({ items }) => items)

    const totalPagesCount = useMemo(() => {
        return Math.ceil(totalCount / viewCountSelectorValue)
    }, [totalCount, viewCountSelectorValue]) 

    const pages = useMemo(() => {
        const pages = []

        for (let i = 0; i < totalPagesCount; i++) pages.push(i + 1)

        return pages
    }, [totalPagesCount]) 

    const onChangePage = (value: ChangePage) => {          
        dispatch(changePage(value))
    }

    const onSelectPage = (value: number) => {
        dispatch(selectPage(value))
    }

    return (
        <div className={styles.pagesWrapper}>
         
            <div 
                onClick={() => onChangePage(ChangePage.PREV)} 
                className={styles.arrowIconWrapper}
            >
                <img className={styles.transformedArrowIconWrapper} src={ArrowIcon} alt='>'/>
            </div>
            {pages.map((elem, i) => {

                const param = Math.floor(selectedPage / 6.01) * 6;                 

                if (elem <= param || elem > param + 6) return;

                return (
                    <div 
                        onClick={() => onSelectPage(elem)}
                        className={cn(styles.page, {
                            [styles.selectedPage]: selectedPage === elem
                        })} 
                        key={i}
                    >
                        {elem}
                    </div>
                )
            })}
            <div 
                onClick={() => onChangePage(ChangePage.NEXT)} 
                className={styles.arrowIconWrapper}
            >
                <img src={ArrowIcon} alt='>' />
            </div>
        </div>
    )
}

export default PagesList