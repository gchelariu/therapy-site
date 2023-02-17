import _ from "lodash";

import './css/header/header.css';
import './css/header/logoDiv.css';

import logoStandAloneWhite from "./resources/logo-stand-alone-white.png";
import logoNameWhite from "./resources/logo-name-white.png";


const navList = ["Despre mine", "Servicii", "Contact"];

export function buildHeader() {
  const header = document.createElement("div");

  header.classList.add("header");

  header.appendChild(buildLogo());
  header.appendChild(buildNavigation());

  return header;
}

function buildLogo() {
  const logoDiv = document.createElement("div");
  logoDiv.classList.add('logo');

  const logoStandAloneWhiteImg = new Image();
  logoStandAloneWhiteImg.src = logoStandAloneWhite;
  logoStandAloneWhiteImg.classList.add('logo-img');
  logoDiv.appendChild(logoStandAloneWhiteImg);

  const logoNameWhiteImg = new Image();
  logoNameWhiteImg.src = logoNameWhite;
  logoNameWhiteImg.classList.add('logo-name');
  logoDiv.appendChild(logoNameWhiteImg);
  return logoDiv;
}

function buildNavigation() {
  var navigation = document.createElement("div");
  navigation.appendChild(buildUnorderedList());

  return navigation;
}

function buildUnorderedList() {
  var list = document.createElement("ul");
  navList.forEach((element) => {
    var item = document.createElement("li");
    item.innerText = element;
    list.appendChild(item);
  });

  return list;
}
