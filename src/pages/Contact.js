import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [.03,.87,.73,.9],
    duration: .6,
  }

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adress</h4>
              <p>127 rue de Fontenay</p>
              <p>92350 Le Plessis Robinson </p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Phone</h4>
              <CopyToClipboard text="0678832421" className="hover">
                <p
                  style={{cursor: 'pointer'}}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 78 83 24 21
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="Antho.devjam@gmail.com" className="hover">
                <p
                  style={{cursor: 'pointer'}}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  Antho.devjam@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Anthony Charron . 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
