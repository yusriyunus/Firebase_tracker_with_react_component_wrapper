import FirebaseTracker from "./component_wrapper";
import firebase, {
  firebase_init,
  firebase_log_event
} from "./firebase_functionality";

export default firebase;

export { FirebaseTracker, firebase_init, firebase_log_event };
