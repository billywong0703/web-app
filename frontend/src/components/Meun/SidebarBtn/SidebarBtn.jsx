import styles from './SidebarBtn.module.css';
import meunStyles from './../Meun.module.css';


const SidebarBtn = () => {
    return (
        <button type="button" className={`${styles.sidebarCollapse} ${meunStyles.navbarBtn}`}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default SidebarBtn;

