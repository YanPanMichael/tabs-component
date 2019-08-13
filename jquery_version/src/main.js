import Tabs from "./tabs";
import './style.scss';

window.onload = function() {
  const tab = new Tabs({
    element: "#tab-demo",
    tabs: "#tab-demo .tabs-nav li",
    panels: "#tab-demo .tabs-content div",
    activeIndex: 1
  });
  tab.events.on("change", o => {
    console.log("click", o);
  });
};
