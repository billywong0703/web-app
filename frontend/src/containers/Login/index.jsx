import LoginBox from '../../components/LoginBox/LoginBox';
import { useState } from 'react';
import style from './style';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
    const [loginObj, setLoginObj] = useState({});
    const navigate = useNavigate();

    const onSetLoginObj = (e) => {
        const { name, value } = e.target;
        setLoginObj(prve => {
            return { ...prve, [name]: value }
        });
    }

    const onSubmit = () => {
        axios.post('http://localhost:8080/api/login', loginObj)
            .then(res => {
                axios.defaults.headers.common['Authorization'] = res.data.token;
                navigate("../main", { replace: true });
            })
            .catch(err => {
                if (err.response && err.response.data) {
                    console.log(err.response.data)
                    let errmsg = err.response.data.error || "contant dev";
                    alert(errmsg);
                }
            })
    }

    return (
        <div style={style.body}>
            <div style={style.content}>
                <div style={style.text}>Blog E-system</div>
                <LoginBox onSetLogin={onSetLoginObj} onSubmit={onSubmit}></LoginBox>
            </div>
        </div>
    );
}

export default LoginContainer;
