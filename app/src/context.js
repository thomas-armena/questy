import React, {useReducer} from 'react';


export const testQuests = {
    1: {
        id: 1,
        name: "School",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        dueDate: null,
        link: null,
        subquests: [2, 3, 4],
        done: false,
    },
    2: {
        id: 2,
        name: "4AA4 - Real Time Systems",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        dueDate: null,
        link: null,
        subquests: [5, 6, 7, 8],
        done: false,
    },
    3: {
        id: 3,
        name: "4E03 - Performance Analysis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        dueDate: null,
        link: null,
        subquests: [9, 10, 11, 12],
        done: true,
    },
    4: {
        id: 4,
        name: "4HC3 - User Interfaces",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [21, 22, 23, 24],
        done: false,
    },
    5: {
        id: 5,
        name: "Assignment 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: true,
    },
    6: {
        id: 6,
        name: "Assignment 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: true,
    },
    7: {
        id: 7,
        name: "Assignment 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: true,
    },
    8: {
        id: 8,
        name: "Assignment 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: true,
    },
    9: {
        id: 9,
        name: "Assignment 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: true,
    },
    10: {
        id: 10,
        name: "Assignment 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    11: {
        id: 11,
        name: "Assignment 3",
        description: null,
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    12: {
        id: 12,
        name: "Assignment 4",
        description: null,
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    21: {
        id: 21,
        name: "Assignment 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: true,
    },
    22: {
        id: 22,
        name: "Assignment 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    23: {
        id: 23,
        name: "Assignment 3",
        description: null,
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    24: {
        id: 24,
        name: "Assignment 4",
        description: null,
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },

    // Subscription Quests

    13: {
        id: 13,
        name: "3Y03 - Probability and Statistics",
        description: null,
        dueDate: null,
        link: null,
        subquests: [14, 15, 16],
        done: false,
    },
    14: {
        id: 14,
        name: "Assignment 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    15: {
        id: 15,
        name: "Assignment 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    16: {
        id: 16,
        name: "Assignment 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },

    17: {
        id: 17,
        name: "4G06 - Capstone",
        description: null,
        dueDate: null,
        link: null,
        subquests: [18, 19, 20],
        done: false,
    },
    18: {
        id: 18,
        name: "Assignment 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    19: {
        id: 19,
        name: "Assignment 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },
    20: {
        id: 20,
        name: "Assignment 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        dueDate: null,
        link: null,
        subquests: [],
        done: false,
    },

}

const testSubscriptionQuests = [13, 17];

const initialState = {
    quests: testQuests,
    subscriptionQuests: testSubscriptionQuests,
    nextID: 25,
}

export const AppContext = React.createContext(initialState);

export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer((state, action) => {
        let stateCopy;
        let questsCopy;
        let questCopy;
        let subquestCopy;
        switch (action.type) {
            case 'toggle_quest':
                stateCopy = {...state};
                questsCopy = {...stateCopy.quests};
                questCopy = {...questsCopy[action.id]};
                questCopy.done = !questCopy.done;
                questsCopy[action.id] = questCopy;
                stateCopy.quests = questsCopy;
                return stateCopy;
            case 'accept_quest':
                stateCopy = {...state};
                questsCopy = {...stateCopy.quests};
                questCopy = {...questsCopy[1]};
                subquestCopy = [...questCopy.subquests];
                subquestCopy.push(action.id);
                questCopy.subquests = subquestCopy;
                questsCopy[1] = questCopy;
                stateCopy.quests = questsCopy;
                return stateCopy;
            case 'add_quest':
                stateCopy = {...state};
                stateCopy.nextID += 1;

                questsCopy = {...stateCopy.quests};
                questsCopy[stateCopy.nextID] = action.quest;
                questsCopy[stateCopy.nextID].id = stateCopy.nextID;


                questCopy = {...questsCopy[action.index]};
                subquestCopy = [...questCopy.subquests];
                subquestCopy.push(stateCopy.nextID);
                questCopy.subquests = subquestCopy;
                questsCopy[action.index] = questCopy;
                stateCopy.quests = questsCopy;
                return stateCopy;

            default:
                return state;
        }
    }, initialState);

    return <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>;

}

