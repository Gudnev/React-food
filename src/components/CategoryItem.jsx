import React from 'react'; // Импортируем React из библиотеки 'react'
import { Link } from 'react-router-dom'; // Импортируем компонент Link из библиотеки 'react-router-dom'

function CategoryItem(props) {
    // Деструктурируем пропсы
    const {
        // idCategory, // Идентификатор категории (закомментирован, так как не используется)
        strCategory, // Название категории
        strCategoryThumb, // URL изображения категории
        strCategoryDescription, // Описание категории
    } = props;

    // Возвращаем JSX-разметку для рендеринга карточки категории
    return (
        <div className='card'>
            {/* Блок для изображения категории */}
            <div className='card-image'>
                <img src={strCategoryThumb} alt={strCategory} /> {/* Изображение категории */}
            </div>
            {/* Блок для названия и описания категории */}
            <div className='card-content'>
                <span className='card-title'>{strCategory}</span> {/* Название категории */}
                <p>{strCategoryDescription.slice(0, 60)}...</p> {/* Краткое описание категории (первые 60 символов) */}
            </div>
            {/* Блок для действий (ссылка на категорию) */}
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn pink accent-3'>
                    Watch category {/* Текст кнопки */}
                </Link>
            </div>
        </div>
    );
}

export { CategoryItem }; // Экспортируем компонент CategoryItem для использования в других частях приложения

