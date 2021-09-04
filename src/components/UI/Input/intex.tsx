
import { InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { MdWarning } from 'react-icons/md';
import Tooltip from '../Tooltip';

import { Container } from './styles';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement>{
  error: string | undefined;
  touched: boolean | undefined;

}
const Input = ({ error, touched, ...rest }: PropsInput) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isFocused={isFocused} error={error ?? ''}
      touched={touched ?? false}>
      <input {...rest} onFocus={() => setIsFocused(true)} />
      {error && touched && (
        <Tooltip title={error} left="70%" color="#FF7575" width="150px">
          <MdWarning color="#FF7575" size={20} />
        </Tooltip>
      )}
    </Container>
  );
};

export default Input;
