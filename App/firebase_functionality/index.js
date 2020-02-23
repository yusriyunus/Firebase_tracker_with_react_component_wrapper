import * as firebase from "firebase";

const firebase_init = config => {
  firebase.initializeApp(config);
};

const firebase_log_event = ({ eventName, eventParams } = {}) => {
  if (eventName && eventParams) {
    const firebase_analytics = firebase.analytics();
    return firebase_analytics.logEvent(eventName, eventParams);
  }

  const firebase_log_event_navigate = ({ event_key }) => {
    const eventName = "navigate";
    import(`../module_to_track/navigate/${module_name}`)
      .then(module => {
        const defaultEventParams = module.default[event_key];
        return firebase_log_event({
          eventName,
          eventParams: defaultEventParams
        });
      })
      .catch(err => console.error(err));
  };

  const firebase_log_event_action = ({ event_key }, module_name) => {
    const eventName = `${module_name}_action`;
    import(`../module_to_track/action/${module_name}`)
      .then(module => {
        const defaultEventParams = module.default[event_key];
        return firebase_log_event({
          eventName,
          eventParams: defaultEventParams
        });
      })
      .catch(err => console.error(err));
  };

  return {
    firebase_log_event_navigate,
    firebase_log_event_action
  };
};

export default firebase;

export { firebase_init, firebase_log_event };
