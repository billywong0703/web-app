import styles from './MeunListItem.module.css';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const MeunListItem = ({ title, herf, subMeun }) => {
    const [openSubmeun, setOpenSubmeun] = useState(false);
    const [subListHeigth, setSubListHeigth] = useState(0);
    const subListRef = useRef();

    useEffect(() => {
        setSubListHeigth(subListRef.current.scrollHeight);
    }, []);

    return (
        <div className={`${styles.meunList} ${openSubmeun && subMeun.length !== 0 ? styles.active : ""} `}>
            <span className={styles.meunListText} onClick={() => setOpenSubmeun(!openSubmeun)}>
                {title}
                {subMeun.length !== 0 ? (<span className={styles.dropdownToggle}></span>) : null}
            </span>
            <div style={{ height: openSubmeun ? `${subListHeigth}px` : "0px" }} ref={subListRef} className={`${styles.subMenuList} ${openSubmeun ? styles.active : ""}`}>
                {
                    subMeun.map(({ title, herf }) => {
                        return (<div key={uuidv4()} className={styles.subMenuListItem}>{title}</div>)
                    })
                }
            </div>
        </div>
    )
}

export default MeunListItem;

