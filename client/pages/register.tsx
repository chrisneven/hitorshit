import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { PrimaryButton } from '../components/atoms/PrimaryButton';
import Title from '../components/atoms/Title';
import { InputField } from '../components/fields/InputField';
import Layout from '../components/Layout';
import { RegisterComponent } from '../generated/apolloComponents';
export default () => {
    return (
        <Layout title={'Register'}>
            <RegisterComponent>
                {register => (
                    <Formik
                        validateOnBlur={false}
                        validateOnChange={false}
                        initialValues={{ email: '', firstName: '', lastName: '', password: '' }}
                        onSubmit={async (data, { setErrors }) => {
                            try {
                                const response = await register({ variables: { data } });
                            } catch (e) {
                                const errors: { [key: string]: string } = {};
                                e.graphQLErrors[0].validationErrors.forEach((validationError: any) => {
                                    Object.values(validationError.constraints).forEach((message: any) => {
                                        errors[validationError.property] = message;
                                    });
                                });
                                setErrors(errors);
                            }
                        }}
                    >
                        {() => (
                            <Form>
                                <Title>Register</Title>
                                <Field name="firstName" component={InputField} placeholder={'firstname'} />
                                <Field name="lastName" component={InputField} placeholder={'lastname'} />
                                <Field name="email" component={InputField} placeholder={'email'} />
                                <Field
                                    name="password"
                                    type="password"
                                    component={InputField}
                                    placeholder={'password'}
                                />
                                <PrimaryButton variant={'dark'} type="submit">
                                    Submit
                                </PrimaryButton>
                            </Form>
                        )}
                    </Formik>
                )}
            </RegisterComponent>
        </Layout>
    );
};
