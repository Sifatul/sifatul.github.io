/* eslint-disable jsx-a11y/anchor-is-valid */
import { getBasicInfo } from "./lib/Firebase";
import React from 'react';
function Navbar() {
    const [state, setstate] = React.useState({})
    
    React.useEffect(() => {
        try {
            getBasicInfo().then(basicData => { setstate({...basicData})})
        } catch (e) {
            console.error(e)
        }
    }, [])

    return (
        <nav id="navbar" class="navbar navbar-light bg-light fixed-top ">
            <a class="navbar-brand" href="#">#SIFII</a>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link" href="#about_me">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skill">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="true" aria-expanded="false">CV | Resume</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href={state.resume} target="_blank" rel="noopener noreferrer" >Resume</a> 
                        <div role="separator" class="dropdown-divider"></div>
                         <a class="dropdown-item"    href={state.resume_korean} target="_blank" rel="noopener noreferrer"  >이럭서</a>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
