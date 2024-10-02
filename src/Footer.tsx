import React from "react"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
export const Footer = () => {
    return <footer className="container">

        <div className="left">Copyright © 2018 Toxin отель. Все права защищены.</div>
        <ul className="right">
            <li><FaFacebookSquare></FaFacebookSquare></li>
            <li><FaTwitter></FaTwitter></li>
            <li><CiInstagram></CiInstagram></li>
        </ul>
    </footer>
}