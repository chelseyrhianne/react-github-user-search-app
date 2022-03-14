import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = new Date(props.date);
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  console.log(year);
  return (
    <span>
      {date} {month} {year}
    </span>
  );
}
