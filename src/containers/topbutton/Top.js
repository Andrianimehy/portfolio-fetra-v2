import React, {useEffect, useState} from "react";
import "./Top.scss";

export default function Top() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const TopEvent = () => {
    window.scrollTo({top:0, behavior:"smooth"});
  };

  return (
    <button
      onClick={TopEvent}
      id="topButton"
      className={visible ? "is-visible" : ""}
      title="Revenir en haut"
      aria-label="Revenir en haut de la page"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
