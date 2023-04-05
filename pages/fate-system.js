import styled from "styled-components"

export default function Fate(){
    return(
        <div>
        <StatsEntry>
            <OuterFlexbox>
            <div>
            <h4>boni</h4>
            <p>Gelb</p>
            <input type="number" min="0" placeholder="0"></input>
            <p>Grün</p>
            <input type="number" min="0" placeholder="0"></input>
            <p>Blau</p>
            <input type="number" min="0" placeholder="0"></input>
            </div>
            <div>
            <h4>mali</h4>
            <p>Rot</p>
            <input type="number" min="0" placeholder="0"></input>
            <p>Lila</p>
            <input type="number" min="0" placeholder="0"></input>
            <p>Schwarz</p>
            <input type="number" min="0" placeholder="0"></input>
            </div>
            </OuterFlexbox>
            <button type="submit">roll 'em bones!</button>
        </StatsEntry>
        <ResultsContainer>
        <ResultsRow><p>Triumpfe</p></ResultsRow>
        <ResultsRow><p>Erfolge</p></ResultsRow>
        <ResultsRow><p>Misserfolge</p></ResultsRow>
        <ResultsRow><p>Chanchen</p></ResultsRow>
        <ResultsRow><p>Bedrohungen</p></ResultsRow>
        <ResultsRow><p>Katastrophen</p></ResultsRow>
        </ResultsContainer>
        </div>
    )
}

const StatsEntry = styled.form`
background-color: grey;
display: flex;
flex-direction: column;
align-items: center;
`;

const OuterFlexbox = styled.div`
display: flex;
flex-direction: row;
text-align: center;
`;

const ResultsContainer = styled.div`
background-color: lightgrey;
min-height: 20vh
display: flex;
flex-direction: row;
`
const ResultsRow = styled.div`
border-style: solid;
border-width: 1px;
border-color: black;
`