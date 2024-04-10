import styles from './styles.module.css'
import { PlusIcon } from '../Common/Icons'
import Search from '../Common/Search'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { useMemo } from 'react'
import { togglePopupOpen } from '../../redux/slices/popupSlice'

const Header = () => {
    const dispach = useAppDispatch()
    const { viewCountSelectorValue, totalCount } = useAppSelector(({ items }) => items)

    const totalPagesCount = useMemo(() => {
        return Math.ceil(totalCount / viewCountSelectorValue)
    }, [totalCount, viewCountSelectorValue]) 

    const onToggleCreatePopupOpen = () => {
        dispach(togglePopupOpen({ isOpened: true, isEdit: false}))
    }
  
    return (
      <div className={styles.wrapper}>
          <div className={styles.titleWrapper}>
              <span className={styles.title}>Номенклатура</span>
              <span className={styles.pagesCount}>{totalPagesCount} единиц</span>
          </div>
          <div className={styles.controlWrapper}>
              <Search />
              <button onClick={onToggleCreatePopupOpen} className={styles.newPositionButton}>
                  <img className={styles.plusIcon} src={PlusIcon} alt='+' />
                  <span className={styles.newPosition}>Новая позиция</span>
              </button>
          </div>
      </div>
    )
}

export default Header