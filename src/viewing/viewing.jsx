import React, { useEffect } from "react";
import styles from "./viewing.module.css";
import Data from "./response_1703162538519.json"
import {
    PrintTask,
    GenerateMatrix,
    PrintSumMatrix,
    PrintMultiplicationMatrix,
    PrintEquationMatrix,
    GenerateSystemLinearEquations,
    PrintVectors,
    PrintVector
} from "./printModel";
import Button from "../ui-elements/button/button";
import { Link } from "react-router-dom";


async function getTasks() {
    const response = await fetch('https://math-generator-7450.onrender.com/tasks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(await response.json());
    return response;
    
}


const checkContainsWord = (word, string) => {
    return string.includes(word)
}

const ChoosingPrintModel = (props) => {
    const quest = props.task
    const question = quest.task;
    if (checkContainsWord('размер', question)
        || checkContainsWord("Вычислите определитель", question)
        || checkContainsWord("ранг", question)
    )
        return (
            <PrintTask
                condition={question}
                task=
                {<GenerateMatrix
                    data={quest.data}
                    nameMatrix="A = "
                />}
                number={props.number}
                answer={quest.answer}
            />
        )
    else if (checkContainsWord('элемент', question)
        || checkContainsWord('определитель', question)
        || checkContainsWord('элемент', question))
        return (
            <PrintTask
                condition={question}
                task=
                {<GenerateMatrix
                    data={quest.data.matrix}
                    nameMatrix="A = "
                />}
                number={props.number}
                answer={quest.answer}
            />
        )
    else if (checkContainsWord('сумма', question))
        return (
            <PrintTask
                condition={question}
                task=
                {<PrintSumMatrix
                    data={quest.data}
                />}
                number={props.number}
                answer={<GenerateMatrix data={quest.answer} />}
            />
        )
    else if (checkContainsWord('умножения', question))
        if (checkContainsWord('числа', question))
            return (
                <PrintTask
                    condition={question}
                    task=
                    {<GenerateMatrix
                        data={quest.data.matrix}
                        nameMatrix="A = "
                    />}
                    number={props.number}
                    answer={<GenerateMatrix data={quest.answer} />}
                />
            )
        else return (
            <PrintTask
                condition={question}
                task=
                {<PrintMultiplicationMatrix
                    data={quest.data}
                />}
                number={props.number}
                answer={<GenerateMatrix data={quest.answer} />}
            />
        )
    else if (checkContainsWord('транспонированную', question) || checkContainsWord('обратную', question))
        return (
            <PrintTask
                condition={question}
                task=
                {<GenerateMatrix
                    data={quest.data}
                    nameMatrix="A = "
                />}
                number={props.number}
                answer={<GenerateMatrix data={quest.answer} />}
            />
        )
    else if (checkContainsWord('уравнение', question))
        return (
            <PrintTask
                condition={question}
                task=
                {<PrintEquationMatrix
                    data={quest.data}
                />}
                number={props.number}
                answer={<GenerateMatrix data={quest.answer} />}
            />
        )
    else if (checkContainsWord('линейных уравнений', question))
        return (
            <PrintTask condition={question}
                task=
                {<GenerateSystemLinearEquations
                    data={quest.data}
                />}
                number={props.number}
                answer={<GenerateMatrix data={quest.answer} />}
            />
        )
    else if (checkContainsWord('векторов', question)
        || checkContainsWord('вектора', question))
        if (checkContainsWord('скалярное', question)
            || checkContainsWord('длину', question))
            return (
                <PrintTask condition={question}
                    task=
                    {<PrintVectors data={quest.data} />}
                    number={props.number}
                    answer={quest.answer}
                />
            )
        else if (checkContainsWord('векторное', question))
            return (
                <PrintTask condition={question}
                    task=
                    {<PrintVectors data={quest.data} />}
                    number={props.number}
                    answer={<PrintVector data={quest.answer} />}
                />
            )
        else if (checkContainsWord('Да или Нет', question)
            || checkContainsWord('произведение', question))
            return (
                <PrintTask condition={question}
                    task=
                    {<PrintVectors data={quest.data} />}
                    number={props.number}
                    answer={quest.answer}
                />
            )

}

const Viewing = () => {
    useEffect(() => {getTasks()}, [])
    return (<div>
        <div className={styles.header}></div>
        <div className={styles.main}>
            <div className={styles.download}></div>
            <div className={styles.tasks}>
                {Data.map((item, index) => (

                    <ChoosingPrintModel key={index} number={index + 1} task={item} />
                ))}
            </div>
            <div className={styles.containerButton}>
                <Link to="/">
                    <Button
                        title="Закончить просмотр"
                        size="big"
                        color="orange"
                    />
                </Link>
                <button className={styles.myButton}>Экспорт в Moodle XML</button>
            </div>
        </div>
    </div>

    );
}

export default Viewing;