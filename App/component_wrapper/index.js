import React from "react";
import { firebase_log_event } from "../firebase_functionality/index";
const Firebase_log_event = firebase_log_event();

const handlingFirebaseTracker = (
  e,
  { module_name, event_key, event_type, event_params }
) => {
  e.preventDefault();

  const tracker = Firebase_log_event[`firebase_log_event_${event_type}`];
  if (!tracker) {
    console.error(`${event_type} is not listed in firebase event name`);
    return false;
  }

  const track_event = tracker(module_name, event_key, event_params);
  return track_event;
};

const FirebaseTracker = props => {
  const { module_name, event_type, event_key, event_params } = props;
  return (
    <div
      className={`firebase_${event_key}`}
      onClick={e =>
        handlingFirebaseTracker(e, {
          module_name,
          event_type,
          event_key,
          event_params
        })
      }
    >
      {props.children}
    </div>
  );
};

FirebaseTracker.defaultProps = {
  module_name: "calendar",
  event_type: "action",
  event_key: "calender_action_type",
  event_params: {}
};

export default FirebaseTracker;
