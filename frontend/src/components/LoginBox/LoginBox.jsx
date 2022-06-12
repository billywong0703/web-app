import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from './style'

const LoginBox = ({ onSetLogin, onSubmit }) => {
    return (
        <div style={style.loginBox}>
            <div style={style.loginText}>sign in</div>
            <TextField sx={{ m: 1, width: '80%' }} size="small" variant="standard" label="LoginName" style={style.inputBox} name="loginName" onChange={onSetLogin} />
            <TextField sx={{ m: 1, width: '80%' }} type="password" size="small" variant="standard" label="Password" style={style.inputBox} name="password" onChange={onSetLogin} />
            <div style={style.loginBtn}>
                <Button type="submit" onClick={onSubmit} sx={{ width: '80%' }} variant="contained">Login</Button>
            </div>
        </div>
    )
}

export default LoginBox;

