import classes from "./AboutPersona.module.scss";
interface IAboutPersona {
    avatar: string,
    title: string,
    description: string,
}
const AboutPersona = ({avatar, title, description}:IAboutPersona) => {
    return (
        <div className={classes.containerCard}>
            <div className={classes.containerAvatar}>
                <div className={classes.containerImg}>
                    <img className={classes.img} src={avatar} alt={avatar}/>
                </div>
            </div>
            <div className={classes.containerContent}>
                <div className={classes.title}>
                    {title}
                </div>
                <div className={classes.description}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default AboutPersona;