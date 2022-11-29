import React, { useState } from "react";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import * as styles from "./emailform.module.scss";
export const EmailForm = () => {
  type IState = "UNSUBMITTED" | "SUBMITTED";
  const [state, setState] = useState<IState>("UNSUBMITTED");
  const initialState = {
    email: "",
    firstName: "",
    lastName: "",
  };
  const [form, setForm] = useState(initialState);
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setState("SUBMITTED");
      setForm(initialState);
      setTimeout(() => {
        setState("UNSUBMITTED");
      }, 5000);
    } catch (error) {}
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm((current) => ({ ...current, [name]: value }));

    return;
  };
  if (state === "UNSUBMITTED") {
    return (
      <div className={styles.navContainer}>
        <div>
          <p>Sign up to our Newsletter</p>
        </div>
        <form className={styles.form} onSubmit={submitHandler}>
          <TextInput
            type="text"
            required
            name="firstName"
            id="firstName"
            placeholder="John"
            value={form.firstName}
            onChange={changeHandler}
          />
          <TextInput
            type="text"
            required
            name="lastName"
            id="lastName"
            value={form.lastName}
            onChange={changeHandler}
            placeholder="Smith"
          />
          <TextInput
            type="email"
            required
            name="email"
            id="email"
            value={form.email}
            onChange={changeHandler}
            placeholder="Email"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
  return <div className={styles.complete}>Thank You !</div>;
};
