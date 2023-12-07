import { SigninBtn } from '../../components/UI/Buttons/SigninBtn';

const meta = {
  title: 'UI/SigninBtn',
  component: SigninBtn,
  tags: ['autodocs'],
};

export default meta;

export const Primary = {
  args: {
    theme: 'purple',
    size: 'l',
    label: 'Войти',
  },
};

export const Secondary = {
  args: {
    theme: 'green',
    size: 'xl',
    label: 'Уйти',
  },
};
