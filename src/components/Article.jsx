import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let emoji = "";
  let count = 0;

  if (minutes < 30) {
    count = Math.ceil(minutes / 5);
    emoji = "☕️".repeat(count);
  } else {
    count = Math.ceil(minutes / 10);
    emoji = "🍱".repeat(count);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutes && (
        <p>
          {emoji} {minutes} min read
        </p>
      )}
    </article>
  );
}

export default Article;
