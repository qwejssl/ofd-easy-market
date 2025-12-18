import './ContactForm.css'

function ContactForm() {
	const handleSubmit = event => {
		event.preventDefault()
		alert(
			'Демо: форма отправлена. В реальном сервисе здесь была бы обработка обращения.'
		)
	}

	return (
		<form className='contact-form' onSubmit={handleSubmit}>
			<div className='contact-form__row'>
				<label>
					Имя
					<input type='text' name='name' required />
				</label>
				<label>
					Email
					<input type='email' name='email' required />
				</label>
			</div>

			<label>
				Тип запроса
				<select name='type' defaultValue='choose'>
					<option value='choose' disabled>
						Выберите вариант
					</option>
					<option value='choose-ofd'>Помощь с выбором ОФД</option>
					<option value='errors'>Ошибки при передаче чеков</option>
					<option value='renew'>Продление договора</option>
					<option value='other'>Другое</option>
				</select>
			</label>

			<label>
				Сообщение
				<textarea
					name='message'
					rows='4'
					placeholder='Опишите ситуацию: модель кассы, оператор ОФД, текст ошибки...'
				/>
			</label>

			<button type='submit'>Отправить обращение (демо)</button>
		</form>
	)
}

export default ContactForm
