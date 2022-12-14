import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map(exp => {
        return (
            <Card 
                key={exp.id}
                exp={exp}
            />
        )
    })
    return(
        <div className="app">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}