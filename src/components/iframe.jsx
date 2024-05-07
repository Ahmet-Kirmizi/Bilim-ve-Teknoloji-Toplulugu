import React from "react";
import PropTypes from "prop-types";
import styles from "../style.js";

const YoutubeEmbed = ({ embedId, title }) => (
    <div className="video-responsive">
        <div>
            <h6 className={`${styles.headingVideos} ${styles.paddingVideos} pl-4 pr-4`}>{title}</h6>
        </div>
        <iframe
            className="w-full aspect-video pl-4 pr-4"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;