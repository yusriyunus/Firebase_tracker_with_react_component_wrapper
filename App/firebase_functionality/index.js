import * as firebase from "firebase";

const firebase_init = config => {
  firebase.initializeApp(config);
};

const updateDefaultParamsWithCustomParams = (defaultParams, customParams) => {
  const param_to_parse = Object.assign({}, defaultParams);
  Object.keys(customParams).forEach(param => {
    if (customParams[param]) {
      param_to_parse[param] = customParams[param];
    }
  });
  return param_to_parse;
};

const firebase_log_event = ({ eventName, eventParams } = {}) => {
  if (eventName && eventParams) {
    const firebase_analytics = firebase.analytics();
    // return firebase_analytics.logEvent(eventName, eventParams);
    console.log({eventName, eventParams});

  }

  const firebase_log_event_navigate = ({ custom_params }, event_key) => {
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

  const firebase_log_event_action_custom_params = {
    data: false,
    context: false,
    element: false,
    url: window.location.hash.substring(1)
  };
  const firebase_log_event_action = (
    module_name,
    event_key,
    { data, context, element, url } = firebase_log_event_action_custom_params
  ) => {
    const event_name = `${module_name}_action`;
    const module_path = `../module_to_track/action/${module_name}`;

    return import(module_path)
      .then(module => {
        const default_event_params = module.default[event_key];
        const event_params = updateDefaultParamsWithCustomParams(
          default_event_params,
          { data: JSON.stringify(data), context, element, url }
        );

        return firebase_log_event({
          eventName: event_name,
          eventParams: event_params
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
