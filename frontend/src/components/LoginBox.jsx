import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const style = {
    loginBox: {
        width: '350px',
        borderRadius: '5px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
        textAlign: 'center',
        padding: '10px',
        margin: '0 auto'
    },

    loginText: {
        fontSize: '1.5rem',
        fontWeight: '500',
        padding: '5px',
        marginBottom: '20px'
    },

    inputBox: {
        margin: '2px'
    },

    loginBtn: {
        margin: '20px 0'
    }
}

const LoginBox = () => {
    const [loginObj, setLoginObj] = useState({});

    const onSetLoginObj = (e) => {
        const { name, value } = e.target;
        setLoginObj(prve => {
            return { ...prve, [name]: value }
        });
    }

    const onSubmit = () => {
        console.log(loginObj);
    }

    return (
        <div style={style.loginBox}>
            <div style={style.loginText}>sign in</div>
            <TextField sx={{ m: 1, width: '80%' }} size="small" variant="standard" label="LoginName" style={style.inputBox} name="loginName" onChange={onSetLoginObj} />
            <TextField sx={{ m: 1, width: '80%' }} type="password" size="small" variant="standard" label="Password" style={style.inputBox} name="password" onChange={onSetLoginObj} />
            <div style={style.loginBtn}>
                <Button type="submit" onClick={onSubmit} sx={{ width: '80%' }} variant="contained">Login</Button>
            </div>
        </div>
    )
}

export default LoginBox;

