'use client';

import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import NextToggle from "./components/NextToggle"

export default function Home() {
  const [contact, setContact] = React.useState({
    name: "John",
    lastname: "Doe",
    phone: "(646) 555 5711",
    email: "nextdoe@mail.com",
    isFavorite: true
  })

  function handleFavorite() {
    setContact(prevState => {
      return {...prevState, isFavorite: !contact.isFavorite}
    })
  }
  return (
    <main className={styles.main}>
      <img className={styles.profile_img} src="https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg" alt="profile-img" />
      <div>
        <NextToggle favorite={contact.isFavorite}
        handleClick={handleFavorite}
        />
      </div>
      <h1>{contact.name} {contact.lastname}</h1>
      <div>{contact.phone}</div>
      <div>{contact.email}</div>


    </main>
  );
}
