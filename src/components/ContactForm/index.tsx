import React from 'react';
import { useState } from 'react';
import { produce } from 'immer';
import classNames from 'classnames';
type Props = {
};

type FormErrors = {
  name: boolean;
  contact: boolean;
  body: boolean;
};

export const ContactForm: React.SFC<Props> = () => {

  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [errors, setErrors] = useState<FormErrors>({
    name: false,
    contact: false,
    body: false,
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
    setErrors(produce(errors, (draft) => {
      draft.name = !event.target.value;
    }));
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setContact(event.target.value);
    setErrors(produce(errors, (draft) => {
      draft.contact = !event.target.value;
    }));
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setBody(event.target.value);
    setErrors(produce(errors, (draft) => {
      draft.body = !event.target.value;
    }));
  };

  const validate = (): FormErrors => {
    return {
      name: !name,
      contact: !contact,
      body: !body,
    };
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const errors = validate();
    
    setSubmitted(true);
    setErrors(errors);
    
    if (!formIsValid(errors)) {
      event.preventDefault();
      return;
    }
  };

  const disabled = submitted && !formIsValid(errors);

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      netlify-honeypot="bot-field"
    >
      <div className="field">
        <label className="label">نام</label>
        <div className="control">
          <input
            name="name"
            className={classNames("input", getFieldClass(submitted, errors.name))}
            type="text"
            placeholder="نام"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        {submitted && errors.name ? <p className="help is-danger">لطفا نام و نام‌خانوادگی خود را بنویسید</p> : null}
      </div>
      <div className="field">
        <label className="label">تماس</label>
        <div className="control">
          <input
            className={classNames("input", getFieldClass(submitted, errors.contact))}
            type="text"
            placeholder="شماره تماس یا آدرس ایمیل"
            name=""
            value={contact}
            onChange={handleContactChange}
          />
        </div>
        {submitted && errors.contact ? <p className="help is-danger">لطفا شماره تماس یا آدرس ایمیل خود را بنویسید</p> : null}
      </div>
      <div className="field">
        <label className="label">پیام</label>
        <div className="control">
          <textarea
            className={classNames("textarea", getFieldClass(submitted, errors.body))}
            placeholder="متن"
            rows={8}
            name="body"
            value={body}
            onChange={handleMessageChange}
          />
        </div>
        {submitted && errors.body ? <p className="help is-danger">لطفا متن درخواست خود را بنویسید</p> : null}
      </div>
      <div className="field">
        <div className="control">
          <button
            type="submit"
            className="button is-primary is-medium is-outlined"
            disabled={disabled}
          >
            ارسال
          </button>
        </div>
      </div>
      <input type="hidden" name="form-name" value="contact" />
    </form>
  );
};

const formIsValid = (errors: FormErrors): boolean => {
  return Object.values(errors).every(r => !r);
};

const getFieldClass = (submitted: boolean, hasError: boolean): string => {
  if (submitted) {
    return hasError ? 'is-danger' : 'is-success';
  }
  return '';
}