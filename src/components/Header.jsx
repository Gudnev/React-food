import React from 'react'; // Импортируем React из библиотеки 'react'
import { Link } from 'react-router-dom'; // Импортируем компонент Link из библиотеки 'react-router-dom'

function Header() {
    // Определяем функциональный компонент Header

    // Возвращаем JSX-разметку для рендеринга навигационной панели
    return (
        <nav className='pink accent-3'>
            {/* Элемент nav с классами 'green' и 'darken-1' для стилизации */}
            <div className='nav-wrapper'>
                {/* Элемент div с классом 'nav-wrapper' для обертки содержимого навигационной панели */}
                <Link to='/' className='brand-logo'>
                    {/* Компонент Link для навигации на главную страницу, с классом 'brand-logo' */}
                    React Food {/* Текст логотипа */}
                </Link>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    {/* Список ul с классами 'right' и 'hide-on-med-and-down' для выравнивания вправо и скрытия на мобильных устройствах */}
                    <li>
                        {/* Элемент списка li */}
                        <Link to={`/about`}>About</Link>
                        {/* Компонент Link для навигации на страницу "About" */}
                    </li>
                    <li>
                        {/* Элемент списка li */}
                        <Link to={`/contacts`}>Contacts</Link>
                        {/* Компонент Link для навигации на страницу "Contacts" */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header }; // Экспортируем компонент Header для использования в других частях приложения
