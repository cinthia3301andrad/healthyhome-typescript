import FormLogin from './FormLogin';

import Logo from '../../assets/images/logo-principal.svg';
import { Container, Content, SectionLeft, SectionRight } from './styles';

function Login() {
  return (
    <Container>
      <Content>
        <SectionLeft>
          <h1>Bem-vindo de volta!</h1>
          <footer>
            <p>Ainda não tem uma conta?</p>
            <button>Cadastre-se</button>
          </footer>

        </SectionLeft>
        <SectionRight>
          <img src={Logo} alt="Logo Healthy Home" />
          <FormLogin/>
        </SectionRight>
      </Content>
    </Container>
  );
}
export default Login;
