import styled from 'styled-components';
import { ReactElement, FunctionComponent } from 'react';

const HeaderBlock = styled.header`
  ${(props) => `
  text-align: center;
  font-size: 2em;
  background-color: ${props.theme['$brand-primary-color']};
  color: ${props.theme['$btn-primary-color']};
  padding: 10px;
  outline: 0px;
  text-transform: uppercase;
  font-weight: bold;
`};
`;

type HeaderProps = {
  title: string;
};

const Header: FunctionComponent<HeaderProps> = ({
  title,
}: HeaderProps): ReactElement => {
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default Header;
