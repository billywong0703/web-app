import styles from './Meun.module.css';
import SidebarBtn from './SidebarBtn/SidebarBtn';
import MyLogo from './../MyLogo/MyLogo';
import { Person as PersonIcon, Cached as CachedIcon, Email as EmailIcon, Key } from '@mui/icons-material/';
import Button from '@mui/material/Button';
import { StyledEngineProvider } from '@mui/material/styles';


const Meun = () => {
    return (
        <div>
            <nav className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <MyLogo />
                </div>

                <div className={styles.sidebarUser}>
                    <span>Hi,</span><span>Admin</span>
                </div>

                <div className={styles.sidebarBtnList}>
                    <StyledEngineProvider injectFirst>
                        <Button className={styles.sidebarBtn} variant="contained" style={{ "position": "relative" }}>
                            <EmailIcon />
                            <span className={styles.redMsg}>1</span>
                        </Button>
                        <Button className={styles.sidebarBtn} variant="contained"><CachedIcon /></Button>
                        <Button className={styles.sidebarBtn} variant="contained"><PersonIcon /></Button>
                        <Button className={styles.sidebarBtn} variant="contained"><Key /></Button>                   
                    </StyledEngineProvider>
                </div>

                <div className={styles.ctas}>
                    <button className={styles.logout}>Logout</button>
                </div>
            </nav>
            <SidebarBtn />
        </div>
    )
}

export default Meun;

