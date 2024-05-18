// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import "./Nav_music.css"
// // import logo from './logo.png'
// import logomusic from './logomusic.png'
// const Nav = () => {

//     const [open, setOpen] = useState(false);
//     const handleClick = () => {
//         setOpen(!open);
//     };
//     return (
//         <>
//             <nav className="navbarmusic" >
//                 <div className="navbar__logo">
//                     <NavLink to="/">
//                         <img style={{ filter: "drop-shadow(#000 2px 2px 5px)" }} src={logomusic} alt="" />
//                     </NavLink>
//                 </div>
                
//                 <div className="navbar__menu" onClick={handleClick}>
//                     <div style={{ filter: "invert() drop-shadow(#000 1px 1px 3px)" }} className={open ? "navbar__menu-icon open" : "navbar__menu-icon"}>
//                         <span></span>
//                         <span></span>
//                         <span></span>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Nav