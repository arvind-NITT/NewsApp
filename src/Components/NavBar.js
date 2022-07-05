import React from 'react'
// import {Link} from "react-router-dom";


export default function NavBar(props) {
  let mystyle={
    color: "white",
    background: '#39424e'
  }

  return (
    <div >
         <nav className={`navbar navbar-expand-lg fixed-top `} style={props.mode==='Dark'?mystyle: {"background": "linear-gradient(110deg, #762b0b 60%, #bc6939 60%)"}}>
  <div className="container-fluid">
<a className={`navbar-brand text-${props.mode==='Light'?"dark":"light"}`} href="/">NewsApp</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='Light'?"dark":"light"}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='Light'?"dark":"light"}`} aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className={`nav-link active dropdown-toggle text-${props.mode==='Light'?"dark":"light"} `} href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a  className="dropdown-item" href="/business">Business</a></li>
            <li><a   className="dropdown-item" href="/entertainment">Entertainment</a></li>
            <li><a   className="dropdown-item" href="/general">General</a></li>
            <li><a   className="dropdown-item" href="/health">Health</a></li>
            <li><a   className="dropdown-item" href="/science">Science</a></li>
            <li><a   className="dropdown-item" href="/sports">Sports</a></li>
            <li><a   className="dropdown-item" href="/technology">Technology</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==='Light'?"dark":"light"}`} aria-current="page" href="/">Contact Us</a>
        </li>
        </ul> 
    </div>
    <span>
      <button onClick={props.changeMode} className="btn btn-primary">{props.mode==='Light'?'Dark':'Light'} Mode </button>
    </span>
  </div>
</nav>
    </div>
  )
}

