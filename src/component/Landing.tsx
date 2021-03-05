import React, { useState } from 'react';
import '../styles/landing.css';
import { Intent } from './Intent'
import { Modal } from './Modal'
import { IntentsTypes } from '../data/types'
import intents from '../data/intents.json'

export const Landing = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
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

    return (
        <>
        <div className="">
            <div>
                {intents.map((intent) => (
                <Intent intentsData={intent} onclick={getIntentsDetails} key={intent.id} >
                    <div>{intent.id}</div>
                </Intent>
                ))}
            </div>
        </div>

        {intentProperties ? 
        <Modal title={intentProperties.name} onClose={onclose} open={showModal}>
            <div>{intentProperties.description}</div>
        </Modal> : null}
        </>
    );
}

export default Landing;
