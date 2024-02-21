import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Body from "../components/body";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/constants";


export default function Songlist()
{
    const [{ token }, dispatch] = useStateProvider();
    const bodyRef = useRef();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);
    const bodyScrolled = () => {
        bodyRef.current.scrollTop >=30 
        ?setNavBackground(true) 
        :setNavBackground(false)
        
        bodyRef.current.scrollTop >=268
        ?setHeaderBackground(true) 
        :setHeaderBackground(false)
        
    }
    useEffect(() => {
        const getUserInfo = async () => {
            const {data} = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: "Bearer" + token,
                    "Content-type": "application/json",
                },
            } );
            const UserInfo = {
                userId: data.id,
                userName: data.display_name,
            };
            dispatch ({ type: reducerCases.SET_USER, UserInfo});
        };
        getUserInfo();
    }, [dispatch, token]);
    return(
        <Container>
            <div className="mp_body">
                <Sidebar />
                <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
                    <Navbar navBackground={navBackground}/>
                    <div className="body_content">
                        <Body headerBackground={headerBackground}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </Container>
    );
}

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 85vh 15vh;
  .mp_body {
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
    .body {
        height: 100%;
        width: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0.7rem;
            max-height: 2rem;
            &-thumb {
                background-color: rgba(255, 255, 255, 0.6);
            }
        }
    }
  }
`;