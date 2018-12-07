import app from './app';

app('app', {
    type: 'Timeline',
    options: {
        dataSource: {
            sourceType: 'profile',
            screenName: 'internetofshit'
        },
        options: {
            username: 'internetofshit',
            height: '400'
        }
    }
});
