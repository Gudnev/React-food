import React from 'react'; // Импортируем React из библиотеки 'react'
import { CategoryItem } from './CategoryItem'; // Импортируем компонент CategoryItem из файла './CategoryItem'

function CategoryList({ catalog = [] }) {
    // Определяем функциональный компонент CategoryList, который принимает пропс catalog
    // Устанавливаем значение catalog по умолчанию как пустой массив []

    // Возвращаем JSX-разметку для рендеринга списка категорий
    return (
        <div className='list'>
            {/* Перебираем массив catalog с помощью метода map */}
            {catalog.map((el) => (
                // Для каждого элемента массива catalog создаем компонент CategoryItem
                // Передаем все свойства элемента в компонент CategoryItem с помощью оператора распространения {...el}
                // Указываем уникальный ключ key для каждого компонента CategoryItem, используя значение el.idCategory
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    );
}

export { CategoryList }; // Экспортируем компонент CategoryList для использования в других частях приложения
