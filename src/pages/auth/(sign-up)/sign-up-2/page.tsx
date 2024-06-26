import AuthWrapperTwo from 'common/auth-layout/auth-wrapper-two';
import SignUpForm from './sign-up-form';
import { metaObject } from 'config/site.config';

export const metadata = {
  ...metaObject('Sign Up 2'),
};

export default function SignUp2() {
  return (
    <AuthWrapperTwo title="Sign Up!" isSocialLoginActive={true}>
      <SignUpForm />
    </AuthWrapperTwo>
  );
}
