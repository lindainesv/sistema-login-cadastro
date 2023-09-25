import React, { useState } from "react";
import Header from "../components/Header";
import LoginBtn from "../components/LoginBtn";
import '../styles/pages/register.css';


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header page="Registro" SecondNavegationLink={LoginBtn} />

      <section className="user_register_area">
        <form onSubmit={submit}>
          <h1>Digite seus dados</h1>
          <label htmlFor="name">
            <input
              className="name_input"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
              required="required"
            />
          </label>

          <label htmlFor="email">
            <input
              className="email_input"
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required="required"
            />
          </label>

          <label htmlFor="password">
            <input
              className="password_input"
              id="password"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Senha"
              required="required"
            />
          </label>

          <label htmlFor="password_confirmation">
            <input
              className="password_confirmation_input"
              id="password_confirmation"
              type="text"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              placeholder="Confirme sua senha"
              required="password_confirmation"
            />
          </label>

          <button type="submit">
            Registrar
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
