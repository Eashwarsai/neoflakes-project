// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const headerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '20px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   };

//   const logoStyle = {
//     fontSize: '24px',
//     fontWeight: 'bold',
//     textDecoration: 'none',
//     color: 'white',
//   };

//   const navStyle = {
//     textDecoration: 'none',
//     color: 'white',
//     fontSize: '18px',
//     marginLeft: '20px',
//     transition: 'color 0.3s ease',
//   };

//   const navHoverStyle = {
//     color: '#ffc107', // Change color on hover
//   };

//   return (
//     <header style={headerStyle}>
//       <Link to="/" style={logoStyle}>My Media App</Link>
//       <nav>
//         <Link to="/" style={navStyle} activeStyle={navHoverStyle}>Home</Link>
//         <Link to="/show" style={navStyle} activeStyle={navHoverStyle}>Show</Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [homeClicked, setHomeClicked] = useState(false);

//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px 20px",
//     backgroundColor: "#333",
//     color: "white",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//     borderRadius: "5px",
//   };

//   const navStyle = {
//     textDecoration: "none",
//     color: "inherit",
//     fontFamily: "Arial, sans-serif",
//     padding: "6px 12px",
//     marginRight: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     transition:
//       "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
//   };

//   const navHoverStyle = {
//     backgroundColor: "white",
//     color: "black",
//     cursor: "pointer",
//     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   };

//   const homeBoxStyle = {
//     backgroundColor: homeClicked ? "grey" : "white",
//     padding: "6px 12px",
//     borderRadius: "5px",
//   };

//   const handleClickHome = () => {
//     setHomeClicked(true);
//   };

//   return (
//     <header style={headerStyle}>
//       <h1>My Media App</h1>
//       <nav>
//         <Link
//           to="/"
//           style={{ ...navStyle, ...navHoverStyle, ...homeBoxStyle }}
//           onClick={handleClickHome}
//         >
//           Home
//         </Link>
//         <Link to="/show" style={{ ...navStyle, ...navHoverStyle }}>
//           Show
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(location.pathname);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  };

  const navStyle = {
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
    padding: "6px 12px",
    marginRight: "10px",
    fontSize: "18px",
    borderRadius: "5px",
    transition:
      "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
  };

  const activeNavStyle = {
    backgroundColor: "grey",
    color: "white",
  };

  const inactiveNavStyle = {
    backgroundColor: "white",
    color: "black",
  };

  const onNavClick = (path) => {
    setCurrentTab(path);
  };

  return (
    <header style={headerStyle}>
      <h1>My Media App</h1>
      <nav>
        <Link
          to="/"
          style={{
            ...navStyle,
            ...(currentTab === "/" ? activeNavStyle : inactiveNavStyle),
          }}
          onClick={() => onNavClick("/")}
        >
          Home
        </Link>
        <Link
          to="/show"
          style={{
            ...navStyle,
            ...(currentTab === "/show" ? activeNavStyle : inactiveNavStyle),
          }}
          onClick={() => onNavClick("/show")}
        >
          Show
        </Link>
      </nav>
    </header>
  );
};

export default Header;


