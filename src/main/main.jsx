import React, { useRef, useState } from "react";
import styles from './main.module.css';
import Button from "../ui-elements/button/button";
import { Link, useNavigate } from "react-router-dom";

async function sendImportTasks(data) {
    const response = await fetch('https://math-generator-7450.onrender.com/tasks', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function LeftDiv() {
    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef();

    const handleFileSelectChange = async (event) => {
        setSelectedFile(event.target.files[0]);
        await sendImportTasks(selectedFile);
        navigate('/viewing');


    }

    const handleChooseFileClick = () => {
        fileInputRef.current.click();
    };



    return (
        <div className={styles.leftDiv}>
            <div className={styles.outside}>
                <div className={styles.header}>
                    Используй
                </div>
                <div className={styles.text}>
                    Вы&nbsp;можете использовать уже готовые задачи.
                    А&nbsp;затем самостоятельно или автоматически создавать тесты</div>

                <input
                    type="file"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    accept=".json"
                    onChange={handleFileSelectChange}
                />
                <Button
                    shadow="shadow"
                    size='big'
                    title='Загрузить'
                    click={handleChooseFileClick} />
            </div>
        </div>
    )
}

function RightDiv() {
    return (
        <div className={styles.rightDiv}>
            <div className={styles.outside}>
                <div className={styles.header}>
                    Создавай
                </div>
                <div className={styles.text}>
                    Или&nbsp;же введите нужные параметры и&nbsp;наш сервис
                    автоматически создаст подходящие вам тесты из&nbsp;уникальных задач
                </div>
                <Link to='/create'>
                    <button
                        className={styles.shadow_white}>Начать</button>
                </Link>
            </div>
        </div>
    )
}

const Main = (props) => {

    return (
        <div className={styles.flex}>
            <LeftDiv />
            <RightDiv />
        </div>
    );
}

export default Main;