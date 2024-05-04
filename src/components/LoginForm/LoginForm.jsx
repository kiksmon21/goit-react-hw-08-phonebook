import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

import style from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={style.label}>
        Email
        <input className={style.input} type="email" name="email" />
      </label>
      <label className={style.label}>
        Password
        <input className={style.input} type="password" name="password" />
      </label>
      <button className={style.button} type="submit">
        Log In
      </button>
    </form>
  );
};