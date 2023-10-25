"use client";
import Link from "next/link";
import ContactAPI from "@/api/contact";
import React, { useState } from "react";
import {
  faLocationPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, message };

    const response = await fetch(ContactAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application.json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
    } else if (!response.ok) {
      console.log(response);

      console.log("Error sending message");
    }
  };

  return (
    <div className="contact">
      <h1>You can reach me through..</h1>
      <div className="contact-info">
        <form
          id="contact-form"
          className="form-horizontal"
          role="form"
          onSubmit={handleSubmit}
        >
          <div class="field field_v1">
            <input
              id="name"
              class="field__input"
              placeholder="e.g. James"
            />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Name</span>
            </span>
          </div>
          <div class="field field_v2">
            <input
              id="e-mail"
              class="field__input"
              placeholder="e.g. james@gmail.com"
            />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">E-mail</span>
            </span>
          </div>
          <div class="field field_v3">
            <input
              id="message"
              class="field__input"
              placeholder="e.g. I'd like to enquire about.."
            />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Message</span>
            </span>
          </div>
          <div class="submit">
            <input id="submit" type="submit" class="submit-btn" />
          </div>
        </form>

        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faLocationPin} />
              <span className="contact-text place">Selangor, Malaysia</span>
            </li>

            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} />
              <span className="contact-text phone">
                <Link href="tel:1-212-555-5555" title="Give me a call">
                  +6017-6323-261
                </Link>
              </span>
            </li>

            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="contact-text gmail">
                <Link href="mailto:#" title="Send me an email">
                  ghaithatrk93@gmail.com
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
