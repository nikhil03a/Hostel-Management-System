import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GoogleMapReact from 'google-map-react'
import Transitions from '../components/Transitions'
const HomePage = () => {
  useEffect(() => {
    localStorage.clear();
  })
  return (
    <Transitions>
      <Link to='/admin-login'>Admin Login</Link><br></br>
      <Link to='/warden-login'>Warden Login</Link><br></br>
      <Link to='/student-login'>Student Login</Link><br></br>
      <div>
        <>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Hostel Management</title>
          <meta name="description" content="" />
          {/* google fonts */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Gilda+Display&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          {/* font awesome cdn   */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          {/* slick slider */}
          {/* Add the slick-theme.css if you want default styling */}
          <link
            rel="stylesheet"
            type="text/css"
            href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
          />
          {/* Add the slick-theme.css if you want default styling */}
          <link
            rel="stylesheet"
            type="text/css"
            href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
          />
          {/* date picker */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/datepicker/1.0.10/datepicker.min.css"
            integrity="sha512-YdYyWQf8AS4WSB0WWdc3FbQ3Ypdm0QCWD2k4hgfqbQbRCJBEgX0iAegkl2S1Evma5ImaVXLBeUkIlP6hQ1eYKQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <link rel="stylesheet" href="../dist/main.css" />
          <nav className=" md:flex md:justify-between bg-gray-800 py-4">
            <div className="flex justify-between">
              <a
                href="#"
                className="font-gilda text-[28px] font-normal text-lion ml-5"
              >
                CEG  <span className="text-white">Hostels</span>
              </a>
              <button
                type="button"
                className="text-white md:hidden"
                id="navbar-show-btn"
              >
                <i className="fas fa-bars" />
              </button>
            </div>
            <div className="navbar-box fixed top-0 right-0 w-[280px] h-full bg-white p-5 flex flex-col items-center font-barlow-cond translate-x-full transition duration-300 ease-in-out md:relative md:translate-x-0 md:bg-transparent md:flex-row md:h-auto md:w-auto md:p-0">
              <button
                type="button "
                className="absolute top-[18px] right-[18px] z-50 text-2xl hover:rotate-180 transition duration-300 ease-in-out md:hidden"
                id="navbar-hide-btn"
              >
                <i className="fa-solid fa-xmark" />
              </button>
              <ul className="flex flex-col w-full text-center mt-[60px] md:flex-row md:mt-0">
                <li className="py-3 border-b-[1px] border-solid md:py-0 md:border-none">
                  <a
                    href="#"
                    className="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    home
                  </a>
                </li>
                <li className="py-3 border-b-[1px] border-solid md:py-0 md:border-none">
                  <a
                    href="#"
                    className="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    rooms
                  </a>
                </li>
                <li className="py-3 border-b-[1px] border-solid md:py-0 md:border-none">
                  <a
                    href="#"
                    className="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    events
                  </a>
                </li>
                <li className="py-3 border-b-[1px] border-solid md:py-0 md:border-none">
                  <a
                    href="#"
                    className="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    gallery
                  </a>
                </li>
                <li className="py-3 md:py-0">
                  <a
                    href="#"
                    className="text-eerie-black uppercase text-md tracking-[.12em] font-medium hover:text-lion transition duration-300 ease-in-out md:mx-[14px] xl:mx-5 2xl:mx-6 md:text-white"
                  >
                    contact
                  </a>
                </li>
              </ul>

            </div>
          </nav>
          <section className="bg-nero min-h-[640px] mx-auto px-3 flex items-center py-16 mt-0">
            <div className="container max-w-[1200px] mx-auto grid md:grid-cols-2 gap-14">
              <div className="flex flex-col justify-center items-start">
                <h3 className="text-coyote font-normal opacity-70 tracking-[.25em] font-barlow-cond text-xl sm:text-[22px] uppercase">
                  welcome to
                </h3>
                <h1 className="font-gilda text-2xl sm:text-[38px] tracking-[.04em] font-normal py-3 text-white mb-3">
                  Andermatt Resort &amp; Farm
                </h1>
                <p className="opacity-60 font-light font-barlow text-justify text-base sm:text-lg text-white">
                  Andermatt is located in the middle of the Swiss Alps. In recent years,
                  Andermatt Swiss Alps has expanded its infrastructure, created
                  attractive opportunities for investors and created new jobs for the
                  entire region.
                </p>
                <a
                  href="#"
                  className="bg-lion font-barlow px-4 min-w-[158px] min-h-[48px] inline-flex items-center justify-center uppercase text-white transition duration-300 ease-in-out hover:bg-lion-dark mt-8 tracking-widest"
                >
                  know more
                </a>
              </div>
              <div className="welcome-slider overflow-hidden">
                <div className="h-[425px]">
                  <img
                    className="w-full h-full object-cover"
                    src="../images/img4.jpeg"
                    alt="welcome image"
                  />
                </div>
                <div className="h-[425px]">
                  <img
                    className="w-full h-full object-cover"
                    src="./images/build.jpeg"
                    alt="welcome image"
                  />
                </div>
                <div className="h-[425px]">
                  <img
                    className="w-full h-full object-cover"
                    src="./images/lib.jpeg"
                    alt="welcome image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 px-3 bg-white">
            <div className="container max-w-[1200px] mx-auto">
              <h2 className="font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-coyote text-center mb-3">
                Events
              </h2>
              <div className="flex items-center justify-center">
                <img src="../images/img4.jpeg" alt="" />
              </div>
              <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mt-10">
                <div className="min-h-[323px] relative">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                  />
                  <div className="text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5">
                    <div className="w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                      <span className="font-bold tracking-widest text-xl inline-block">
                        03
                      </span>
                      <span className="tracking-widest inline-block -mt-[3px]">
                        apr
                      </span>
                    </div>
                    <h3 className="font-gilda text-xl tracking-[.04em] uppercase">
                      decade nights
                    </h3>
                    <p className="font-normal tracking-[.04em] font-barlow text-lg">
                      Saturday Music Fest - <span className="font-light">07:00 PM</span>
                    </p>
                  </div>
                </div>
                <div className="min-h-[323px] relative">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                  />
                  <div className="text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5">
                    <div className="w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                      <span className="font-bold tracking-widest text-xl inline-block">
                        06
                      </span>
                      <span className="tracking-widest inline-block -mt-[3px]">
                        may
                      </span>
                    </div>
                    <h3 className="font-gilda text-xl tracking-[.04em] uppercase">
                      wine tastings
                    </h3>
                    <p className="font-normal tracking-[.04em] font-barlow text-lg">
                      Special Wine Dinner - <span className="font-light">09:00 PM</span>
                    </p>
                  </div>
                </div>
                <div className="min-h-[323px] relative">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                  />
                  <div className="text-white absolute bottom-2 left-2 right-2 bg-black/50 p-5">
                    <div className="w-[70px] h-[70px] bg-lion rounded-full flex items-center justify-center flex-col uppercase font-mont text-sm absolute top-0 right-3 -translate-y-[50%]">
                      <span className="font-bold tracking-widest text-xl inline-block">
                        10
                      </span>
                      <span className="tracking-widest inline-block -mt-[3px]">
                        jun
                      </span>
                    </div>
                    <h3 className="font-gilda text-xl tracking-[.04em] uppercase">
                      love is in the air
                    </h3>
                    <p className="font-normal tracking-[.04em] font-barlow text-lg">
                      Students hostel Librarey -{" "}
                      <span className="font-light">06:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 px-3 bg-light-gray">
            <div className="container max-w-[1200px] mx-auto">
              <h2 className="font-gilda font-normal text-3xl text-[46px] tracking-[.04em] text-coyote text-center mb-3">
                Gallery
              </h2>
              <div className="flex items-center justify-center">
                <img src="../images/img4.jpeg" alt="" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mt-10">
                <div className="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                    <span className="font-barlow text-lg font-normal">
                      Fancy student Room
                    </span>
                    <ul className="flex items-center">
                      <li className="text-sm">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                    <span className="font-barlow text-lg font-normal">
                      Fancy student Room
                    </span>
                    <ul className="flex items-center">
                      <li className="text-sm">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                    <span className="font-barlow text-lg font-normal">
                      Fancy student Room
                    </span>
                    <ul className="flex items-center">
                      <li className="text-sm">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                    <span className="font-barlow text-lg font-normal">
                      Fancy student Room
                    </span>
                    <ul className="flex items-center">
                      <li className="text-sm">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                    <span className="font-barlow text-lg font-normal">
                      Fancy student Room
                    </span>
                    <ul className="flex items-center">
                      <li className="text-sm">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="group min-h-[260px] relative after:absolute after:content-[''] after:left-0 after:top-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/75 after:to-black/5 after:opacity-0 hover:after:opacity-100 after:transition after:duration-300 after:ease-in-out overflow-hidden">
                  <img
                    src="../images/img4.jpeg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="bg-lion text-white py-2 px-4 flex items-center justify-between absolute bottom-3 left-0 z-10 -translate-x-full group-hover:translate-x-0 transition duration-300 ease-in-out w-4/5">
                    <span className="font-barlow text-lg font-normal">
                      Fancy Students Room
                    </span>
                    <ul className="flex items-center">
                      <li className="text-sm">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                      <li className="text-sm ms-1">
                        <i className="fas fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 px-3 bg-banner-image bg-center bg-cover bg-fixed bg-no-repeat">
            <div className="container max-w-[1200px] mx-auto">
              <h2 className="font-gilda font-normal text-3xl sm:text-[46px] tracking-[.04em] text-coyote text-center mb-3">
                Our Hostel Services
              </h2>
              <div className="flex items-center justify-center">
                <img src="../images/img4.jpeg" alt="" />
              </div>
              <div className="grid gap-3 mt-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                  <img src="../images/img4.jpeg" className="w-[54px]" />
                  <h4 className="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                    Pure water
                  </h4>
                  <p className="text-white text-base font-barlow font-light tracking-[.04em]">
                    Purified water we are providing
                  </p>
                </div>
                <div className="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                  <img src="../images/img4.jpeg" className="w-[54px]" />
                  <h4 className="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                    {" "}
                    Cycle Parking Space
                  </h4>
                  <p className="text-white text-base font-barlow font-light tracking-[.04em]">
                    All Student facilities are there
                  </p>
                </div>
                <div className="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                  <img src="../images/img4.jpeg" className="w-[54px]" />
                  <h4 className="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                    Room Service
                  </h4>
                  <p className="text-white text-base font-barlow font-light tracking-[.04em]">
                    Cleaning is very important
                  </p>
                </div>
                <div className="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                  <img src="../images/img4.jpeg" className="w-[54px]" />
                  <h4 className="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                    Swimming Pool
                  </h4>
                  <p className="text-white text-base font-barlow font-light tracking-[.04em]">
                    We are providing all service
                  </p>
                </div>
                <div className="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                  <img src="../images/img4.jpeg" className="w-[54px]" />
                  <h4 className="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                    Fibre Internet
                  </h4>
                  <p className="text-white text-base font-barlow font-light tracking-[.04em]">
                    CEG hostels
                  </p>
                </div>
                <div className="flex text-center flex-col justify-center items-center bg-black/30 p-10 hover:bg-black/50 transition duration-300 ease-in-out">
                  <img src="../images/img4.jpeg" className="w-[54px]" />
                  <h4 className="mt-4 mb-2 text-lion font-gilda text-xl tracking-[.04em] font-normal">
                    Breakfast
                  </h4>
                  <p className="text-white text-base font-barlow font-light tracking-[.04em]">
                    Dicipline Hostels
                  </p>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div className="bg-nero py-16 px-3">
              <div className="grid max-w-[1200px] mx-auto gap-8 text-center md:grid-cols-2 md:text-start lg:grid-cols-footer">
                <div className="md:me-2 lg:me-3">
                  <a
                    href="index.html"
                    className="text-lion font-gilda font-normal text-2xl tracking-[.04em]"
                  >
                    CEG<span className="text-white">Hostels</span>
                  </a>
                  <p className="text-white font-light font-barlow text-base mt-3 max-w-[480px] mx-auto md:ms-0">
                    Staying in hostels can be the biggest adventure of your travels.
                    Therefore some great memories can be made and relived through these
                    quotes about hostel life.
                  </p>
                </div>
                <div>
                  <h4 className="inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">
                    quick link
                  </h4>
                  <ul>
                    <li className="my-2">
                      <a
                        href="#"
                        className="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                      >
                        our services
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="#"
                        className="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                      >
                        Healthy Food
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="#"
                        className="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                      >
                        Hygienic life
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="#"
                        className="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                      >
                        Peaceful Environment
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">
                    explore
                  </h4>
                  <ul>
                    <li className="my-2">
                      <a
                        href="#"
                        className="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                      >
                        rooms &amp; suites
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="#"
                        className="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                      >
                        spa &amp; wellness
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="#"
                        className="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                      >
                        special offers
                      </a>
                    </li>
                    <li className="my-2">
                      <a
                        href="#"
                        className="capitalize font-barlow font-light text-base text-white hover:text-white/50 transition duration-300 ease-in-out"
                      >
                        restaurant
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="inline-block font-gilda tracking-[.04em] text-lg text-white capitalize relative after:absolute after:content-[''] after:left-0 after:-bottom-0 after:h-[1px] after:w-full after:bg-coyote pb-1 mb-4">
                    contact
                  </h4>
                  <ul>
                    <li className="my-2 grid grid-cols-[40px_auto] justify-center md:justify-start">
                      <span className="text-white">
                        <i className="fas fa-map-marker-alt" />
                      </span>
                      <span className="text-white/50 font-light">
                        Anna University, Chennai
                      </span>
                    </li>
                    <li className="my-2 grid grid-cols-[40px_auto] justify-center md:justify-start ">
                      <span className="text-white">
                        <i className="fas fa-phone" />
                      </span>
                      <span className="text-white/50 font-light">0421 4312 3241</span>
                    </li>
                    <li className="my-2 grid grid-cols-[40px_auto] justify-center md:justify-start">
                      <span className="text-white">
                        <i className="fas fa-envelope" />
                      </span>
                      <span className="text-white/50 font-light">
                        info.ceghostel@mail.com
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-4 text-white font-normal font-barlow uppercase text-center tracking-widest bg-nero-dark">
              <p className="text-sm">© copyright 2023 by NPS Team</p>
            </div>
          </footer>
        </>

      </div>
    </Transitions>
  )
}

export default HomePage
