import styles from './MeunListItem.module.css';
import { useState, useRef, useEffect } from 'react';


const MeunListItem = () => {
    const [openSubmeun, setOpenSubmeun] = useState(false);
    const [subListHeigth, setSubListHeigth] = useState(0);
    const subListRef = useRef();

    useEffect(() => {
        setSubListHeigth(subListRef.current.scrollHeight);
    }, []);

    return (
        <div className={`${styles.meunList} ${openSubmeun ? styles.active : ""} `}>
            <span className={styles.meunListText} onClick={() => setOpenSubmeun(!openSubmeun)}>
                Search
                <span className={styles.dropdownToggle}></span>
            </span>
            <div style={{ height: openSubmeun ? `${subListHeigth}px` : "0px"}} ref={subListRef} className={`${styles.subMenuList} ${openSubmeun ? styles.active : ""}`}>
                <div className={styles.subMenuListItem}>General Search</div>
                <div className={styles.subMenuListItem}>General Search</div>
            </div>
        </div>
    )
}

export default MeunListItem;

