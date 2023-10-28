import classes from "./Header.module.scss";
import logo from "../../assets/images/label.png"
const Header = () => {
    return (
        <div className={classes.containerHeader}>
            <div className={classes.containerLogo}>
                <img className={classes.img} src={logo}/>
            </div>
            <div className={classes.companyName}>
                НАИМЕНОВАНИЕ ФИРМЫ
            </div>
        </div>
    );
};

export default Header;