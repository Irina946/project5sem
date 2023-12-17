import React, { useState, useEffect } from "react";
import styles from './create.module.css';
import ImgLogo from "../img/logoWhite.png";
import linearAlgebra from "./linear-algebra.json"
import mathematicalAnalysis from "./mathematicalAnalysis.json"
import differentialCalculusOne from "./differentialCalculusOne.json"
import differentialCalculusSeveral from "./differentialCalculusSeveral.json"
import Button from "../ui-elements/button/button";
import clsx from "clsx";


function getRandomComplexity(min, max) {
    if (min === max) return min;
    return Math.floor(Math.random() * (max - min) + min);
}


const ButtonClick = (props) => {
    const [isActive, setIsActive] = useState('');

    const handleClick = (button) => {
        setIsActive(button);
    }
    const complexity = props.complexity;
    const easyNumber = getRandomComplexity(Number(complexity[0].easy[0]), Number(complexity[0].easy.at(-1)));
    const mediumNumber = getRandomComplexity(Number(complexity[0].medium[0]), Number(complexity[0].medium.at(-1)));
    const hardNumber = getRandomComplexity(Number(complexity[0].hard[0]), Number(complexity[0].hard.at(-1)));
    console.log(easyNumber, mediumNumber, hardNumber)
    return <div className={styles.buttons} ><Button title='Низкий' color="empty" value={easyNumber} click={() => handleClick(props.id + 1)} active={isActive === (props.id + 1) ? 'active' : ''}
    /><Button title='Средний' value={mediumNumber} click={() => handleClick(props.id + 2)} active={isActive === (props.id + 2) ? 'active' : ''} /><Button title='Высокий' value={hardNumber} click={() => handleClick(props.id + 3)} active={isActive === (props.id + 3) ? 'active' : ''} /></div>
}



function LeftDiv() {
    const [buttonStyle, setButtonStyle] = useState('');
    const [TaskData, setTaskData] = useState(linearAlgebra);
    const handleButtonClick = (buttonId) => {
        if (buttonId === 'button1') {
            setTaskData(linearAlgebra)
        }
        else if (buttonId === 'button2') {
            setTaskData(mathematicalAnalysis)
        }
        else if (buttonId === 'button3') {
            setTaskData(differentialCalculusOne)
        }
        else if (buttonId === 'button4') {
            setTaskData(differentialCalculusSeveral)
        }
        setButtonStyle(buttonId)
    }
    const button1 = buttonStyle === "button1" ? styles.checked : "";
    const button2 = buttonStyle === "button2" ? styles.checked : "";
    const button3 = buttonStyle === "button3" ? styles.checked : "";
    const button4 = buttonStyle === "button4" ? styles.checked : "";


    const [check, setCheck] = useState(TaskData);
    const checkClick = (idx) => {
        const checkChange = { ...check };
        checkChange.themes[idx].isVisible = !checkChange.themes[idx].isVisible;
        setCheck(checkChange)
    }
    
    useEffect(() => {
        setCheck(TaskData)
    }, [TaskData])

    return (<><div className={styles.leftDiv}>
        <img src={ImgLogo} alt='логотип' className={styles.logo} width="225" height="29"></img>
        <button id="button1" className={clsx(styles.theme, button1)} onClick={() => handleButtonClick("button1")}>Элементы линейной алгебры и аналитическая геометрия</button>
        <button id="button2" className={clsx(styles.theme, button2)} onClick={() => handleButtonClick("button2")}>Введение в математический анализ</button>
        <button id="button3" className={clsx(styles.theme, button3)} onClick={() => handleButtonClick("button3")}>Дифференциальное исчисление функции одной переменной</button>
        <button id="button4" className={clsx(styles.theme, button4)} onClick={() => handleButtonClick("button4")}>Дифференциальное исчисление функции нескольких переменных</button>
    </div>
    <div className={styles.centerDiv}>
    {check.themes.map((theme, idx) => (
        <div className={styles.checkboxContainer}>
            <input id={idx} type="checkbox" defaultChecked={theme.isVisible} onClick={() => checkClick(idx)} name="parameters" className={styles.customCheckbox} />
            <label className={styles.label} htmlFor={idx}>{theme.title}</label>
        </div>
    ))}
</div>
        <div className={styles.rightDiv}>
            {check.themes.filter((el) => el.isVisible).map((div, idx) => (
                <div className={styles.oneTheme} id={idx + 100}>{div.title}
                    <div className={styles.parameters}>Выберите начальный уровень сложности</div>
                    <ButtonClick id={idx + 1000} complexity={div.complexity} />
                    <div className={styles.parameters}>Введите количество задач</div>
                    <input className={styles.numberInput} type="number" min={1}></input>
                </div>
            ))}
        </div>
        <div className={styles.buttonContainer}>
            <Button color="orange" size="big" title="Начать генерацию" />
        </div></>)
}






const Create = (props) => {

    return (<div className={styles.flex}>
        <LeftDiv />
    </div>

    );
}

export default Create;