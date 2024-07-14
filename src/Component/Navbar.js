import React, { useState } from 'react'
import Logo from "../Assests/Logo.svg";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/icons-material";
 
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneCartRoundIcon from "@mui/icons-material/PhoneCartRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
const Navbar = () => {

  const[openMenu,setOpenMenu] = useState(false)
  return (
    <div>Navbar</div>
  )
}

export default Navbar