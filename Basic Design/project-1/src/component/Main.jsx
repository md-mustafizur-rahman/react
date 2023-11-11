import React, { useState, useEffect } from "react";
import MultiActionAreaCard from "../sub-component/MultiActionAreaCard";

const Main = () => {
  const [timeData, setTimeData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/timezone");
        const data = await response.json();
        setTimeData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredTimeData = timeData
    ? timeData.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

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
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search time zone"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : filteredTimeData.length > 0 ? (
          filteredTimeData.map((item, index) => (
            <div key={index} style={{ margin: "20px", maxWidth: "300px" }}>
              <MultiActionAreaCard data={item}></MultiActionAreaCard>
            </div>
          ))
        ) : (
          <p>No matching time zones found.</p>
        )}
      </div>
    </>
  );
};

export default Main;
