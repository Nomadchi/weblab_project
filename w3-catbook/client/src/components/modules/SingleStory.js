import React from "react";

import "./Card.css"

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const SingleStory = ({_id, creator_name, content}) => {
  return (
    <div className="Card-story">
      <span className="Card-storyUser">{creator_name}</span>
      <p className="Card-storyContent">{content}</p>
    </div>
  );
};

export default SingleStory;
