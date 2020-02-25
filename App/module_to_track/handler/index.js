import handleFirebase from './handlerFirebase';
import handlerGoogleAnalytic from './handlerGoogleAnalytic';

const conf = {
    firebase: handleFirebase,
    "google-analytic": handlerGoogleAnalytic,
};

export default conf;

export function send (event, payload, whitelist) {
    Object.keys(conf).map(name => {
        if(whitelist && whitelist[name]) conf[name](event, payload);
        if(!whitelist) conf[name](event, payload);
    });
}
