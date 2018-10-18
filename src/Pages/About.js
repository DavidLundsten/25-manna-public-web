import React, { Component } from 'react';

export class About extends Component {
    render() {
        console.log(process.env.REACT_APP_25MANNA_RESULTS_SOCKET)
        return (
            <div>
                <header className="App-header">
                    About
                
        

                </header>
                <h2>Om 25 manna live results</h2>
        <p>
            Liveresultattjänsten för 25manna är skapad som ett kompetensutvecklingsprojekt
            av utvecklare på <a href="http://www.attentec.se" target="_blank">Attentec</a>.
        </p>
        <p>
            På Attentec är vi stolta över att få lägga upp till 10% av vår arbetstid på just
            kompetensutveckling. Är du en skicklig mjukvaruutvecklare, erfaren eller nyexad,
            som brinner för att skapa riktigt bra programvara och som tillsammans med oss vill
            få möjlighet till kompetensutveckling på arbetstid? Hör av dig!
            <a href="https://www.attentec.se/sv/jobb/jobba-pa-attentec/" target="_blank">
                Vi söker fler sådana som du!
            </a>
        </p>
        <p>
            Förresten, nämnde vi att hos oss är ideella engagemang en viktig merit? Det gäller
            oavsett du är tränare på klubbens nybörjarkurs, fixar laguttagningen till
            25manna eller var ansvarig för sekretariatet på tävlingen i våras.
        </p>
            </div>
        );
    }
}
