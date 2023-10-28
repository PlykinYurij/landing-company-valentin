import classes from "./Button.module.scss";

interface IButton {
    title: string,
    onClick: () => void
}

const Button = ({title, onClick}: IButton) => {
    return (
        <div onClick={onClick} className={classes.button}>
            <span>{title}</span>
        </div>
    );
};

export default Button;