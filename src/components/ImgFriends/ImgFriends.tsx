import classes from "./ImgFriends.module.scss";
import friends from '../../assets/images/frends.jpg';
const ImgFriends = () => {
    return (
        <div className={classes.containerImgFriends}>
            <img className={classes.img} src={friends} alt={friends}/>
        </div>
    );
};

export default ImgFriends;