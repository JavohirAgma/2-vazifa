import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cards extends Component {
    state = {
        cards: [
            {
                id: 1,
                name: "Malibu",
                color: "black",
                cost: "30000$",
                year: 2017
            },
            {
                id: 2,
                name: "Supra",
                color: "white",
                cost: "40000$",
                year: 1995
            },
            {
                id: 3,
                name: "Mers",
                color: "lightblue",
                cost: "20000$",
                year: 2015
            },
        ]
    }
    render() {
        return (
            <div className="container">
                <div className='row'>
                    <div className="col-md-12">
                        <table>
                            <thead>
                                <tr>
                                    <th>N/O</th>
                                    <th>Nomi</th>
                                    <th>Rangi</th>
                                    <th>Narxi</th>
                                    <th>Yili</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cards.map((item, index) =>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.color}</td>
                                            <td>{item.cost}</td>
                                            <td>{item.year}</td>
                                            <td>
                                                <Link to={"/login/cardstable/"+item.id+"/"+item.name+"/"+item.color+"/"+item.cost+"/"+item.year}><button className='btn btn-info'>i</button></Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
