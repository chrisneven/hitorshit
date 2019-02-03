import { Field, Form, Formik } from 'formik';
import Router from 'next/router';
import styled from 'styled-components';
import { PrimaryButton } from '../components/atoms/PrimaryButton';
import SubTitle from '../components/atoms/SubTitle';
import { InputField } from '../components/fields/InputField';
import Layout from '../components/Layout';
import { LoginComponent } from '../generated/apolloComponents';

export default () => {
    return (
        <Layout title={'Sign in'}>
            <LoginComponent>
                {login => (
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={async (data, { setErrors }) => {
                            const response = await login({ variables: data });
                            if (response && response.data && !response.data.login) {
                                setErrors({ email: 'invalid login' });
                                return;
                            }
                            Router.push('/');
                        }}
                    >
                        {() => (
                            <Form>
                                <SignIn>
                                    <SubTitle variant={'dark'}>Sign in:</SubTitle>
                                    <Field placeholder="email" name="email" component={InputField} />
                                    <Field
                                        placeholder="password"
                                        name="password"
                                        component={InputField}
                                        type="password"
                                    />
                                    <ButtonsWrapper>
                                        <PrimaryButton variant={'dark'}>Sign in</PrimaryButton>
                                        <PrimaryButton onClick={() => Router.push('/register')} variant={'secondary'}>
                                            Register
                                        </PrimaryButton>
                                    </ButtonsWrapper>
                                </SignIn>
                            </Form>
                        )}
                    </Formik>
                )}
            </LoginComponent>
        </Layout>
    );
};

const SignIn = styled.div`
    display: flex;
    flex-direction: column;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    /* justify-content: space-between; */
    width: 40rem;
    ${PrimaryButton} {
        margin-right: 2rem;
    }
`;
