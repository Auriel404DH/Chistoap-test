import styles from './App.module.css'
import CreateItemPopup from './Components/CreateItemPopup'
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import Table from './Components/Table'
import { useAppSelector } from './hooks'

function App() {
  const { isPopupOpen } = useAppSelector(({ popup }) => popup)
 
  return (
    <div className={styles.wrapper}>

      {isPopupOpen && (
        <>
          <div className={styles.lowOpacityWrapper} />
          <CreateItemPopup />
        </>
      )}

      <Header />
      <Table />
      <Pagination />
    </div>
  )
}

export default App
