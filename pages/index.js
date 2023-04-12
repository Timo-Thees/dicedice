import Heading from "../components/Heading";
import styled from "styled-components";
import Genesys from "./genesys-system";

export default function Home() {
  return (
    <main>
      <Heading>DiceDice</Heading>
      <Subheading>My silly little TTRPG dice helper</Subheading>
      <Genesys />
    </main>
  );
}

const Subheading = styled.h3`
  text-align: center;
`;
