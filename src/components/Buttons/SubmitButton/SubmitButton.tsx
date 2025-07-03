import BaseButton from '../BaseButton/BaseButton';
import { SubmitButtonProps } from './types';

const SubmitButton = ({ ...props }: SubmitButtonProps) => {
  return (
    <BaseButton
      type="submit"
      variant="primary"
      {...props}
    >
      Send Message
    </BaseButton>
  );
};
export default SubmitButton;
