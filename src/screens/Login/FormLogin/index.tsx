import Input from '../../../components/UI/Input/intex';

import * as yup from 'yup';

import { useFormik } from 'formik';

import { Form } from './styles';
import api from '../../../services';
import Toast from '../../../components/UI/Toast';
import { SaveSession } from '../../../services/storage';

function FormLogin() {
  const myToast = Toast();

  const validationSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('Email obrigatório'),
    password: yup.string().min(8, 'Senha inválida').required('*Obrigatório'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
    validationSchema,
  });

  async function onSubmit(user: any) {
    await api.post('/administrators/sessions', user).then(response => {
      console.log(response);
      SaveSession(response.data, 24);
      myToast.addNewToast('Login realizado com sucesso!', 'success');
    }).catch(error => {
      myToast.addNewToast(`${error.response.data.message}`, 'error');
    });

    console.log(user);
  }
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>
        <p>Email</p>
        <Input
          placeholder="exemplo@email.com"
          name="email"
          id="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
      </label>
      <label>
        <p>Senha</p>
        <Input
          placeholder="senha"
          name="password"
          id="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
      </label>
      <button type="submit">Entrar</button>
    </Form>
  );
}

export default FormLogin;
