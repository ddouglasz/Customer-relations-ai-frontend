import React, { FC } from 'react';
import { IntentsTypes } from '../../data/types'
import styled from 'styled-components'
import {Button} from '../Buttons/button'
import { notify } from "../../actions/toastActions"


const StyledIntentWrapper = styled.div`
    background-color: #13274F;
    margin: 20px;
    padding: 20px;
    width: 300px;
    min-height: 300px;
    position: relative;

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

interface IntentProps {
    intentsData: IntentsTypes
    onClickIntentDetails: (intent: IntentsTypes) => void
}


export const Intent: FC<IntentProps> = ({ intentsData, onClickIntentDetails, children }) => {
  
    //Simulate successful notification for adding integrating an intent to a user's chat
    const addFlashMessage = () => {
        notify(`${intentsData.name} intent added successfully`, 'success');
    }

    return (
        intentsData ? (
            <StyledIntentWrapper className="intent-cover" >
            <div>{children}</div>
            <div>
                <Button classes='demo-btn btn' onclick={() => onClickIntentDetails(intentsData)} title='Demo' />
                <Button classes='integrate-btn btn' onclick={addFlashMessage} title='Integrate' />
            </div>
        </StyledIntentWrapper>) : null
    );
};
