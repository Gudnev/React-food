import React from 'react'; // Импортируем React из библиотеки 'react'
import { Meal } from './Meal'; // Импортируем компонент Meal из файла './Meal'

function MealList({ meals }) {
    // Определяем функциональный компонент MealList, который принимает пропс meals

    // Возвращаем JSX-разметку для рендеринга списка блюд
    return (
        <div className='list'>
            {/* Перебираем массив meals с помощью метода map */}
            {meals.map((meal) => (
                // Для каждого элемента массива meals создаем компонент Meal
                // Передаем все свойства элемента в компонент Meal с помощью оператора распространения {...meal}
                // Указываем уникальный ключ key для каждого компонента Meal, используя значение meal.idMeal
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}

export { MealList }; // Экспортируем компонент MealList для использования в других частях приложения
