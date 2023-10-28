import classes from "./Footer.module.scss";
import Link from "../UI/Link/Link.tsx";
import doc from "../../assets/docs/docs.pdf"
import data from "../../assets/docs/docs.pdf"
import document from "../../assets/docs/docs.pdf"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVk} from "@fortawesome/free-brands-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    function openDocument() {
        window.open(document, '_blank')
    }
    function openDocs() {
        window.open(doc, '_blank')
    }
    function openData() {
        window.open(data, '_blank')
    }
    function clickVk() {
        window.open('https://vk.com/', '_blank')
    }
    function clickTelegram() {
        window.open('https://t.me/telegram', '_blank')
    }
    return (
        <div className={classes.containerFooter}>
            <div className={classes.containerDocuments}>
                <div className={classes.containerLink}>
                    <Link
                        title={'Договор конфиденциальности'}
                        onClick={openDocs}
                    />
                </div>
                <div className={classes.containerLink}>
                    <Link
                        title={'Персональные данные'}
                        onClick={openData}
                    />
                </div>
                <div className={classes.containerLink}>
                    <Link
                        title={'Документы о фирме'}
                        onClick={openDocument}
                    />
                </div>
            </div>
            <div className={classes.containerAboutCompany}>
                <div className={classes.item}>
                    ООО "НАИМЕНОВАНИЕ ФИРМЫ"
                </div>
                <div className={classes.item}>
                    ИНН: 1234567888
                </div>
                <div className={classes.item}>
                    ОГРН: 09876543212
                </div>
            </div>
            <div className={classes.containerContacts}>
                <div>
                     По вопросам сотрудничества:
                </div>
                <div>
                    info@mail.ru
                </div>
                <div>
                    +7 (999) 999-99-99
                </div>
                <div className={classes.containerIcons}>
                    <div
                        className={classes.containerIcon}
                        onClick={clickVk}
                    >
                        <FontAwesomeIcon
                            icon={faVk}
                            style={{color: "#005eff"}}
                            size={"2xl"}
                        />
                    </div>
                    <div
                        className={classes.containerIcon}
                        onClick={clickTelegram}
                    >
                        <FontAwesomeIcon
                            icon={faTelegram}
                            style={{color: "#005eff"}}
                            size={"2xl"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;