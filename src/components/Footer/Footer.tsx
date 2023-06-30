import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import DreadfulLogo from "../icons/DreadfulLogo";
import AddGoogleLogo from "../icons/AddGoogleLogo";
import AddAppleLogo from "../icons/AddAppleLogo";

const Footer = () => {
    return (
        <Wrapper>
            <DreadfulLogo/>
            <Adds>
                <AddButton>
                    <AddLogo>
                        <AddAppleLogo/>
                    </AddLogo>
                    <AddButtonText>Available on the</AddButtonText>
                    <AddButtonTitle>App Store</AddButtonTitle>
                </AddButton>
                <AddButton>
                    <AddLogo>
                        <AddGoogleLogo/>
                    </AddLogo>
                    <AddButtonText>Get it on</AddButtonText>
                    <AddButtonTitle>Google Play</AddButtonTitle>
                </AddButton>
            </Adds>
            <CopyRight>
                © Copyright 2022 Dreadful Tomatoes. All rights reserved.
            </CopyRight>
        </Wrapper>
    )
}

const Wrapper = styled(MaxWidthWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
`;
const Adds = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const AddButton = styled.button`
  display: grid;
  grid-template-areas: "logo text" "logo title";
  gap: 0 1rem;
  align-items: center;
  background-color: var(--color-black);
  border: var(--color-white) 1px solid;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-urgent);
  }
`;

const AddButtonText = styled.span`
  color: var(--color-white);
  font-size: 0.8rem;
  grid-area: text;
`;

const AddButtonTitle = styled.span`
  color: var(--color-white);
  font-size: 1rem;
  font-weight: bold;
  grid-area: title;
`;

const AddLogo = styled.div`
  grid-area: logo;

`;

const CopyRight = styled.div`
  color: var(--color-white);
  font-size: 0.8rem;
  text-align: center;
  padding: 1rem 0;
`;


export default Footer;
