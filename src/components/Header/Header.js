import React,{useState, useEffect} from "react";
import { Collapse, Navbar,  NavbarBrand, NavbarToggler, NavItem, Nav } from "reactstrap";
import { NavLink } from 'react-router-dom';
import './Header.css';
import $ from 'jquery';

const Header = () => {
    function animation(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        //console.log("Item pos "+itemPosNewAnimTop)
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
          "top":itemPosNewAnimTop.top + "px", 
          "left":itemPosNewAnimLeft.left + "px",
          "height": activeWidthNewAnimHeight + "px",
          "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
          $('#navbarSupportedContent ul li').removeClass("active");
          $(this).addClass('active');
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();
          $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
          });
        });
      }
    
      useEffect(() => {
        
        animation();
        $(window).on('resize', function(){
          setTimeout(function(){ animation(); }, 500);
        });
        
      }, []);

      
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (<>
        <Navbar className="navbar-expand-lg navbar-mainbg" dark >
        
        <NavbarBrand className="navbar-logo" href="/">ChatGPT</NavbarBrand>
        <NavbarToggler onClick={function(){
            toggle();
          setTimeout(function(){ animation(); });
        }} />
        <Collapse isOpen={isOpen} navbar id="navbarSupportedContent">
            <Nav className="ms-auto" navbar>
                <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>
                <NavItem className="li-ins ">
                    <NavLink to="/" >
                        <i className="fas fa-warehouse"></i>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem className="li-ins">
                <NavLink to="/About" >
                        <i className="far fa-address-book"></i>
                        About
                    </NavLink>
                </NavItem>
                <NavItem className="li-ins">
                    <NavLink to="/Contact" >
                        <i className="far fa-copy"></i>
                        Contact
                    </NavLink>
                </NavItem>
                <NavItem className="li-ins" >
                    <NavLink to="/Login">
                        <i className="fas fa-user-circle"></i>
                        Login
                    </NavLink>
                </NavItem>
                <NavItem className="li-ins" >
                    <NavLink to="/Register">
                        <i className="fas fa-user-circle"></i>
                        Register
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </>);
}

export default Header