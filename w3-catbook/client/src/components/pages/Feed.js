import React, {useEffect, useState} from "react";
import { get } from "../../utilities";
import { NewStory } from "../modules/NewPostInput";
import Card from "../modules/Card";

const Feed = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    get("/api/stories").then((storyObjs) => {
      setStories(storyObjs);
    });
  }, []);

  const addNewStory = (storyObj) =>{
    setStories([storyObj, ...stories]);
  };

  let storiesList = null;
  if (stories.length !== 0){
    storiesList = stories.map(storyObj =>(
      <Card _id = {storyObj._id} creator_name = {storyObj.creator_name} content = {storyObj.content} />
    ))

  } else {
    storiesList = <div>No stories :(</div>
  }

  return (
    <div>
      <NewStory onSubmit={addNewStory}/>
      {storiesList}
    </div>
  );
  // TODO (step1): render the raw stories data from state
  // TODO (step2): render a SingleStory with hardcoded props
  // TODO (step3): map the state to SingleStory components
  // TODO (step4): add in the NewStory component
  // TODO (step6): use Card instead of SingleStory
};

export default Feed;
