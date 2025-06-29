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
      console.log('Form submitted:', values);
      const safeData = JSON.parse(JSON.stringify(values));
      const contactService = new ContactService()
      const docId = await contactService.submitContactData(safeData)
      console.log('Document written with ID:', docId);
      // add the firebase firestore service responsible for saving the form data
      // await someFirebaseApiCall();
      // For example:
      // const db = getFirestore();
      // const docRef = await addDoc(collection(db, 'contactForms'), formValues);
      // console.log('Document written with ID: ', docRef.id);
      toast.success('Form submitted successfully!');
      finishLoading();
    } catch(err) {
      console.error('Error submitting contact form:', err);
      failedWith('Unexpected error');
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
