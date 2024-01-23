import { MainButton } from '../../components/UI/Buttons/MainButton';

const meta = {
  title: 'UI/MainButton',
  component: MainButton,
  tags: ['autodocs'],
};

export default meta;

export const Warning = {
  args: {
    theme: 'is-warning',
    size: 'is-small',
    disabled: false,
  },
};

export const Danger = {
  args: {
    theme: 'is-danger',
    size: 'is-large',
    disabled: false,
  },
};
