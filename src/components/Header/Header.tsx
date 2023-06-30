import styled from 'styled-components/macro'
import DreadfulLogo from "../../icons/DreadfulLogo";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

export const Header = () => {
    return (
        <header>
            <Row>
                <DreadfulLogo/>
            </Row>
        </header>
    )
}

const Row = styled(MaxWidthWrapper)``;
