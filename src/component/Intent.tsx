import React, { FC } from 'react';
import { IntentsTypes } from '../data/types' 
import '../styles/intent.css'

interface IntentProps {
    intentsData: IntentsTypes
    onclick: (intent: IntentsTypes) => void
}

export const Intent: FC<IntentProps> = ({ intentsData, onclick, children }) => {

    return (
        intentsData ? ( <div className="intent-cover" onClick={() => onclick(intentsData)} >
            <div>{intentsData && intentsData.name}</div>
            <div>{children}</div>
        </div>) : null
 );
};
