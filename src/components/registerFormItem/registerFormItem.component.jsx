import React from 'react';
import s from './registerFormItem.module.scss';
import { uuid } from "uuidv4";

function RegisterItem({ title, hint, type = 'text', additionalHint = '' }) {
    const id = uuid();
    return (
        <div className={s.container}>
            <label htmlFor={id}>
                <div className={s.title}>{title}</div>
                <input type={type} placeholder={hint} id={id} className={s.input}/>
                { additionalHint.length ?
                    <div className={s.additionalHint}>{additionalHint}</div> :
                    null
                }
            </label>
        </div>
    )
}

export default RegisterItem;
