import React from 'react'
import styles from './styles.module.css'
import { EditIcon } from '../../Common/Icons'
import { useAppDispatch } from '../../../hooks';
import { changeItemData, togglePopupOpen } from '../../../redux/slices/popupSlice';

type IProps = {
    name: string;
    measurement_units?: string;
    code?: string;
    id: string;
}

const TableItem:React.FC<IProps> = ({ name, measurement_units, code, id }) => {
  const dispatch = useAppDispatch()

  const onOpenEditPopup = () => {
      dispatch(togglePopupOpen({ isOpened: true, isEdit: true }))
      dispatch(changeItemData({ name, measurement_units: measurement_units ?? '', code, id }))
  }

  return (
    <div className={styles.wrapper}>
        <div>{name}</div>
        <div>{measurement_units ?? '-'}</div>
        <div>{code ?? '-'}</div>
        <div>
            <div onClick={onOpenEditPopup} className={styles.edit}>
                <img src={EditIcon} alt='#' />
            </div>
        </div>
    </div>
  )
}

export default TableItem