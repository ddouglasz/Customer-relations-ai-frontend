import React, { useEffect, useState } from 'react'
import { IntentCard } from '../IntentCard/IntentCard'
import { Modal } from '../Modal/Modal'
import { ChatCard } from '../ChatCard/ChatCard'
import { Button } from '../Buttons/button'
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
        background: #002244;
        border-radius: 4px;
        padding: 4px;
        font-size: 16px;
        font-weight: 700;
        margin: 5px;
        color: #ffff;
    }

    .intent-nav-item:hover {
        background: #20639B;
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

    .intent-nav-link{
        text-decoration: none; 
    } 
`;

const StyledForm = styled.form`
    .input-field{
        position: absolute;
        bottom: 46px;
        width: 82%;
        height: 40px;
        padding: 0 10px;
        border-radius: 4px 0 0 4px;
        border: none; 
    }

    .send-btn {
        bottom: 46px;
        padding: 0 10px;
        position: absolute;
        height: 40px;
        right: 10px;
        border-radius: 0 4px 4px 0;
        color: #ffff;
        background: #20639B;
    }

    .send-btn:hover {
        background: #7CB9E8;
    }

    .input{
        outline: none;
    }
`;

interface messagePairType {
    message: string
    botReply: string
}

const StyledLoader = styled.div`
    text-align: center;
    color: #ffff;
`;

export const Landing = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('')
    const [botReply, setBotReply] = useState<string>('')
    const [messagePair, setMessagePair] = useState<messagePairType[] | any>([])

    // Since we are not persisting the data, 
    // we want to clear the initial chats before opening the Modal again
    const onclose = () => {
        setBotReply('')
        setShowModal(false)
    }

    const updateResponse = () => {
        const messageListLength = messagePair.length
        if (messageListLength === 0) return
        const response = sendBotReply(messagePair[messageListLength - 1].message)
        const messagePairCopy = [ ...messagePair ]
        messagePairCopy[messageListLength  - 1 ].response = response
        setTimeout(() => {
            setMessagePair(messagePairCopy)
        }, 1000);
    }


    let lastMessage = ''
    if (messagePair.length != 0) { 
        lastMessage = messagePair[messagePair.length - 1].message
    }
        
    const memoizedCallback = React.useCallback(
        () => {
            updateResponse();
        },
        [lastMessage],
    )

    useEffect(() => {
        updateResponse()
    }, [memoizedCallback])



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
        let res
        intents.forEach((intent) => {
            intent.trainingData.expressions.forEach(expression => {
                if (formatToLower(expression.text).includes(formatToLower(message))) {
                    res = intent.reply.text
                }
            });
        })
        return res
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const messagePairCopy = [ ...messagePair ]
        messagePairCopy.push({
            message,
        })
        setMessagePair(messagePairCopy)
        setMessage('') //Clear the text field
    }

    return (
        <>
            <StyledLanding>
                <div className="intent-nav-cover">
                    <div className="intents-heading"> Intents </div>
                    <ul className="list-card">
                        {intents.map(intent => (
                            <a href={`#${intent.name}`} className="intent-nav-link" key={intent.id}>
                                <li className="intent-nav-item">{intent.name}</li>
                            </a>
                        ))}
                    </ul>
                </div>
                <div className="intents-cards">
                    <IntentCard
                        intentsData={intents}
                        onClickIntentDetails={() => setShowModal(true)}
                    />
                </div>
            </StyledLanding>


            <Modal title='Try out some intents' onClose={onclose} open={showModal} >
               { messagePair.map((pair: any) => (
                    <div className="chat-cover">
                    <ChatCard isBotResponse={false} text={pair.message} />
                    { pair.response && <ChatCard isBotResponse={true} text={pair.response} />}
                    </div>
                ))}

                <StyledForm onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="Chat"
                        className="input-field input"
                        placeholder="Ask us a question..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button title="Send" onclick={() => handleSubmit} classes='send-btn input' />
                </StyledForm>
            </Modal>
        </>
    );
}

export default Landing;
