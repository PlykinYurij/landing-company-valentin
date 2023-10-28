import './App.css'
import ImgFriends from "./components/ImgFriends/ImgFriends.tsx";
import AboutPersona from "./components/AboutPersona/AboutPersona.tsx";
import avatar from './assets/images/avatar.png'
import VideosContent from "./components/VideosContent/VideosContent.tsx";
import Button from "./components/UI/Button/Button.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {


    return (
        <>
            <main>
                <ImgFriends/>
                <div className='container-about-persons'>
                    <AboutPersona
                        avatar={avatar}
                        title={'Иванов Иван Иванович'}
                        description={'с 2014 на этом рынке,\n' +
                            'вывел на маркетплейсы 7000 селлеров с NPS 97%,\n' +
                            'свой оборот >45 млн/мес'}
                    />
                    <AboutPersona
                        avatar={avatar}
                        title={'Петров Петр Петрович'}
                        description={'с 2015 на этом рынке,\n' +
                            'вывел на маркетплейсы 7000 селлеров с NPS 97%,\n' +
                            'свой оборот >45 млн/мес'}
                    />
                    <AboutPersona
                        avatar={avatar}
                        title={'Васильев Василий Васильевич'}
                        description={'с 2016 на этом рынке,\n' +
                            'вывел на маркетплейсы 7000 селлеров с NPS 97%,\n' +
                            'свой оборот >45 млн/мес'}
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
