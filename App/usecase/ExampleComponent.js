import React, { Component } from 'react';
import Wrapper from '../component_wrapper';

class ButtonToTrack extends Component () {
    render() {
        return (
            <Button onClick={() => console.log('test')} >track me</Button>
        );
    }
}

class ExampleComponent extends Component {
    render() {
        const params = {
            action: "stream"
        }
        return (
            <Wrapper 
                event="calender_action_type" 
                {...params} 
            >
                <ButtonToTrack />
            </Wrapper>
        );
    }
}
/**
 
    1. emit config
    2. format emit event config
    3. event list config
 
 */