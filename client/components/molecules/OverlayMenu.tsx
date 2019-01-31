import { Field, Form, Formik } from 'formik';
import { Component, Fragment } from 'react';
import styled from 'styled-components';
import MenuIcon from '../atoms/MenuIcon';
import { PrimaryButton } from '../atoms/PrimaryButton';
import { InputField } from '../fields/InputField';

class OverlayMenu extends Component {
    state = { open: false };

    handleOnClick = () => this.setState({ open: !this.state.open });
    render() {
        const { open } = this.state;
        return (
            <Fragment>
                <MenuIcon onClick={this.handleOnClick} variant={open ? 'light' : 'dark'} />
                <Container open={open}>
                    <Formik initialValues={{ username: '', password: '' }} onSubmit={values => console.log(values)}>
                        {() => (
                            <Form>
                                {' '}
                                <Field placeholder="username" name="username" component={InputField} />
                                <Field placeholder="password" name="password" component={InputField} type="password" />
                                <PrimaryButton>Sign in</PrimaryButton>
                                <a>signup</a>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </Fragment>
        );
    }
}

export default OverlayMenu;

const Container = styled.div<{ open: boolean }>`
    top: 0;
    right: 0;
    transform: translate(100%, -100%);
    transform: ${({ open }) => open && 'translate(0, 0)'};
    -webkit-transform: ${({ open }) => open && 'translate(0, 0)'};

    transition: all 250ms;
    /* opacity: ${({ open }) => (open ? '1' : '0')}; */
    position: fixed;
    background: ${({ theme }) => theme.colors.dark.muddy};
    height: 100vh;
    width: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

`;
