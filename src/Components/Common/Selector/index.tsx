import { useState } from 'react'
import styles from './styles.module.css'
import { DownArrowIcon } from '../Icons'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import cn from 'classnames'
import { changeViewCountSelectorValue } from '../../../redux/slices/ItemsSlice'

const selectorValues = [3, 5, 10, 15]

const Selector = () => {
    const dispatch = useAppDispatch()
    const [isSelectorMenuOpened, setIsSelectorMenuOpened] = useState(false)

    const { viewCountSelectorValue } = useAppSelector(({ items }) => items)

    const onToggleSelectorMenuOpened = () => setIsSelectorMenuOpened(prev => !prev)

    const onChangeSelectorValue = (value: number) => {
        dispatch(changeViewCountSelectorValue(value))
        setIsSelectorMenuOpened(false)
    }

    const filteredSelectorValues = selectorValues.filter(elem => elem !== viewCountSelectorValue).reverse()

    return (
        <div className={styles.selectorWrapper}>
            <div onClick={onToggleSelectorMenuOpened} className={styles.selector}>
                <span className={styles.selectedViewCount}>{viewCountSelectorValue}</span>
                <img 
                    className={cn({[styles.openedArrowIcon]: isSelectorMenuOpened})} 
                    src={DownArrowIcon} alt='\' 
                />
            </div>
            {isSelectorMenuOpened && (
                <div className={styles.openedSelectorValuesWrapper}>
                    {filteredSelectorValues.map((el, i) => (
                        <div 
                            onClick={() => onChangeSelectorValue(el)} 
                            className={styles.selectorValue} 
                            key={i}
                        >
                            {el}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Selector