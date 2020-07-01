import React from 'react';

const Creator = (props) => {
  const { creator, handleSeeMoreClick } = props;
  const lightGreenText = { color: "#007460" };
  return (
    <div className="CreatorComponentDiv">
      <div className="creatorImageURLDiv">
        <img className="creatorImage" src={creator.imageURL} />
      </div>
      <div className="creatorNameDiv">
        {creator.name}
      </div>
      <div className="totalBackersDiv">
        {creator.totalBackers}
      </div>
      <div className="creatorDescription">
        {creator.description}
      </div>
      <div
        className="seeMoreLinkDiv"
        onClick={() => {handleSeeMoreClick()}}
        // style={lightGreenText}
        >
        See more
      </div>
    </div>
  );
};

export default Creator;
