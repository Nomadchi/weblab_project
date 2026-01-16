import React, { useEffect, useState } from "react";
import { get } from "../../utilities";
import SingleStory from "../modules/SingleStory"
import SingleComment from "../modules/SingleComment"
// TODO (step8): import NewComment
// TODO (step9): import CommentsBlock

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const Card = ({_id, creator_name, content}) => {

  const [comments, setComments] = useState([])
  
  useEffect(() => {
    get("/api/comment", {parent: _id}).then((commentObjs) => {
      setComments(commentObjs);
    });
  }, []);

  let commentsList = null;
  if (comments.length !== 0){
    commentsList = comments.map(commentObj => (
      <SingleComment _id={commentObj._id} creator_name={commentObj.creator_name} content={commentObj.content} />
    ))
  } else {
    commentsList = <div>No comments :(</div>
  }

  return (
    <div className="Card-container">
      <SingleStory _id={_id} creator_name={creator_name} content={content}/>
      <div className="Card-commentSection">
        {commentsList}
      </div>
    </div>

  )
  // TODO (step6): render a SingleStory using props,
  // and render the comments from state (with JSON.stringify)
  // from state using a map (refer to Feed)
  // TODO (step7): map comments from state into SingleComment
  // components (refer to Feed)
  // TODO (step8): add in the NewComment component (refer to Feed)
  // TODO (step9): use CommentsBlock
};

export default Card;
