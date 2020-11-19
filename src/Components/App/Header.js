import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import logo from "./ClipartKey_1478728.png";

const HeaderStyle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;

  #headerLogo {
    width: 100px;
    margin: 10px 20px 5px;
    object-fit: contain;
  }

  #searchBar {
    display: flex;
    flex: 1;

    #searchInput {
      height: 30px;
      padding: 10px;
      border: none;
      width: 100%;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    #searchIcon {
      background-color: #cd9042;
      padding: 5px;
      height: 30px !important;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }

  .headerNav {
    display: flex;
    justify-content: space-evenly;
  }
  .headerLink {
    color: white;
    text-decoration: none;
  }

  .headerNavItem {
    display: flex;
    flex-flow: column nowrap;
    margin: auto 10px;
  }

  .headerNavItem-LineOne {
    font-size: 10px;
  }

  .headerNavItem-LineTwo {
    font-size: 13px;
    font-weight: 800;
  }

  .headerOptionBasket {
    display: flex;
  }

  .headerBasketCount {
    margin: auto 10px;
  }
`;

export default function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <HeaderStyle>
      <Link to="/">
        <img id="headerLogo" src={logo} alt="Amazon Logo" />
      </Link>
      <SearchBar />
      <HeaderNav totalBasket={basket?.length} />
    </HeaderStyle>
  );
}

function SearchBar() {
  return (
    <div id="searchBar">
      <input type="text" id="searchInput" />
      <SearchIcon id="searchIcon" />
    </div>
  );
}

function HeaderNav({ totalBasket }) {
  return (
    <nav className="headerNav">
      <Link to="/login" className="headerLink">
        <HeaderNavItem top={"Hello, Guest"} bottom={"Sign In"} />
      </Link>

      <Link to="/" className="headerLink">
        <HeaderNavItem top={"Returns"} bottom={"& Orders"} />
      </Link>

      <Link to="/" className="headerLink">
        <HeaderNavItem top={"Your"} bottom={"Prime"} />
      </Link>

      <Link to="/checkout" className="headerLink">
        <div className="headerOptionBasket">
          <ShoppingBasketIcon />
          <span className="headerNavItem-LineTwo headerBasketCount">
            {totalBasket}
          </span>
        </div>
      </Link>
    </nav>
  );
}

function HeaderNavItem(props) {
  return (
    <div className="headerNavItem">
      <span className="headerNavItem-LineOne">{props.top}</span>
      <span className="headerNavItem-LineTwo">{props.bottom}</span>
    </div>
  );
}
