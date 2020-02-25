const module_name = "calendar";
const variable_default = {
  calendar_type: {
    today: "today",
    economic: "economic",
    dividend: "dividend",
    stocksplit: "stocksplit",
    reverse_split: "reverse_split",
    right_issue: "right_issue",
    bonus: "bonus",
    tender_offer: "tender_offer",
    rups: "rups",
    ipo: "ipo"
  }
};

const event_list = {
  calender_action_type: {
    trigger: "click",
    action: "type",
    data: JSON.stringify({
      type: variable_default.calendar_type.today // Default value
    }),
    context: module_name,
    element: "",
    url: "",
    id: "",
    customParams: {
      firebase: {
        action: '_action'
      }
    }
  },
  calender_action_company: {
    trigger: "click",
    action: "company",
    data: JSON.stringify({
      company: "IHSG", // Default value
      type: variable_default.calendar_type.today // Default value
    }),
    context: module_name,
    element: "",
    url: ""
  },
  calender_action_search: {
    trigger: "click",
    action: "search",
    data: JSON.stringify({
      start_date: "",
      end_date: "",
      type: variable_default.calendar_type.today // Default value
    }),
    context: module_name,
    element: "",
    url: ""
  },
  calender_action_clear: {
    trigger: "click",
    action: "search",
    data: JSON.stringify({
      type: variable_default.calendar_type.today // Default value
    }),
    context: module_name,
    element: "",
    url: ""
  }
};

export default event_list;
