'use client';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { SubmitHandler } from 'react-hook-form';
import { Button } from 'rizzui';
import { Input } from 'rizzui';
import { useMedia } from 'react-use';
import { Form } from 'common/form';
import { Text } from 'rizzui';
import { routes } from 'config/routes';
import { forgetPasswordSchema, ForgetPasswordFormFieldTypes } from 'utils/types';

const initialValues = {
  email: '',
};

export default function ForgetPasswordForm() {
  const [reset, setReset] = useState({});
  const isMedium = useMedia('(max-width: 1200px)', false);

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldTypes> = data => {
    console.log('Forgot password form data->', data);
    toast.success(
      <Text>
        Reset link sent to this email:{' '}
        <Text as="b" className="font-semibold">
          {data.email}
        </Text>
      </Text>,
    );
    setReset(initialValues);
  };

  return (
    <div className="xl:pe-12 2xl:pe-20">
      <Form<ForgetPasswordFormFieldTypes>
        validationSchema={forgetPasswordSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
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
              color="info"
              {...register('email')}
              error={errors.email?.message}
            />
            <Button className="w-full" type="submit" size={isMedium ? 'lg' : 'xl'} color="info">
              Reset Password
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 lg:mt-9 xl:text-base">
        Don’t want to reset?{' '}
        <Link
          to={routes.auth.signUp5}
          className="font-semibold text-gray-700 transition-colors hover:text-primary">
          Sign Up
        </Link>
      </Text>
    </div>
  );
}
