import React from 'react';
import { CreatorModalStyling } from './styled/CreatorModalStyles.jsx';

const CreatorModal = (props) => {
  const { creator } = props;
  return (
    <CreatorModalStyling>
      <div className="CreatorModalComponentDiv">
        hey look i'm the creator info
      </div>
    </CreatorModalStyling>
  );
};

export default CreatorModal;