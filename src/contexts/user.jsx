import React from "react";
import { createContext, useState } from "react";
import axios from "axios";


const UserData = createContext();

function ContextUserData({ children }) {

    let [data, setData] = useState({
        isActive: false,
        user: null,
    });


    async function setDataUser(urlBd, form) {
        const dataUser = await axios.post(urlBd, form);
         console.log((dataUser.data));
        if (typeof dataUser.data !== "string") {
            setData((prevState) => {
                const newData = { ...prevState };
                newData.user = dataUser.data || { login: "", coins: "" };
                newData.isActive = true;
                return newData;
            });
        }
    }


    // async function getDataUser(urlBd, data) {
    //     const dataUser = await axios.get(urlBd, data);
    //     return dataUser;
    // }

    return (
        <UserData.Provider value={[setDataUser, setData, data]}>
            {children}
        </UserData.Provider>
    )
}

export {ContextUserData, UserData};