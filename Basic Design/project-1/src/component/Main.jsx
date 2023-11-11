import React, { useState, useEffect } from "react";
import MultiActionAreaCard from "../sub-component/MultiActionAreaCard";

const Main = () => {
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/timezone");
        const data = await response.json();
        setTimeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        className="Container"
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {timeData ? (
          timeData.map((item, index) => (
            <div key={index} style={{ margin: "20px", maxWidth: "300px" }}>
              <MultiActionAreaCard data={item}></MultiActionAreaCard>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Main;
