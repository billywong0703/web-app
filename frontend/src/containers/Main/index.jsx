import { useState } from 'react';
import Meun from '../../components/Meun/Meun';
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
            <Meun />
        </div>
    );
}

export default MainContainer;
