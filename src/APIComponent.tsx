import React, { useState, useEffect } from "react";

const APIComponent: React.FC = () => {
  const [data, dataSet] = useState<{ name: string }>();

  useEffect(() => {
    let isMounted = true;
    fetch("/api")
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          return dataSet(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>{data && <div role="contentinfo">My name is {data.name}</div>}</div>
  );
};

export default APIComponent;
