'use client';

import { Link } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { Input } from 'rizzui';
import { Button } from 'rizzui';
import { Password } from 'rizzui';
import { Switch } from 'rizzui';
import { useMedia } from 'react-use';
import { Text } from 'rizzui';
import { Form } from 'common/form';
import { routes } from 'config/routes';
import { LoginSchema, LoginFormFieldTypes } from 'utils/types';

const initialValues: LoginFormFieldTypes = {
  username: 'admin@admin.com',
  password: 'admin',
  rememberMe: true,
};

export default function SignInForm() {
  const isMedium = useMedia('(max-width: 1200px)', false);
  const onSubmit: SubmitHandler<LoginFormFieldTypes> = data => {
    console.log('Sign in form data', data);
  };

  return (
    <>
      <Form<LoginFormFieldTypes>
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
        useFormProps={{
          mode: 'onChange',
          defaultValues: initialValues,
        }}>
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="email"
              size={isMedium ? 'lg' : 'xl'}
              label="Email"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
              {...register('username')}
              error={errors.username?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size={isMedium ? 'lg' : 'xl'}
              className="[&>label>span]:font-medium"
              {...register('password')}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between lg:pb-2">
              <Switch variant="active" label="Remember Me" {...register('rememberMe')} />
              <Link
                to={routes.auth.forgotPassword3}
                className="h-auto p-0 text-sm font-semibold text-gray-600 underline transition-colors hover:text-primary hover:no-underline">
                Forget Password?
              </Link>
            </div>

            <Button className="w-full" type="submit" size={isMedium ? 'lg' : 'xl'}>
              Sign In
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-5 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
        Don’t have an account?{' '}
        <Link
          to={routes.auth.signUp3}
          className="font-semibold text-gray-700 transition-colors hover:text-gray-1000">
          Sign Up
        </Link>
      </Text>
    </>
  );
}
