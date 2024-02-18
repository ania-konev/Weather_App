export default function getDate() {
  const event = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="current-date">
      {event.toLocaleDateString("en-US", options)}
      <br></br>
      {event.toLocaleTimeString("en-US")}
    </div>
  );
}
