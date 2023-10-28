import ReactPlayer from "react-player";

interface IVideo {
    url: string
}
const Video = ({url}:IVideo) => {
    return (
        <ReactPlayer
            width={'300px'}
            height={'700px'}
            controls
            url={url}
        />
    );
};

export default Video;