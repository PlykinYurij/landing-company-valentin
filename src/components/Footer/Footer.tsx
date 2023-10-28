import classes from "./Footer.module.scss";
import Link from "../UI/Link/Link.tsx";

const Footer = () => {
    function openDocument() {
        window.open('/docs/document.pdf', '_blank')
    }
    function openDocs() {
        window.open('/docs/docs.pdf', '_blank')
    }
    function openData() {
        window.open('/docs/data.pdf', '_blank')
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
            </div>
        </div>
    );
};

export default Footer;