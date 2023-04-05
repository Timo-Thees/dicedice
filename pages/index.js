import Heading from "../components/Heading";
import styled from "styled-components";
import Fate from "./fate-system";

export default function Home() {
  return (
    <main>
      <Heading>DiceDice</Heading>
      <Subheading>My silly little TTRPG dice helper</Subheading>
      <Fate />
    </main>
  );
}

const Subheading = styled.h3`
  text-align: center;
`;
