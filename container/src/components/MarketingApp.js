import React, { useEffect, useRef } from "react";
import { mountMarketing } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountMarketing(ref.current);
  }, []);

  return <div ref={ref} />;
};
