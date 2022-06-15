import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './LoginBox.module.css';

const LoginBox = ({ onSetLogin, onSubmit }) => {
    return (
        <div className={styles.loginBox}>
            <div className={styles.loginText}>sign in</div>
            <TextField sx={{ m: 1, width: '80%' }} size="small" variant="standard" label="LoginName" className={styles.inputBox} name="loginName" onChange={onSetLogin} />
            <TextField sx={{ m: 1, width: '80%' }} type="password" size="small" variant="standard" label="Password" className={styles.inputBox} name="password" onChange={onSetLogin} />
            <div className={styles.loginBtn}>
                <Button type="submit" onClick={onSubmit} sx={{ width: '80%' }} variant="contained">Login</Button>
            </div>
        </div>
    )
}

export default LoginBox;

