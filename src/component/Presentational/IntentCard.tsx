import React, { FC } from 'react';
import { IntentsTypes } from '../../data/types'
import styled from 'styled-components'
import { Button } from '../Buttons/button'
import { ChatCard } from '../Presentational/ChatCard'
import { toast } from "react-toastify"


const StyledIntentWrapper = styled.div`
    background-color: #13274F;
    margin: 20px;
    padding: 20px;
    width: 50%;
    min-height: 300px;

    .chat-container {
        max-height: 40vh;
        overflow-y: scroll;
        position: relative; 
    }
    


    .btn {
        border-radius: 4px;
    }

    .btn:focus{
        outline: none;
    }

    .integrate-btn {
        position: absolute;
        bottom: 15px;
        background-color: #29AB87;
        color: #ffff;
    }
    
    .demo-btn {
        position: absolute;
        bottom: 15px;
        left: 76%;
        background-color: #00308F;
        color: #ffff;
    }
`;

const notify = (message: string) => {
    return toast.success(message, {
        position: "top-right",
    })
}

// interface IntentProps {
//     intentsData: IntentsTypes
//     onClickIntentDetails: (intent: IntentsTypes) => void
// }


export const IntentCard = (intentsData: any, onClickIntentDetails: (intent: IntentsTypes) => void) => {

    //Simulate successful notification for adding integrating an intent to a user's chat
    const addFlashMessage = () => {
        notify('Intent integrated successfully');
    }

    { console.log(intentsData.intentsData[0]) }
    // {    intentsData.map((intenD: any)  => console.log(intenD))}
    return (
        <StyledIntentWrapper className="intent-cover" data-testid="intent-container">
            <div className="chat-container">
            {intentsData ? intentsData.intentsData.map((intent: any) => (
                    <><div className="intent-name-cover"><span className="intent-name">Intent name: </span>{intent.name}</div>
                    <div className="intent-description">[ {intent.description} ]</div>
            
                <ChatCard isBotResponse={true} text={intent.trainingData.expressions[0].text} />
                <ChatCard isBotResponse={false} text={intent.reply.text} /></>
            )) : null}
            <div>
            </div>
                {/* <Button classes='demo-btn btn' onclick={() => onClickIntentDetails(intent.intent)} title='Demo' /> */}
                <Button classes='integrate-btn btn' onclick={addFlashMessage} title='Integrate' />
            </div>
        </StyledIntentWrapper>
        // <div>hi</div>
    )
};
