import React, { useState } from 'react'
import { Intent } from './Intent'
import { Modal } from './Modal'
import { ChatCard } from './ChatCard'
import { IntentsTypes } from '../data/types'
// import {Button} from './Buttons/button'
import intents from '../data/intents.json'
import styled from 'styled-components'

interface ChatsTypes {
    message: string
    bot: boolean
}

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
    const [isCustomer, setIsCustomer] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('')
    const [botReply, setBotReply] = useState<string>('')
    const [text, setText] = useState<ChatsTypes[] | null>(null)
    const [intentProperties, setIntentProperties] = useState<null | IntentsTypes>(null);


    const getIntentsDetails = (intent: IntentsTypes) => {
        setIntentProperties(intent)
        setShowModal(true)
    }

    // since we are not persisting the data, 
    // we want to clear the initial chats before opening the Modal again
    const onclose = () => {
        setText(null)
        setBotReply('')
        setShowModal(false)
    }

    // Make sure data is available for when the component is mounting 
    // or at least tell the user something in the interim
    if (!intents) return (<div className=""> loading... </div>)

    //To avoid user from being conditioned to case-sensitive inputs,
    //format string to lower for comparison.
    const formatToLower = (str: string) => {
        return str.toLowerCase().trim()
    }

    // search intent for user question.
    const sendBotReply = (message: string) => {
        intentProperties && intentProperties.trainingData.expressions.map((intentProperty) => {
            if (formatToLower(intentProperty.text).includes(formatToLower(message))) {
            setBotReply(intentProperties.reply.text)
            }
        })
    }

    //track chats locally before storing in state
    const chats: ChatsTypes[] = [];

    const sendTextMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsCustomer(true)
        chats.push({ message: message, bot: isCustomer })
        setMessage('') //clear the text field
        setText(chats)

       setTimeout(() => sendBotReply(message), 1000) //delay to simulate response
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
                                <ChatCard isBotResponse={isCustomer} text={intent.reply.text} />
                            </Intent>
                        ))}
                    </div>
                </div>
            </StyledLanding>

            {intentProperties ?
                <Modal title={intentProperties.description} onClose={onclose} open={showModal}>
                    {(text && text.map((chat, i) => (
                        <ChatCard isBotResponse={false} text={chat.message} key={i} />
                    )))}
                    {botReply !== '' && <ChatCard isBotResponse={true} text={botReply} />}
                    <form onSubmit={(e) => sendTextMessage(e)}>
                        <StyledChatBox>
                            <input
                                type="text"
                                className="chatbox-field"
                                name="Chat"
                                placeholder="Ask us a question..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </StyledChatBox>
                    </form>
                </Modal> : null}
        </>
    );
}

export default Landing;
