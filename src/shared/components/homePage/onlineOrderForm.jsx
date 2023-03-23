import React, {useEffect, useState} from 'react'
import onlineOrderFormArr from "../../Data/onlineOrderForm";
import { Checkbox } from '../checkbox';
import OnlineOrderFormData from "./onlineOrderFormData/onlineOrderFormData";
const OnlineOrderForm = ({setOpen, setSuccess, success}) => {
    const [selectedServices, setSelectedServices] = useState('Другое');


    const handleOnChange = (e) => {
        setSelectedServices(e.currentTarget.value);
    }
   const successFunc = () => {
       setOpen(false)

       function sayHi() {
           setSuccess(false);
       }

       setTimeout(sayHi, 1000);

   }

    return (
        <div className='onlineForm'>
            <div className='onlineForm__close'>
                <span onClick={successFunc}>закрыть</span>
            </div>
            <h1 className='onlineForm__title'>Форма онлайн-заказа</h1>
            <div className={success ?"onlineForm__successActive" : "onlineForm__success"}>
                <span>
                    ВАША ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА. <br/>
                    НАШ МЕНЕДЖЕР ОТДЕЛА ПРОДАЖ СВЯЖЕТСЯ С ВАМИ <br/>
                    В ТЕЧЕНИЕ ОДНОГО РАБОЧЕГО ДНЯ С МОМЕНТА ПОЛУЧЕНИЯ ЗАЯВКИ.
                </span>
            </div>
            <div className={success ? 'onlineForm__activeForm' : ''}>
                <p className='onlineForm__desc'>
                    Заполните форму сейчас и наш специалист свяжется с вами для консультации и <br/>
                    составит ваше персональное предложение.
                    Вы получите более точное КП, <br/>если укажете полную информацию о проекте.
                </p>
                <div>
                    <h4>1. Какие виды услуг вас интересуют?</h4>
                    <div className="onlineForm__list">
                        {onlineOrderFormArr.map((elem, idx) => (
                            <Checkbox
                                key={elem.value}
                                id={elem.value}
                                label={elem.label}
                                name="services"
                                value={elem.label}
                                isSelected={selectedServices}
                                onChange={handleOnChange}
                            />
                        ))}
                    </div>
                </div>
                <OnlineOrderFormData selectedServices={selectedServices} setSuccess={setSuccess} setSelectedServices={setSelectedServices}/>
            </div>
        </div>
    )
}

export default OnlineOrderForm;