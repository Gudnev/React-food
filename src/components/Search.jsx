import React, { useState } from 'react'; // Импортируем React и хук useState из библиотеки 'react'

function Search({ cb = Function.prototype }) {
    // Определяем функциональный компонент Search, который принимает пропс cb с функцией обратного вызова по умолчанию

    // Используем хук useState для управления состоянием компонента
    const [value, setValue] = useState(''); // Инициализируем состояние value пустой строкой

    // Функция-обработчик для события нажатия клавиши
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(); // Если нажата клавиша Enter, вызываем функцию handleSubmit
        }
    };

    // Функция для обработки отправки формы
    const handleSubmit = () => {
        cb(value); // Вызываем функцию обратного вызова cb с текущим значением value
    };

    // Возвращаем JSX-разметку для рендеринга компонента поиска
    return (
        <div className='row'>
            {/* Обертка для строки поиска */}
            <div className='input-field col s12'>
                {/* Поле ввода для поиска */}
                <input
                    type='search'
                    id='search-field'
                    placeholder='search' // Текст-заполнитель для поля поиска
                    onKeyDown={handleKey} // Обработчик события нажатия клавиши
                    onChange={(e) => setValue(e.target.value)} // Обработчик события изменения значения поля
                    value={value} // Текущее значение поля поиска
                />
                {/* Кнопка для выполнения поиска */}
                <button
                    className='btn pink accent-3'
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                    onClick={handleSubmit} // Обработчик события нажатия кнопки
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export { Search }; // Экспортируем компонент Search для использования в других частях приложения
