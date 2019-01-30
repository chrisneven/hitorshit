import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { InputField } from '../components/fields/InputField';
import Layout from '../components/Layout';
import { RegisterComponent } from '../generated/apolloComponents';
export default () => {
    return (
        <Layout title={'Register'}>
            <RegisterComponent>
                {register => (
                    <Formik
                        initialValues={{ email: '', firstName: '', lastName: '', password: '' }}
                        onSubmit={async data => {
                            const response = await register({ variables: { data } });
                            console.log(response);
                        }}
                    >
                        {() => (
                            <Form>
                                <Field name="firstName" component={InputField} placeholder={'firstName'} />
                                <Field name="lastName" component={InputField} placeholder={'lastname'} />
                                <Field name="email" component={InputField} placeholder={'email'} />
                                <Field
                                    name="password"
                                    type="password"
                                    component={InputField}
                                    placeholder={'password'}
                                />
                                <button type="submit">Submit</button>
                            </Form>
                        )}
                    </Formik>
                )}
            </RegisterComponent>
        </Layout>
    );
};
