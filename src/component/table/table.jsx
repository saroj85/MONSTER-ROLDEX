import React, { useState } from 'react';
import './table.style.css'


const Newtable = (props) => {

    const [data, setData] = useState([

        { id: "1", name: "saroj Kumar", company: "TheBigStack.com", email: "Lend4saroj@gmail.com" },
        { id: "2", name: "kaushal rai", company: "TheBigStack.com", email: "kaushalrai@gmail.com" },
        { id: "3", name: "pradeep Kumar", company: "softech.com", email: "aradeep@gmail.com" },
        { id: "4", name: "ajeet Kumar", company: "cyberlinks.com", email: "Ljeetkumar@gmail.com" },
        { id: "5", name: "santosh Kumar", company: "lavkush@gmail.com", email: "send4saroj@gmail.com" },
        { id: "6", name: "saroj Kumar", company: "TheBigStack.com", email: "send4saroj@gmail.com" }
        
    ])


    const filterdData = (key) => {
        let temparry = [...data];
        temparry.sort((first,last) => {
            var nameA = first.name;
            var nameB = last.name;
            if(nameA < nameB) return -1
            if(nameA > nameB) return 1
            return 0;
        })
        setData(temparry);
    };

    

    // const filtreDataName = () => {
    //    filterdData(data, name, setData)
    // }

    // const filterdataComp = () => {
    //     let temarry = [...data];
    //     temarry.sort((a, b) => {
    //         var nameA = a.company.toLowerCase(), nameB = b.company.toLowerCase()
    //         if (nameA < nameB)
    //             return -1
    //         if (nameA > nameB)
    //             return 1
    //         return 0
    //     })
    //     setData(temarry);
    // }


    return (
        <div>
            <h1>Table </h1>
            <table>
                <thead>
                    <tr>
                        <td style={{ background: "#a1a1a1" }} onClick={() => filterdData("name")} >Name &nbsp;&nbsp;<i className="fas fa-sort-up"></i></td>
                        <td style={{ background: "#a1a1a1" }} >Company &nbsp;&nbsp;<i className="fas fa-sort-up"></i></td>
                        <td style={{ background: "#a1a1a1" }} >Email &nbsp;&nbsp;<i className="fas fa-sort-up"></i></td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 && data.map((em, index) => {
                        return (
                            <tr key={em.id}>
                                <td>{em.name}</td>
                                <td>{em.company}</td>
                                <td>{em.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}



export default Newtable;