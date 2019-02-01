import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { Component, Fragment } from 'react';
import styled from 'styled-components';
import MenuIcon from '../atoms/MenuIcon';
import { PrimaryButton } from '../atoms/PrimaryButton';
import SubTitle from '../atoms/SubTitle';
import { InputField } from '../fields/InputField';

class OverlayMenu extends Component {
    state = { open: false };

    handleOnClick = () => this.setState({ open: !this.state.open });
    render() {
        const { open } = this.state;
        return (
            <Fragment>
                <MenuIcon onClick={this.handleOnClick} variant={open ? 'light' : 'dark'} />
                <Formik initialValues={{ email: '', password: '' }} onSubmit={values => console.log(values)}>
                    {() => (
                        <Form>
                            <Container open={open}>
                                <SignIn>
                                    <SubTitle variant={'light'}>Sign in:</SubTitle>
                                    <Field placeholder="email" name="email" white component={InputField} />
                                    <Field
                                        placeholder="password"
                                        name="password"
                                        white
                                        component={InputField}
                                        type="password"
                                    />
                                    <ButtonsWrapper>
                                        <PrimaryButton variant={'light'}>Sign in</PrimaryButton>
                                        <Link href="/register">
                                            <PrimaryButton onClick={this.handleOnClick} variant={'secondary'}>
                                                Register
                                            </PrimaryButton>
                                        </Link>
                                    </ButtonsWrapper>
                                </SignIn>
                            </Container>
                        </Form>
                    )}
                </Formik>
            </Fragment>
        );
    }
}

export default OverlayMenu;

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
const Container = styled.div<{ open: boolean }>`
    top: 0;
    right: 0;
    transform: translate(100%, -100%);
    transform: ${({ open }) => open && 'translate(0, 0)'};
    -webkit-transform: ${({ open }) => open && 'translate(0, 0)'};
    transition: transform 250ms, opacity 400ms, -webkit-transform 250ms;
    opacity: ${({ open }) => (open ? '1' : '0')};
    position: fixed;
    background: ${({ theme }) => theme.colors.dark.muddy};
    height: 100vh;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
