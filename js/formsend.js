'use strict'
const TELEGRAM_BOT_TOKEN = '6856943504:AAF_k8-FOerUmzP3eeMHRFtecqpvJmwY6xY';
const TELEGRAM_CHAT_ID = '-1002113359553';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
// const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
// {"ok":true,"result":{"message_id":6,"from":{"id":6856943504,"is_bot":true,"first_name":"prekladovnaBot","username":"prekladovnaBot"},"chat":{"id":-1002113359553,"title":"P\u0159ekladovna","username":"prekladov_na","type":"supergroup"},"date":1712469982,"text":"\u0442\u0435\u0441\u0442"}}

// https://api.telegram.org/bot6856943504:AAF_k8-FOerUmzP3eeMHRFtecqpvJmwY6xY/sendMessage?chat_id=-1002113359553?&text=тест.

async function sendEmailTelegram(event) {
    event.preventDefault()

    const form = event.target;
    const formBtn = document.querySelector('.form__submit-button')
    const formSendResult = document.querySelector(`.form_send-result`);
    formSendResult.textContent = ' ';

    const {name, email, phone, comment,promocode,city,service_select} = Object.fromEntries(new FormData(form).entries());

    const text = `Заявка от ${name}!\nEmail : ${email}\nТелефон: ${phone}\nКомментарий: ${comment}\nПромокод: ${promocode}\nГород: ${city}\nУслуга: ${service_select}`;

    try {
        formBtn.textContent = `Загрузка...`
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            })
        });

        if (response.ok) {
            formSendResult.style.color = `green`
            formSendResult.textContent = `Спасибо! Мы свяжемся с вами в ближайшее время.`
            form.reset()
        } else {
            throw new Error(response.statusText)
        }
    } catch (error) {
        console.error()
        formSendResult.textContent = `Анкета не отправлена! Попробуйте позже.`;
    } finally {
        formBtn.textContent = `Оставить заявку`
    }
}

// function check() {
//     var submit = document.querySelector('.form__submit-button');
//     if (document.getElementById('politics').checked)
//         submit.disabled = '';
//     else
//         submit.disabled = `disabled`;
// }