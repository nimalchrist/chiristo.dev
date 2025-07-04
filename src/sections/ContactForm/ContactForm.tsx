'use client';
import SubmitButton from '@/components/Buttons/SubmitButton/SubmitButton';
import InputField from '@/components/InputField/InputField';
import TextArea from '@/components/TextArea/TextArea';
import { useFormState } from '@/hooks/useFormState';
import useLoadingError from '@/hooks/useLoadingError';
import { ContactFormData } from '@/sections/ContactForm/types';
import styles from './ContactForm.module.scss';
import toast from 'react-hot-toast';
import { ContactService } from '@/services/modules/contact';

export default function ContactForm() {
  const { values, handleChange, resetValues } = useFormState<ContactFormData>({
    name: '',
    email: '',
    summary: '',
  });
  const { loading, startLoading, failedWith, finishLoading } = useLoadingError();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startLoading();
    try {
      const safeData = JSON.parse(JSON.stringify(values));
      const contactService = new ContactService();
      await contactService.submitContactData(safeData);
      toast.success('Form submitted successfully!');
      finishLoading();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'An unexpected error occurred');
      failedWith(err instanceof Error ? err.message : 'An unexpected error occurred');
      finishLoading();
    }
    resetValues();
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <InputField
        label="Name"
        name="name"
        value={values.name}
        onChange={handleChange}
        required
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        required
      />
      <TextArea
        label="Message"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        required
      />
      <SubmitButton disabled={loading} />
    </form>
  );
}
