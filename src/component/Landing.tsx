import React, { useState } from 'react'
import { Intent } from './Intent'
import { Modal } from './Modal'
import { ChatCard } from './ChatCard'
import { IntentsTypes } from '../data/types'
import {Button} from './Buttons/button'
import intents from '../data/intents.json'
import styled from 'styled-components'

const StyledLanding = styled.div`
    .intents-list-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .intent-name {
        font-weight: bold;
    }

    .intent-name-cover {
        margin: 10px 0;
    }

    .intent-description {
        font-size: 13px; 
    }
`;

const StyledChatBox = styled.div`
        .chatbox-field{
            position: absolute;
            bottom: 46px;
            width: 92%;
            height: 40px;
            padding: 0 10px;
            border-radius: 4px;
            border: none; 
        }
       
`;

export const Landing = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [messageType, SetMessageType] = useState(false);
    const [message, setMessage] = useState('')
    const [intentProperties, setIntentProperties] = useState<null | IntentsTypes>(null);

    const getIntentsDetails = (intent: IntentsTypes) => {
        setIntentProperties(intent)
        setShowModal(true)
    }

    const onclose = () => {
        setShowModal(false)
    }

    // Make sure data is available for when the component is mounting 
    // or at least tell the user something in the interim
    if (!intents) return (<div className=""> loading... </div>)

    const getQuestionType = () => {

    }

    const sendTextMessage = () => {
        // console.log(message)
    }


    return (
        <>
        <StyledLanding>
            <div>
            <div className="intents-list-cards">
                {intents.map((intent) => (
                <Intent intentsData={intent} onClickIntentDetails={getIntentsDetails} key={intent.id} >
                    <div className="intent-name-cover"><span className="intent-name">Intent name: </span>{intent.name}</div>
                    <div className="intent-description">[ {intent.description} ]</div>
                    <ChatCard isBotResponse={true} text={intent.trainingData.expressions[0].text} />
                    <ChatCard isBotResponse={messageType} text={intent.reply.text} />
                </Intent>
                ))}
            </div>
            </div>
        </StyledLanding>

        {intentProperties ? 
        <Modal title={intentProperties.name} onClose={onclose} open={showModal}>

            <ChatCard isBotResponse={true} text={intentProperties.trainingData.expressions[0].text} />
            <ChatCard isBotResponse={messageType} text={intentProperties.reply.text} />
            <form onSubmit={sendTextMessage}>
                <StyledChatBox>
                    <input
                    type="text"
                    className="chatbox-field"
                    name="Chat" 
                    placeholder="Type in your message"
                    value={''}
                    // onChange={(e) => handleChange(e.target.value)}
                    />    
                </StyledChatBox>
            
            </form>
        </Modal> : null}
        </>
    );
}

export default Landing;
