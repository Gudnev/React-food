import React from 'react'; // Импортируем React из библиотеки 'react'
import { Link } from 'react-router-dom'; // Импортируем компонент Link из библиотеки 'react-router-dom'

function Meal(props) {
    // Деструктурируем пропсы
    const { strMeal, idMeal, strMealThumb } = props;

    // Возвращаем JSX-разметку для рендеринга карточки блюда
    return (
        <div className='card'>
            {/* Блок для изображения блюда */}
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal} /> {/* Изображение блюда */}
            </div>
            {/* Блок для названия блюда */}
            <div className='card-content'>
                <span className='card-title'>{strMeal}</span> {/* Название блюда */}
            </div>
            {/* Блок для действий (ссылка на рецепт) */}
            <div className='card-action'>
                <Link to={`/meal/${idMeal}`} className='btn pink accent-3'>
                    Watch recipe {/* Текст кнопки */}
                </Link>
            </div>
        </div>
    );
}

export { Meal }; // Экспортируем компонент Meal для использования в других частях приложения
