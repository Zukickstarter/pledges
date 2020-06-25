import React from 'react';

const Creator = (props) => {
  const { creator } = props;
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
      <div className="seeMoreLinkDiv">
        See More
      </div>
    </div>
  );
};

export default Creator;
