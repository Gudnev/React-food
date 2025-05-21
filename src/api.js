import { API_URL } from './config'; // Импортируем базовый URL API из файла конфигурации './config'

// Функция для получения информации о блюде по его идентификатору
const getMealById = async (mealId) => {
    // Отправляем асинхронный GET-запрос к API для получения данных о блюде
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    // Преобразуем ответ в формате JSON и возвращаем его
    return await response.json();
};

// Функция для получения списка всех категорий
const getAllCategories = async () => {
    // Отправляем асинхронный GET-запрос к API для получения списка категорий
    const response = await fetch(API_URL + 'categories.php');
    // Преобразуем ответ в формате JSON и возвращаем его
    return await response.json();
};

// Функция для получения отфильтрованного списка блюд по названию категории
const getFilteredCategory = async (catName) => {
    // Отправляем асинхронный GET-запрос к API для получения данных о блюдах в указанной категории
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    // Преобразуем ответ в формате JSON и возвращаем его
    return await response.json();
};

// Экспортируем функции для использования в других частях приложения
export { getMealById, getAllCategories, getFilteredCategory };
