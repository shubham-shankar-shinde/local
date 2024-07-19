import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () => {
  const [date, setdate] = useState(new Date());
  useEffect(() => {
    const intertime = setInterval(() => {
      setdate(new Date());
    }, 1000);
    return () => {
      clearInterval(intertime);
    };
  }, []);

  return (
    <p className="lead">
      This is the current time: {date.toLocaleDateString()} -{" "}
      {date.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
