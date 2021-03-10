import React, { FC } from 'react';
import { IntentsTypes } from '../../data/types'
import styled from 'styled-components'
import { Button } from '../Buttons/button'
import { ChatCard } from '../ChatCard/ChatCard'
import { toast } from "react-toastify"


const StyledIntentWrapper = styled.div`
    background-color: #13274F;
    margin: 20px;
    padding: 20px;
    width: 50%;
    min-height: 300px;
    position: relative;

    .chat-container {
        max-height: 30vh;
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
        margin-top: 20px
    }
    
    .demo-btn {
        position: absolute;
        bottom: 15px;
        left: 76%;
        background-color: #00308F;
        color: #ffff;
        margin-top: 20px
    }

    .intent-set {
        height: 40vh;
    }
`;

const notify = (message: string) => {
    return toast.success(message, {
        position: "top-right",
    })
}

interface IntentProps {
    intentsData: IntentsTypes[]
    onClickIntentDetails: () => void
}


export const IntentCard: FC<IntentProps> = ({intentsData, onClickIntentDetails}) => {

    //Simulate successful notification for adding integrating an intent to a user's chat
    const addFlashMessage = () => {
        notify('Intent integrated successfully');
    }

    return (
        <StyledIntentWrapper className="intent-cover" data-testid="intent-container">
            <div className="chat-container">
            {intentsData ? intentsData.map((intent: IntentsTypes) => (
                <div id={`${intent.name}`} className="intent-set" key={intent.id}>
                    <div className="intent-name-cover">
                        <span className="intent-name">Intent name: </span>{intent.name}
                    </div>
                    <div className="intent-description">[{intent.description} ]</div>

                    <ChatCard isBotResponse={true} text={intent.trainingData.expressions[0].text} />
                    <ChatCard isBotResponse={false} text={intent.reply.text} />
                </div>
            )) : null}
            <div>
            </div>
            </div>
                <Button classes='demo-btn btn' onclick={onClickIntentDetails} title='Demo' />
                <Button classes='integrate-btn btn' onclick={addFlashMessage} title='Integrate' />
        </StyledIntentWrapper>
    )
};
