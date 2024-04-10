import styles from './styles.module.css'
import Selector from '../Common/Selector';
import PagesList from './PagesList';

const Pagination = () => {

    return (
        <div className={styles.wrapper}>
            <PagesList />
            <div className={styles.viewCountSelectorWrapper}>
                <span className={styles.showText}>Показывать по:</span>
                <Selector />
            </div>
        </div>
    )
}

export default Pagination