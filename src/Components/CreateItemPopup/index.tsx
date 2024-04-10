import styles from './styles.module.css'
import { CloseIcon, HomeIcon } from '../Common/Icons'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { clearNewItemData, togglePopupOpen } from '../../redux/slices/popupSlice'
import InputItem from './InputItem'
import { createNewTableItem, editTableItem } from '../../api/popup'

type IProps = {

}

const CreateItemPopup:React.FC<IProps> = () => {
    const dispatch = useAppDispatch()

    const { newItemData, isEdit } = useAppSelector(({ popup }) => popup)

    const onCloseCreatePopupOpen = () => {
        dispatch(togglePopupOpen({ isOpened: false, isEdit: false }))
        dispatch(clearNewItemData())
    }

    const onCancelCreateNewItemData = () => {
        dispatch(clearNewItemData())
    }

    const onApply = async () => {
        const isEmpty = !newItemData.name || !newItemData.measurement_units

        if (isEmpty) return;

        let data;

        if (isEdit) {
            data = await editTableItem(newItemData)
        } else {
            data = await createNewTableItem(newItemData)
        }   
    
        if (data.ok && data.data) {
            onCloseCreatePopupOpen()
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.iconWrapper}>
                    <img src={HomeIcon} alt={'^'} />
                </div>
                <img 
                    onClick={onCloseCreatePopupOpen}
                    className={styles.closeIcon} 
                    src={CloseIcon} 
                    alt={'x'}
                />
            </div>
            <div className={styles.content}>
                <span className={styles.title}>Новая позиция</span>
                <span className={styles.description}>
                    Заполните все поля для создания новой номенклатуры
                </span>
                <div className={styles.inputWrapper}>
                    <InputItem title='Название' id='name' isDisabled={isEdit} />
                    <InputItem title='Единицы измерения' id='measurement_units' />
                    <InputItem title='Артикул/код' id='code' />
                    <InputItem title='Описание' isTextArea id='description' />
                </div>
            </div>
            <div className={styles.buttonsWrapper}>
                <button 
                    onClick={onCancelCreateNewItemData} 
                    className={styles.cancelButton}
                >
                    Отмена
                </button>
                <button 
                    className={styles.applyButton}
                    onClick={onApply}
                >
                    Подтвердить
                </button>
            </div>
        </div>
    )
}

export default CreateItemPopup