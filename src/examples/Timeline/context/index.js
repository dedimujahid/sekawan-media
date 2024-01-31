import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

// The Timeline main context
const Timeline = createContext();

// Timeline context provider
function TimelineProvider({ children, value }) {
  return <Timeline.Provider value={value}>{children}</Timeline.Provider>;
}

// Properti validasi untuk TimelineProvider
TimelineProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.any,
};

// Timeline custom hook for using context
function useTimeline() {
  return useContext(Timeline);
}

export { TimelineProvider, useTimeline };
