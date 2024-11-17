import React, { useEffect, useState } from "react";

const TYPING_SPEED = 100;
const SHOW_TIME = 2000;
const DEL_SPEED = 25;

function TypeWriter({ text }: any) {
  const [display, setDisplay] = useState(" ");

  const [typing, setTyping] = useState(true);
  // type the characters one by one
  useEffect(() => {
    if (!text || !text.trim().length) return;
    let typingTimer: any;
    if (typing) {
      let idx = 0;
      typingTimer = setInterval(() => {
        if (idx <= text.length) {
          setDisplay(text.substring(0, idx));
          idx++;
        } else {
          // when all characters are typed, after SHOW_TIME set clear flag
          clearInterval(typingTimer);
          setTimeout(() => {
            setTyping(false);
            setClearing(true);
          }, SHOW_TIME);
        }
      }, TYPING_SPEED);
    }

    return () => {
      clearInterval(typingTimer);
    };
  }, [text, typing]);

  // clear the characters one by one
  const [clearing, setClearing] = useState(false);
  useEffect(() => {
    let clearTimer: any;
    if (clearing) {
      let idx = text.length - 1;
      clearTimer = setInterval(() => {
        if (idx >= 0) {
          setDisplay(text.substring(0, idx));
          idx--;
        } else {
          // when all characters cleared, reset and invoke the callback
          clearInterval(clearTimer);
          setClearing(false);
          setTyping(true);
        }
      }, DEL_SPEED);
    }
    return () => {
      if (clearTimer) {
        clearInterval(clearTimer);
      }
    };
  }, [clearing, text]);
  return <span>{display || text[0]}</span>;
}
export default TypeWriter;
