import React, { useEffect } from "react";

const TestPage = () => {
  useEffect(() => {
    fetch("/smokewhere-b0819-default-rtdb-export.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("불러온 JSON:", data);
      });
  }, []);

  return <div></div>;
};
export default TestPage;
