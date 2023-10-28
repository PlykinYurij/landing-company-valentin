import classes from "./VideosContent.module.scss";
import video from '../../assets/video/video.mp4'
import Video from "../UI/Video/Video.tsx";
const VideosContent = () => {
    return (
        <div className={classes.containerVideos}>
            <Video url={video} />
            <Video url={video} />
            <Video url={video} />
        </div>
    );
};

export default VideosContent;