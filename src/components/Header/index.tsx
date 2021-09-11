import { useState } from 'react';
import Logo from '../../assets/images/logo-principal.svg';

import { Container, ContentDropDown } from './styles';

function Header() {
  const [isClickCondominium, setIsClickCondominium] = useState(true);
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <ContentDropDown>

        <button type="button"
          onClick={() => setIsClickCondominium(!isClickCondominium)}>
          CONDOMÍNIOS
        </button>
        {
          isClickCondominium &&
          <div className="dropdown">
            <header>Seus condomínios</header>
            <ul className="dropdown__body">

            </ul>
          </div>
        }
      </ContentDropDown>

    </Container>
  );
}

export default Header;
