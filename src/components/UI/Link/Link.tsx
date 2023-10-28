import classes from "./Link.module.scss";
interface ILink {
    title: string,
    onClick: () => void
}
const Link = ({title, onClick}: ILink) => {
    return (
        <div onClick={onClick} className={classes.link}>
            <span>{title}</span>
        </div>
    );
};

export default Link;