import { useState } from 'react';
import styles from './Main.module.css';

const MainContainer = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <button className={styles.btn}>adasdafadsae</button>
        </div>
    );
}

export default MainContainer;
