import styled from "styled-components/macro";
import {COLORS} from "../../../constants";
import SearchIcon from "../../icons/SearchIcon";

const SearchInput = ({label, ...delegated}) => {
    return (
        <Label>
            <Input {...delegated} placeholder="Title"/>
            <Icon>
                <SearchIcon />
            </Icon>
        </Label>
    );
}

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  border: none;
  background: ${COLORS.white};
  padding: 8px 40px;
  font-size: 0.875rem;
  color: ${COLORS.black};
  border-radius: 4px;
  outline-offset: 4px;
  width: 100%;

  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 12px;
  bottom: 0;
`

export default SearchInput;
