import { useContext } from 'react';
import { CondominiosContext } from '../../components/context/CondominiosContext';
import Header from '../../components/Header';

import {infosSession} from '../../services/storage';
import { formaterDate } from '../../utils/modifierFormat';

import { Container, Content, Main } from './styles';

function UserProfile() {
  const {listCondos} = useContext(CondominiosContext);
  const infosSessionCurrent = infosSession();
  console.log(infosSessionCurrent, listCondos);

  return (
    <Container>
      <Header/>
      <Content>
        <section className="agenda">AGENDA</section>
        <Main>
          <div className="main-top">
            <header>

              <div>
                <h1>{listCondos.length}</h1>
                <h2>{listCondos.length > 0 ? 'condomínios' : 'condomínio'} cadastrados</h2>
              </div>

            </header>
            <header>
              <img src={infosSessionCurrent.administrator.avatar_url} alt="logo" />
            </header>
          </div>
          <section className="main-center">
            <div className="center__bloc profile">
              <div className="title">
                <h1>Informações do usuário</h1>
              </div>

              <ul>
                <li>
                  <span> Usuário </span>
                  <p> {infosSessionCurrent.administrator?.name} </p>
                </li>
                <li>
                  <span> Email </span>
                  <p> {infosSessionCurrent.administrator?.email} </p>
                </li>
                <li>
                  <span> CNPJ </span>
                  <p> {infosSessionCurrent.administrator?.cnpj} </p>
                </li>
                <li>
                  <span> Data de criação </span>
                  <p> {formaterDate(infosSessionCurrent.administrator?.created_at)} </p>
                </li>

              </ul>
            </div>
            <div className="center__bloc condominios">
              <div className="title">
                <h1>Condomínios</h1>
                <button>Ver todos</button>

              </div>
            </div>

          </section>
        </Main>

      </Content>
    </Container>
  );
}

export default UserProfile;
