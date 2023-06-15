import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/userAPI';
import { Loading } from '../loading/loading';

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const validInput = input.length < 3;

  const login = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await createUser({ name: input });
    setLoading(false);
    navigate('/search');
  };

  // && oq redenriza
  return (
    <>
      { loading === false && (
        <form onSubmit={ login }>
          <input
            type="text"
            data-testid="login-name-input"
            placeholder="Name"
            onChange={ (event) => setInput(event.target.value) }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ validInput }
          >
            Entrar
          </button>
        </form>
      )}
      {loading === true && <Loading />}
    </>
  );
}

export default Login;
