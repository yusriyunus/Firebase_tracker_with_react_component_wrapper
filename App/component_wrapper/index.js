import React from "react";
import { firebase_log_event } from "../firebase_functionality/index";
const Firebase_log_event = firebase_log_event();

const handlingFirebaseTracker = (
  e,
  { event_key, event_type, event_params }
) => {
  e.preventDefault();

  const tracker = Firebase_log_event[`firebase_log_event_${event_type}`];
  if (!tracker) {
    console.error(`${event_type} is not listed in firebase event name`);
    return false;
  }

  const track_event = tracker(event_key, event_params);
  return track_event;
};

const FirebaseTracker = (
  props,
  { event_type, event_key } = {
    event_type: "action",
    event_key: "calender_action_type"
  }
) => {
  return (
    <div
      className={`firebase_${event_key}`}
      onClick={e =>
        handlingFirebaseTracker(e, { event_type, event_key, event_params })
      }
    >
      {props.children}
    </div>
  );
};

export default FirebaseTracker;
