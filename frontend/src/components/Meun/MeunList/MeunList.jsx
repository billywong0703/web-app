import MeunListItem from './MeunListItem/MeunListItem'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import axios from 'axios';



const MeunList = () => {
    const [meun, setMeun] = useState([]);
    const getMeunList = () => {
        axios.get('http://localhost:3000/../json/meun.json')
            .then(res => {
                setMeun(res.data.meun);
            })
            .catch(err => {
                if (err.response && err.response.data) {
                    let errmsg = err.response.data.error || "contant dev";
                    alert(errmsg);
                }
            })
    }

    useEffect(() => {
        getMeunList();
    }, []);

    return (
        <div>
            {
                meun.map(({ title, herf, subMeun = [] }) => {
                    return (<MeunListItem key={uuidv4()} title={title} herf={herf} subMeun={subMeun}></MeunListItem>)
                })
            }
        </div>
    )
}

export default MeunList;

