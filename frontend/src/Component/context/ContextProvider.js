import React, { createContext, useState } from 'react'

export const adddata = createContext("")
export const updatedata = createContext("")
export const deletedata = createContext("")

const ContextProvider = ({ children }) => {

    const [udata, setUdata] = useState("")
    const [update, setUpdate] = useState("")
    const [dlt, setDelete] = useState("")

    return (
        <adddata.Provider value={{ udata, setUdata }}>
            <updatedata.Provider value={{ update, setUpdate }}>
                <deletedata.Provider value={{ dlt, setDelete }}>

                    {children}
                </deletedata.Provider>
            </updatedata.Provider>
        </adddata.Provider>
    )
}

export default ContextProvider;
