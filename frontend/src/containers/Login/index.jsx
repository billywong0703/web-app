import LoginBox from '../../components/LoginBox/LoginBox';
import styles from './Login.module.css';
import { useState } from 'react';
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
                    let errmsg = err.response.data.error || "contant dev";
                    alert(errmsg);
                }
            })
    }

    return (
        <div className={styles.body}>
            <div className={styles.content}>
                <div className={styles.text}>Blog E-system</div>
                <LoginBox onSetLogin={onSetLoginObj} onSubmit={onSubmit}></LoginBox>
            </div>
        </div>
    );
}

export default LoginContainer;
