import styled, { keyframes } from "styled-components"
import { FUImage } from "../components/designElements";

export default function GenesysResultOverlay({setResultOverlay, advantage, disadvantage, successes, failure, triumphs, disaster, animationDelayAdvantages, animationDelaySuccesses}){
    return(
        <MakeBackgroundOpaque>
        <ResultsContainer>
            <ResultsRow>
                <LineNameAlignedRight>
                    <p>Chanchen</p>
                </LineNameAlignedRight>
                
                {advantage.map(result => {
                    if(result.negated === true){
                    return(
                        <ShowResults
                        key={result.key}
                        animationDelay={result.key}
                        secondDelay={0}
                        >
                            <NormalIcon src="/chance.png"/>
                            <NegatedIcon animationDelay={result.key} secondDelay={0} src="/chance-neutralised.png" alt="Advantage was neutralised" />
                        </ShowResults>
                        
                    )
                    } else {
                    return(
                        <ShowResults 
                            key={result.key}
                            animationDelay={result.key} 
                            secondDelay={0}
                            >
                            <NormalIcon src="/chance.png" alt="Advantage" />
                        </ShowResults>
                    )    
                    }
                })}
            </ResultsRow>
            <ResultsRow>
                <LineNameAlignedRight>
                    <p>Bedrohungen</p>
                </LineNameAlignedRight>
                {disadvantage.map(result => {
                    if(result.negated === true){
                    return(
                        <ShowResults
                        key={result.key}
                        animationDelay={result.key}
                        secondDelay={0.3}>
                        <FUImage width={25} key={result.key} src="/bedrohung-neutralised.png" alt="Disadvantage was neutralised" />
                        </ShowResults>
                        
                    )
                    } else {
                    return(
                        <ShowResults 
                        key={result.key}
                        animationDelay={result.key} 
                        secondDelay={0}>
                        <FUImage width={25} src="/bedrohung.png" alt="disadvantae" />
                        </ShowResults>
                    )    
                    }
                })}
            </ResultsRow>
            <ResultsRow>
                <LineNameAlignedRight>
                    <p>Erfolge</p>
                </LineNameAlignedRight>
                {successes.map(result => {
                    if(result.negated === true){
                    return(
                        <ShowResults
                        key={result.key}
                        animationDelay={result.key}
                        secondDelay={animationDelayAdvantages + 1}>
                        <FUImage width={25} src="/erfolg-neutralised.png" alt="Success was neutralised" />
                        </ShowResults>
                        
                    )
                    } else {
                    return(
                        <ShowResults 
                        key={result.key}
                        animationDelay={result.key}
                        secondDelay={animationDelayAdvantages + 1}>
                        <FUImage width={25} src="/erfolg.png" alt="Success" />
                        </ShowResults>
                    )    
                    }
                })}
            </ResultsRow>
            <ResultsRow>
                <LineNameAlignedRight>
                    <p>Misserfolge</p>
                </LineNameAlignedRight>
                
                {failure.map(result => {
                    if(result.negated === true){
                    return(
                        <ShowResults
                        key={result.key}
                        animationDelay={result.key}
                        secondDelay={animationDelayAdvantages + 1.3}>
                        <FUImage width={25} src="/misserfolg-neutralised.png" alt="Failure was neutralised" />
                        </ShowResults>
                        
                    )
                    } else {
                    return(
                        <ShowResults 
                        key={result.key}
                        animationDelay={result.key} 
                        secondDelay={animationDelayAdvantages +1 }>
                        <FUImage width={25} src="/misserfolg.png" alt="Failure" />
                        </ShowResults>
                    )    
                    }
                })}
            </ResultsRow>
            <ResultsRow>
                <LineNameAlignedRight>
                    <p>Katastrophen</p>
                </LineNameAlignedRight>
                {disaster.map(result => {
                    return(
                        <ShowResults 
                        key={result.key}
                        animationDelay={result.key} 
                        secondDelay={animationDelayAdvantages + animationDelaySuccesses +2}
                        >
                        <FUImage width={30} src="/katastrophe.png" alt="Disaster!" />
                        </ShowResults>
                    )
                })}
            </ResultsRow>
            <ResultsRow>
                <LineNameAlignedRight>
                    <p>Triumphe</p>
                </LineNameAlignedRight>
                {triumphs.map(result => {
                {return(
                        <ShowResults animationDelay={result.key} key={result.key} 
                        secondDelay={animationDelayAdvantages + animationDelaySuccesses + disaster.length +2}>
                        <FUImage width={30} src="/triumph.png" alt="Triumph!" />
                        </ShowResults>
                    )}
                })}
            </ResultsRow>
        </ResultsContainer>
            <button onClick={()=>setResultOverlay(false)}>OK</button>
        </MakeBackgroundOpaque>
    )
}

const MakeBackgroundOpaque = styled.div`

background-color: rgba(0, 0, 0, 0.3);
height: 100%;
position: fixed;
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
width: 100%;
z-index: 10;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ResultsContainer = styled.div`
background-color: white;
min-height: 20vh;
min-width: 30vw;
margin: 10px;
padding: 10px;
border-radius: 20px;
display: flex;
flex-direction: column;
`
const ResultsRow = styled.div`
display: flex;
flex-direction: row;
padding: 5px;
align-items: center;
`
const LineNameAlignedRight = styled.div`
display: flex;
flex-direction: row;
justify-content: right;
width: 100px;
margin-right: 10px;
`

const animatePositiveResult = keyframes`
from {
    opacity: 0.0;
}
to {
    opacity: 1;
}
`

const ShowResults = styled.div`
min-width: 50px;
animation: ${animatePositiveResult} 0.3s ease-in;
animation-delay: ${props => (props.animationDelay -1)* 1 + props.secondDelay}s;
animation-fill-mode: backwards;
`

const NormalIcon = styled.img`
top: 10px;
left: 10px;
`

const NegatedIcon = styled(NormalIcon)`
position: relative;
left: -25px;
top: 0px;
z-index: 2;
animation: animation: ${animatePositiveResult} 1s ease-in;
animation-delay: ${props => (props.animationDelay -1)* 1 + props.secondDelay + 10}s;
animation-fill-mode: backwards;
`