import React, { useState } from 'react'
import styles from './styles.module.css'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { changeNewItemData } from '../../../redux/slices/popupSlice'

type IProps = {
    title: string
    isTextArea?: boolean
    id: string;
    isDisabled?: boolean;
}

const InputItem:React.FC<IProps> = ({ title, isTextArea, id, isDisabled }) => {
    const dispatch = useAppDispatch()

    const { newItemData } = useAppSelector(({ popup }) => popup)

    const onChangeValue = (value: string) => {
        dispatch(changeNewItemData({ id, value }))
    }    

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                {title}
            </div>
            {isTextArea
                ? 
                <textarea 
                    value={(newItemData as any)[id] ?? ''} 
                    className={styles.textarea}
                    onChange={(e) => onChangeValue(e.target.value)} 
                />
                : 
                <input 
                    value={(newItemData as any)[id] ?? ''} 
                    disabled={isDisabled}
                    className={styles.input}
                    onChange={(e) => onChangeValue(e.target.value)} 
                />
            }
        </div>
    )
}

export default InputItem