import React from "react";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Topbar/Header";
import Navbar from "../../components/Topbar/Navbar";
import Timeline from "../../components/Topbar/Timeline";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Modal />
      {/* <Timeline /> */}
    </>
  );
}
