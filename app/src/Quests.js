import React, { useState, useContext } from 'react';
import { AppContext } from './context';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Quests = () => {

    const [selections, setSelections] = useState([]);

    const { state, dispatch } = useContext(AppContext);
    const { quests } = state;

    let currentQuestLists = [quests[1]];
    let currentQuest = quests[1];

    for (let i = 0; i < selections.length; i++) {
        currentQuest = quests[currentQuest.subquests[selections[i]]];
        currentQuestLists.push(currentQuest);
    }

    const renderQuestList = (quest, listIndex) => {
        const isLeaf = (!(quest.subquests && quest.subquests.length > 0));
        return (
            <div className="questlist" key={listIndex}>
                <div className="questlist-title">
                    {quest.name}
                    <div style={{ width: '15px' }} />
                </div>
                <div className="questlist-marker-row">
                    <div className="line" />
                    <div style={{ width: '30px', height: '30px' }}>
                        {renderQuestMarker(quest)}
                    </div>
                    <div className="line" />
                </div>
                <div className="questlist-description">
                    {quest.description}
                </div>
                <hr />
                {
                    quest.subquests.map((subquestID, ind) => renderQuest(quests[subquestID], ind, listIndex))
                }
                <div style={{ height: '20px' }} />
                { isLeaf && renderCompleteButton(quest)}
                { isLeaf && <div style={{ height: '20px' }} />}
                { renderAddSubquestField(quest, listIndex)}
            </div>
        );
    }

    const renderCompleteButton = quest => {
        if (!quest.done) {
            return (
                <div className="questlist-complete" onClick={() => toggleQuest(quest)}> Mark as done </div>
            );
        }
        return (
            <div className="questlist-incomplete" onClick={() => toggleQuest(quest)}> Mark as not done </div>
        );

    }

    const renderQuest = (quest, index, listIndex) => {
        const isSelected = selections[listIndex] === index;
        return (
            <div className="quest" key={index} >
                <div className="quest-left">
                    {renderQuestMarker(quest)}
                    <div style={{ width: '10px' }} />
                    <div className="quest-name" onClick={() => handleQuestClick(index, listIndex)}>
                        {quest.name}
                    </div>
                </div>
                <div style={{ width: '15px' }} />
                { isSelected ? <img src="questarrow.svg" /> : <div style={{ width: '10px' }} />}
            </div>
        );
    }

    const renderQuestMarker = (quest) => {
        const isLeaf = (!(quest.subquests && quest.subquests.length > 0));
        if (isLeaf) {
            return (
                <div className={"quest-mark leaf"} onClick={() => toggleQuest(quest)}>
                    <CircularProgressbarWithChildren
                        maxValue={100}
                        value={quest.done ? 100 : 0}
                        styles={buildStyles({
                            textSize: '16px',
                            pathColor: '#9E8AFF',
                        })} strokeWidth={10} >
                        {quest.done && <img src="questylogo.svg" />}
                    </CircularProgressbarWithChildren>
                </div>
            );
        }

        return (
            <div className={"quest-mark"} onClick={() => toggleQuest(quest)}>
                <CircularProgressbar text={numQuestsDone(quest).toString() + "/" + quest.subquests.length} maxValue={quest.subquests.length}
                    value={numQuestsDone(quest)} styles={buildStyles({
                        textSize: '35px',
                        textColor: '#9E8AFF',
                        pathColor: '#9E8AFF',
                    })} strokeWidth={10} />
            </div>
        );
    }

    const renderAddSubquestField = (quest, listIndex) => {
        return (
            <div className="subquest-field">
                <div className="subquest-header">Add a subquest</div>
                <input className="subquest-textfield" type="text" onKeyDown={(e) => handleAddSubquestSubmit(e, quest)} placeholder="eg. Finish assignment, watch lecture">
                </input>
            </div>

        );
    }

    const handleAddSubquestSubmit = (event, quest) => {
        if (event.key !== 'Enter') return;
        dispatch({
            type: 'add_quest',
            quest: {
                id: -1,
                name: event.target.value,
                description: null,
                dueDate: null,
                link: null,
                subquests: [],
                done: false,
            },
            index: quest.id,
        });
        event.target.value = "";
    }

    const questIsDone = quest => {
        if (quest.subquests.length > 0) {
            for (let i = 0; i < quest.subquests.length; i++) {
                const subquestID = quest.subquests[i];
                if (!questIsDone(quests[subquestID])) return false;
            }
            return true;
        }
        return quest.done;
    }

    const numQuestsDone = quest => {
        let done = 0;
        for (let i = 0; i < quest.subquests.length; i++) {
            const subquestID = quest.subquests[i];
            if (questIsDone(quests[subquestID])) done += 1
        }
        return done;
    }

    const handleQuestClick = (questIndex, listIndex) => {
        const selectionsCopy = [...selections];
        selectionsCopy.splice(listIndex, selectionsCopy.length - listIndex + 1);
        selectionsCopy.push(questIndex);
        setSelections(selectionsCopy);
    }

    const toggleQuest = quest => {
        console.log('click')
        dispatch({
            type: 'toggle_quest',
            id: quest.id,
        });
    }


    return (
        <div>
            <div className="quests">
                {
                    currentQuestLists.map(renderQuestList)
                }
            </div>
        </div>
    );
}


export default Quests;
