import React, {useEffect, useState, useReducer} from 'react'
import axios from "axios";
import MaskedInput from 'react-text-mask'
import { reducer, initialState } from "./reducer";
import {emailRegexp, telRegexp} from "../../../constants";
import Modal from "../../spiner/spiner";

const OnlineOrderFormData = ({selectedServices, setSuccess, setSelectedServices}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('state', state);

    const handleOnChangeInput = (event) => {
        dispatch({
            type: 'setInputValue',
            name: event.target.name,
            value: event.target.value
        })
    }

    /*Данная функция проверяет заполненыли все обязательные поля в форме*/
    const blurHandler = (event) => {
        dispatch({
            type: 'setValidate',
            name: event.target.name
        })
    }

    /*Отправляем axios запрос в теллеграм*/
    const handleSubmit = () => {
        dispatch({type: 'checkValidate'})
    }

    useEffect(() => {
        if(state.validForm) {
            dispatch({type: 'setIsLoading'});

            let message = `<b>Заявка с сайта</b>\n`;
            message += `<b>Услуга: </b> ${selectedServices}\n`;
            message += `<b>Адрес сайта: </b> ${state.websiteAddress}\n`;
            message += `<b>Название компании: </b> ${state.companyName}\n`;
            message += `<b>Комментарий: </b> ${state.yourComment}\n`;
            message += `<b>Контактное лицо: </b> ${state.name}\n`;
            message += `<b>E-mail: </b> ${state.email}\n`;
            message += `<b>Телефон: </b> ${state.phone}\n`;

            axios.post('https://api.telegram.org/bot6063566646:AAGsyqwH3R4WKImLVE_upLm4rYq3_eyN3J4/sendMessage', {
                chat_id: '-1001812176927',
                text: message,
                parse_mode: 'html'
            })
                .then(() => {
                    dispatch({type: 'clearState'})
                    setSuccess(true)
                })


        }
    }, [state.validForm])

    return (
        <div className="onlineForm__data">
            <h4>2. Расскажите о вашем проекте</h4>
            <p className="onlineForm__data_subtitle">поля, обязательные для заполнения</p>
            <div className="onlineForm__data__inputs">
                <div className="onlineForm__data__inputs_block">
                    <div className="onlineForm__data__inputs_block_desc">
                        <span>Адрес сайта</span>
                        <input
                            onChange={handleOnChangeInput}
                            value={state.websiteAddress}
                            name="websiteAddress"
                            type="text"/>
                    </div>
                    <div className="onlineForm__data__inputs_block_desc">
                        <span>Название компании</span>
                        <input
                            onChange={handleOnChangeInput}
                            value={state.companyName}
                            name="companyName"
                            type="text"
                        />
                    </div>
                    <div className="onlineForm__data__inputs_block_desc">
                        <span>Ваш комментарий</span>
                        <textarea
                            onChange={handleOnChangeInput}
                            name="yourComment"
                            value={state.yourComment}
                        ></textarea>
                    </div>
                </div>
                <div className="onlineForm__data__inputs_block">
                    <div className="onlineForm__data__inputs_block_desc">
                        <span>Контактное лицо*</span>
                        <div className="onlineForm__data__inputs_block_valid">
                            <input
                                className={state.validate.name ? 'errorField' : ''}
                                onChange={handleOnChangeInput}
                                value={state.name}
                                onBlur={blurHandler}
                                type="text"
                                name="name"
                                placeholder="Имя"
                            />
                            {state.validate.name && <p>Обязательно для заполнения</p>}
                        </div>
                    </div>
                    <div className="onlineForm__data__inputs_block_desc">
                        <span>E-mail*</span>
                        <div className="onlineForm__data__inputs_block_valid">
                            <input
                                className={state.validate.email || !state.regexpValid.email ? 'errorField' : ''}
                                onChange={handleOnChangeInput}
                                value={state.email}
                                onBlur={blurHandler}
                                type="email"
                                name="email"
                                placeholder="Consul-IT@gmail.com"
                            />
                            {state.validate.email && <p>Обязательно для заполнения</p>}
                            {state.email && !state.regexpValid.email && <p>Некоректная почта</p>}
                        </div>
                    </div>
                    <div className="onlineForm__data__inputs_block_desc">
                        <span>Телефон*</span>
                        <div className="onlineForm__data__inputs_block_valid">
                            <MaskedInput
                                mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/,' ', /\d/, /\d/]}
                                className={state.validate.phone || !state.regexpValid.phone ? 'errorField' : ''}
                                placeholder="+7 (___) ___-__-__"
                                guide={true}
                                name="phone"
                                onChange={handleOnChangeInput}
                                value={state.phone}
                            />
                            {state.validate.phone && <p>Обязательно для заполнения</p>}
                            {state.phone && !state.regexpValid.phone && <p>Некоректный номер</p>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="onlineForm__footer">
                <label className="onlineForm__footer__desc" htmlFor="processingPersonalData">
                    <input
                        type="checkbox"
                        name="processingPersonalData"
                        id="processingPersonalData"
                        onChange={e => handleOnChangeInput({
                            target: {
                                name: e.target.name,
                                value: e.target.checked
                            }
                        })}
                    />
                    <span className={state.validate.processingPersonalData ? 'errorCheckbox' : ''}>
                        Согласен с обработкой моих персональных данных в
                        соответствии с политикой конфиденциальности.
                    </span>
                </label>
                <div className="onlineForm__footer__btn">
                    {state.isLoading ? <Modal /> : <button type="submit" onClick={handleSubmit}>получить кп</button>}
                    <p>Начните сотрудничество <br/> с нами уже сейчас!</p>
                </div>
            </div>
        </div>
    )
}

export default OnlineOrderFormData;