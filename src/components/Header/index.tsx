import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/logo-principal.svg';
import { CondominiosContext } from '../context/CondominiosContext';

import { Container, ContentDropDown } from './styles';

function Header() {
  const {listCondos} = useContext(CondominiosContext);
  const [isClickCondominium, setIsClickCondominium] = useState(false);

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
        (
          listCondos.length > 0 ? (
            listCondos.map(condo => {
              return ( <div className="dropdown">
                <header>Seus condomínios</header>
                <ul className="dropdown__body">
                  <li>{condo}</li>
                </ul>
              </div>);
            })
          ): (
            <div className="dropdown">
              <header>Seus condomínios</header>
              <ul className="dropdown__body">
                <li>Você não possui condomínios cadastrados</li>
              </ul>
            </div>
          )
        )}

      </ContentDropDown>

    </Container>
  );
}

export default Header;
