import React from 'react';
import ReactDOM from 'react-dom';
import {
    Timeline,
    Share,
    Follow,
    Hashtag,
    Mention,
    Tweet
} from 'react-twitter-widgets';

export default (containerId, context) => {
    let component;
    switch (context.type) {
        case 'Timeline':
            component = <Timeline {...context.options} />;
            break;
        case 'Share':
            component = <Share {...context.options} />;
            break;
        case 'Follow':
            component = <Follow {...context.options} />;
            break;
        case 'Hashtag':
            component = <Hashtag {...context.options} />;
            break;
        case 'Mention':
            component = <Mention {...context.options} />;
            break;
        case 'Tweet':
            component = <Tweet {...context.options} />;
            break;
        default:
            throw new Error(`Type "${context.type}" not supported`);
    }
    ReactDOM.render(component, document.getElementById(containerId));
}
