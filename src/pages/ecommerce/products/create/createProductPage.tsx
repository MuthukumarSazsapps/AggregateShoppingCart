// src/components/SimpleForm.js

import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from 'rizzui';
import { cn } from 'utils';

const CreateProductPages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('[&_label.block>span]:font-medium')}>
      <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11"></div>

      {/* <FormFooter
            isLoading={isLoading}
            submitBtnText={slug ? 'Update Product' : 'Create Product'}
          /> */}
    </form>
  );
};

export default CreateProductPages;
