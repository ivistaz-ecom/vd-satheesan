"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mx-auto container mb-10">
      <div className="lg:p-4 p-10">
        <div className="block max-w-sm p-5 bg-white  rounded-2xl h-52 shadow-lg  ">
          <h5>17/04/2023</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            തിരുവനന്തപുരം
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ധര്‍മ്മടത്തേത് ഒറ്റപ്പെട്ട സംഭവമല്ല: പൊലീസിലെ ക്രിമിനലുകള്‍ക്ക്
            അഴിഞ്ഞാടാന്‍ അവസരമൊരുക്കുന്നത്...
          </p>
        </div>
      </div>

      <div className="lg:p-4 p-10">
        <div className="block max-w-sm p-5 bg-white  rounded-2xl h-52 shadow-lg ">
          <h5>16/04/2023</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            തിരുവനന്തപുരം
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            വന്ദേഭാരത് മംഗലുരു വരെ നീട്ടണം; കേന്ദ്ര റെയില്‍വെ മന്ത്രിക്ക്
            പ്രതിപക്ഷ നേതാവ് കത്തയച്ചു
          </p>
        </div>
      </div>

      <div className="lg:p-4 p-10">
        <div className="block max-w-sm p-5 bg-white  rounded-2xl h-52 shadow-lg ">
          <h5>14/04/2023</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            തിരുവനന്തപുരം
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            മാധ്യമങ്ങളെ ഭീഷണിപ്പെടുത്തി വരുത്തിയിലാക്കാൻ ശ്രമിക്കുന്നു; പിണറായി
            സർക്കാർ നരേന്ദ്ര മോദിയുടെ കാർബൺ...
          </p>
        </div>
      </div>

      <div className="lg:p-4 p-10">
        <div className="block max-w-sm p-5 bg-white  rounded-2xl h-52 shadow-lg ">
          <h5>13/04/2023</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            തിരുവനന്തപുരം
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ഹൈക്കോടതി പരാമർശം പ്രതിപക്ഷ ആരോപണം അടിവരയിടുന്നത്
          </p>
        </div>
      </div>

      <div className="lg:p-4 p-10">
        <div className="block max-w-sm p-5 bg-white  rounded-2xl h-52 shadow-lg ">
          <h5>12/04/2023</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            തിരുവനന്തപുരം
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ആര്‍.എസ് ശശികുമാറിനെതിരായ പരാമര്‍ശം പിന്‍വലിച്ച് ലോകായുക്ത മാപ്പ്
            പറയണം; ഹിന്ദുവിന്റെ മൊത്തം അട്ടിപ്പേറവകാശം...
          </p>
        </div>
      </div>
      <div className="lg:p-4 p-10">
        <div className="block max-w-sm p-5 bg-white  rounded-2xl h-52 shadow-lg ">
          <h5>09/04/2023</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            േസ്ബുക്ക് പോസ്റ്റ്
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ബിഷപ്പ് ഹൗസുകൾ കയറിയിറങ്ങി ബി.ജെ.പി നേതാക്കള്‍ ഈസ്റ്റര്‍ ആശംസകള്‍
            നേരുന്നതിൽ പ്രതിപക്ഷ നേതാവിൻ്റെ...
          </p>
        </div>
      </div>

      <div className="lg:p-4 p-10">
        <div className="block max-w-sm p-5 bg-white  rounded-2xl h-52 shadow-lg ">
          <h5>09/04/2023</h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            കോഴിക്കോട്
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ക്രൈസ്തവരെ ഓടിച്ചിട്ട് തല്ലണമെന്ന് പറഞ്ഞ ബി.ജെ.പിയുടെ ക്രൈസ്തവ
            സ്‌നേഹം ഇരട്ടത്താപ്പ്; കേരളത്തിലെ 90 ശതമാനം...
          </p>
        </div>
      </div>
      
    </Slider>
  );
}

