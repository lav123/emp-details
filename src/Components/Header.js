import React from "react";
import "./Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useHistory } from "react-router";
function Header() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    window.localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div className="header">
      <div className="headerRight">
        <img
          src="https://image.shutterstock.com/image-photo/image-260nw-743186359.jpg"
          alt="Employee logo icon"
        />
      </div>
      <div className="headerMiddle">
        <SearchIcon />
        <input type="text" placeholder="Search Employee" />
        <ArrowDropDownIcon />
      </div>
      <div className="headerLeft">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <div>
          <IconButton onClick={handleMenu}>
            <Avatar
              src={`https://avatars.dicebear.com/api/avataaars/${Math.floor(
                Math.random() * 5000
              )}.svg`}
              className="headerAvatar"
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
