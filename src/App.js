import React from 'react'; // Импортируем React из библиотеки 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Импортируем компоненты Router, Route и Switch из библиотеки 'react-router-dom'
import { Header } from './components/Header'; // Импортируем компонент Header из файла './components/Header'
import { Footer } from './components/Footer'; // Импортируем компонент Footer из файла './components/Footer'

import { Home } from './pages/Home'; // Импортируем компонент Home из файла './pages/Home'
import { About } from './pages/About'; // Импортируем компонент About из файла './pages/About'
import { Contact } from './pages/Contact'; // Импортируем компонент Contact из файла './pages/Contact'
import { Category } from './pages/Category'; // Импортируем компонент Category из файла './pages/Category'
import { NotFound } from './pages/NotFound'; // Импортируем компонент NotFound из файла './pages/NotFound'
import { Recipe } from './pages/Recipe'; // Импортируем компонент Recipe из файла './pages/Recipe'

function App() {
    return (
        <>
            {/* Оборачиваем наше приложение в компонент Router для работы с маршрутизацией */}
            <Router basename='/react-food'>
                {/* Компонент Header отображается на всех страницах */}
                <Header />
                {/* Основной контент приложения */}
                <main className='container content'>
                    {/* Компонент Switch выбирает первый Route, который соответствует текущему URL */}
                    <Switch>
                        {/* Route для главной страницы */}
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        {/* Route для страницы "About" */}
                        <Route path='/about' component={About} />
                        {/* Route для страницы "Contact" */}
                        <Route path='/contacts' component={Contact} />
                        {/* Route для страницы категории, с параметром "name" */}
                        <Route path='/category/:name' component={Category} />
                        {/* Route для страницы рецепта, с параметром "id" */}
                        <Route path='/meal/:id' component={Recipe} />
                        {/* Route для страницы "NotFound", которая отображается при отсутствии соответствия URL */}
                        <Route component={NotFound} />
                    </Switch>
                </main>
                {/* Компонент Footer отображается на всех страницах */}
                <Footer />
            </Router>
        </>
    );
}

export default App; // Экспортируем компонент App для использования в других частях приложения
