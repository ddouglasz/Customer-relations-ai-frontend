import React, { useState } from 'react'
import { IntentCard } from '../Presentational/IntentCard'
import { Modal } from '../Modal/Modal'
import { ChatCard } from '../Presentational/ChatCard'
import { IntentsTypes } from '../../data/types'
import intents from '../../data/intents.json'
import styled from 'styled-components'

const StyledLanding = styled.div`
display: flex;
    .intents-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 70%;
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

    .intent-nav-cover {
        width: 30%;
    }

    .intent-nav-item {
        list-style: none;
        background: #ffff;
        border-radius: 4px;
        padding: 4px;
        font-size: 16px;
        margin: 5px;
        color: #6699CC;
    }

    .intent-nav {
        
    }

    .list-card {
        
    }

    .intents-heading {
        font-size: 32px;
        margin-left: 43px;;
        font-weight: 700;
    }
`;

const StyledChatBox = styled.input`
        position: absolute;
        bottom: 46px;
        width: 92%;
        height: 40px;
        padding: 0 10px;
        border-radius: 4px;
        border: none; 
       
`;

const StyledLoader = styled.div`
    text-align: center;
    color: #ffff;
`;

export const Landing = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('')
    const [botReply, setBotReply] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [intentProperties, setIntentProperties] = useState<null | IntentsTypes>(null);
    const [disabled, setDisabled] = useState<boolean>(false)

    const getIntentsDetails = (intent: IntentsTypes) => {
        setIntentProperties(intent)
        setShowModal(true)
    }

    // Since we are not persisting the data, 
    // we want to clear the initial chats before opening the Modal again
    const onclose = () => {
        setText('')
        setBotReply('')
        setDisabled(false)
        setShowModal(false)
    }

    // Make sure data is available for when the component is mounting 
    // or at least tell the user something in the interim
    if (!intents || intents.length === 0) return (<StyledLoader className="loading"> Loading... </StyledLoader>)

    //To avoid user from being conditioned to case-sensitive inputs,
    //format string to lower for comparison.
    const formatToLower = (str: string) => {
        return str.toLowerCase().trim()
    }

    // Search intent for some key words from user question to simulate ai chatbot.
    const sendBotReply = (message: string) => {
        intents && intents.forEach((intent) => {
            intent.trainingData.expressions.forEach(expression => {
                if (formatToLower(expression.text).includes(formatToLower(message))) {
                    setBotReply(intent.reply.text)
                    setDisabled(true)
                }
            });
        })
    }


    const sendTextMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage('') //Clear the text field
        setText(message)
        setTimeout(() => sendBotReply(message), 1000) //Delay to simulate response
    }

    return (
        <>
            <StyledLanding>
                <div className="intent-nav-cover">
                    <div className="intents-heading"> Intents </div>
                    <ul className="list-card">
                        {intents.map(intent => (
                            <li className="intent-nav-item">{intent.description}</li>
                        ))}
                    </ul>
                </div>
                <div data-testid="intent-container" className="intents-cards">
                    <IntentCard intentsData={intents} onClickIntentDetails={getIntentsDetails} />
                </div>
            </StyledLanding>

            {intentProperties ?
                <Modal title={intentProperties.description} onClose={onclose} open={showModal}>
                    {text && <ChatCard isBotResponse={false} text={text} />}
                    {botReply && <ChatCard isBotResponse={true} text={botReply} />}
                    <form onSubmit={sendTextMessage}>
                        <StyledChatBox
                            type="text"
                            name="Chat"
                            placeholder="Ask us a question..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            disabled={disabled}
                        />
                    </form>
                </Modal> : null}
        </>
    );
}

export default Landing;
