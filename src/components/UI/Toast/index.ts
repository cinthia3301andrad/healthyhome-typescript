import { AppearanceTypes, useToasts } from 'react-toast-notifications';

const Toast = () => {

  const { addToast } = useToasts();

  function addNewToast(mensagem: string, myType: AppearanceTypes) {
    addToast(mensagem, {appearance: myType, autoDismiss: true});
  }

  return {
    addNewToast
  };
};

/*
  Possíveis aparencias
  'error' | 'info' | 'success' | 'warning';

  Para sumir sozinho
  autoDismiss: true,

*/

export default Toast;
