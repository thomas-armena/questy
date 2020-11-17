import React, {useContext} from 'react';
import {AppContext} from './context';

const QuestBoard = () => {
  const {state, dispatch} = useContext(AppContext);


  const acceptQuest = questID => {
    console.log('adfsd', questID);
    dispatch({
      type: 'accept_quest',
      id: questID,
    })
  }

  const isAccepted = questID => {
    return state.quests[1].subquests.includes(questID);
  }

  const renderQuest = questID => {

    return (
      <div className="quest">
        <div classname="name">
          {state.quests[questID].name}
        </div>
        {renderAcceptButton(questID)}
      </div>
    );
  }

  const renderAcceptButton = questID => {
    if (isAccepted(questID)) {
      return (
        <div className="accept-button accepted">
          Cancel
        </div>
      );
    }

    return (
      <div className="accept-button" onClick={() => acceptQuest(questID)}>
        Accept
      </div>
    );
  }

  return (
    <div className="search">
      <h2> Quest Board </h2>
      {state.subscriptionQuests.map(renderQuest)}
    </div>
  );
}

export default QuestBoard;
