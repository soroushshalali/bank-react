import React, { Component } from 'react';
import './bankStyle.css';
let bestand = 0;
class Bank extends Component {
    state = {
    }
    plus = () => {
        if (document.getElementById("eingabe").value != NaN) {
            bestand += Number(document.getElementById("eingabe").value);
            document.getElementById("eingabe").value = "";
        }
        console.log(bestand);
        document.getElementById("show").innerText = bestand + "$";
    }
    min = () => {
        if (document.getElementById("eingabe").value != NaN) {
            bestand -= Number(document.getElementById("eingabe").value);
            document.getElementById("eingabe").value = "";
        }
        console.log(bestand);
        document.getElementById("show").innerText = bestand + "$";
    }
    render() {
        return (
            <section className="main-sec" >
                <h2>Dein Girokonto</h2>
                <h1 id="show" >0$</h1>
                <input id="eingabe" type="Number" placeholder="Gib ein Geldbetrag ein" /><br></br>
                <div>
                    <button onClick={this.plus} >+</button>
                    <button onClick={this.min} >-</button>
                </div>
            </section >
        );
    }
}
export default Bank;