import React from "react";

import "./Card.css"

/**
 * Component to render a single comment
 *
 * Proptypes
 * @param {string} _id of comment
 * @param {string} creator_name
 * @param {string} content of the comment
 */
const SingleComment = ({_id, creator_name, content}) => {
  return (
    <div className="Card-commentBody">
      <span className="u-bold">{creator_name}</span>
      <span>{" | " + content}</span>
    </div>
  );
};

export default SingleComment;
