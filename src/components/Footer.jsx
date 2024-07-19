import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/146843614?s=96&v=4"}
          alt="Founder"
        />

        <h2>Chinmaya Sutar</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.youtube.com/channel/UCrFwuzLNBta1ArFdnKAOsIQ"
            target={"blank"}
          >
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/chinmaya_sutar_/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Chinu99380955899" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
