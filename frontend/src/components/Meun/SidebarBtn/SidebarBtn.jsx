import styles from './SidebarBtn.module.css';
import meunStyles from './../Meun.module.css';


const SidebarBtn = ({  openMeun, onTriggerMeun }) => {
    return (
        <button type="button" onClick={onTriggerMeun} className={`${styles.sidebarCollapse} ${meunStyles.navbarBtn} ${openMeun ? styles.active : ""}`}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default SidebarBtn;

