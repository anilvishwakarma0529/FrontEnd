import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeComponent/ThemeContext";

const CountdownTimer = ({ createdAt }) => {
  const { theme } = useContext(ThemeContext);
  const calculateTimeLeft = () => {
    const now = new Date();
    const endTime = new Date(
      new Date(createdAt).getTime() + 48 * 60 * 60 * 1000
    );
    const difference = endTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(timeLeft[interval]);
  });

  return (
    <div>
      {timerComponents.length ? (
        <>
          <p
            className={`text-center ${
              theme === "dark" ? "text-dark" : "text-light"
            }`}
          >
            Auction ends in :
          </p>
          <table className="text-center table table-bordered">
            <thead
              className={`${
                theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              <tr>
                <td>Day</td>
                <td>Hr</td>
                <td>Min</td>
                <td>Sec</td>
              </tr>
            </thead>
            <tbody
              className={`${
                theme === "dark"
                  ? "bg-dark text-light"
                  : "bg-light text-dark border-dark"
              }`}
            >
              <tr>
                <td>{timerComponents[0]}</td>
                <td>{timerComponents[1]}</td>
                <td>{timerComponents[2]}</td>
                <td>{timerComponents[3]}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p
          className={`text-center ${
            theme === "dark" ? "text-dark" : "text-light"
          }`}
        >
          Auction Closed
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
