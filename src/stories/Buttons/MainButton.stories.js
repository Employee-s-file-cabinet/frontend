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
    label: 'Warning',
    disabled: false,
  },
};

export const Danger = {
  args: {
    theme: 'is-danger',
    size: 'is-large',
    label: 'Danger',
    disabled: false,
  },
};
