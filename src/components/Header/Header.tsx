import styled from 'styled-components/macro'
import DreadfulLogo from "../icons/DreadfulLogo";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

export const Header = () => {
    return (
        <HeaderWrapper>
            <DreadfulLogo/>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled(MaxWidthWrapper)``;
