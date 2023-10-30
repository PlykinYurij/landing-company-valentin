import './App.scss'
import ImgFriends from "./components/ImgFriends/ImgFriends.tsx";
import AboutPersona from "./components/AboutPersona/AboutPersona.tsx";
import avatar from './assets/images/avatar.png'
import VideosContent from "./components/VideosContent/VideosContent.tsx";
import Button from "./components/UI/Button/Button.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";

function App() {


    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <div className={'container-img-friends'}>
                    <ImgFriends/>
                </div>
                <div className='container-about-persons'>
                    <AboutPersona
                        avatar={avatar}
                        title={'Тюрин Дмитрий'}
                        description={'Начал заниматься Wildberries в 2020 году, за 3 года я и моя команда, создала более 500 успешных магазинов под ключ. Мы открыли свое личное производство по пошиву одежды в Москве. Всех нас объединяет только одно, желание заработать и разбогатеть! ВПЕРЕД 👏'}
                    />
                    <AboutPersona
                        avatar={avatar}
                        title={'Карташев Валентин'}
                        description={'На рынке с 2019 года, владелец пунктов выдачи вайлдберрис, владелец склада хранения и упаковки товара, огромный опыт по созданию и ведению магазинов. Общий оборот от личных магазинов в августе 2023 достиг 50 млн. рублей в месяц'}
                    />
                    <AboutPersona
                        avatar={avatar}
                        title={'Абросимов Роман'}
                        description={'На рынке с 2020 года, более 100 успешных кейсов по созданию магазинов. 3 больших склада по упаковке товара площадью 1000м² с оборотом более 5,5 млн. рублей'}
                    />
                </div>
                <VideosContent/>
                <div className={'container-buttons'}>
                    <div className={'container-button'}>
                        <Button
                            title={'Оплата 1'}
                            onClick={() => {
                            }}
                        />
                    </div>
                    <div className={'container-button'}>
                        <Button
                            title={'Оплата 2'}
                            onClick={() => {
                            }}
                        />
                    </div>
                    <div className={'container-button'}>
                        <Button
                            title={'Оплата 3'}
                            onClick={() => {
                            }}
                        />
                    </div>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default App
