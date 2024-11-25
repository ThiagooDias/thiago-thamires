import { useState, useEffect } from "react";
import TimeCard from "./TimeCard";

function Countdown({ startDate }) {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeElapsed = () => {
      const now = new Date();
      const start = new Date(startDate);

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();
      let hours = now.getHours() - start.getHours();
      let minutes = now.getMinutes() - start.getMinutes();
      let seconds = now.getSeconds() - start.getSeconds();

      // Ajustar para evitar valores negativos
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  const yearsToString = timeElapsed.years.toString().padStart(2, "0");
  const monthsToString = timeElapsed.months.toString().padStart(2, "0");
  const daysToString = timeElapsed.days.toString().padStart(2, "0");
  const hoursToString = timeElapsed.hours.toString().padStart(2, "0");
  const minutesToString = timeElapsed.minutes.toString().padStart(2, "0");
  const secondsToString = timeElapsed.seconds.toString().padStart(2, "0");

  return (
    <div className="flex flex-col justify-center items-center mb-14">
      <h2 className="text-xl mb-2 font-medium">Juntos há: </h2>
      <div className="flex flex-col space-y-4 text-center">
        <TimeCard value={yearsToString} label="ano(s)" />
        <TimeCard value={monthsToString} label="mês(es)" />
        <TimeCard value={daysToString} label="dia(s)" />
        <TimeCard value={hoursToString} label="hora(s)" />
        <TimeCard value={minutesToString} label="minuto(s)" />
        <TimeCard value={secondsToString} label="segundo(s)" />
      </div>
    </div>
  );
}

export default Countdown;
