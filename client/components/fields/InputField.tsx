import { FieldProps } from 'formik';
import React from 'react';
import styled, { ThemedStyledFunction } from 'styled-components';

type InputProps = ThemedStyledFunction<'input', any, {}, never>;

export const InputField = ({
    field,
    form: { errors, touched },
    ...props
}: FieldProps & InputProps & { white: boolean }) => {
    const errorMessage = touched[field.name] && errors[field.name];
    return (
        <div>
            <Input {...field} {...props} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    );
};

const Input = styled.input<{ white: boolean }>`
    background: none;
    width: 100%;
    height: 5rem;
    margin-bottom: 1rem;
    border: none;
    border-bottom: ${({ theme }) => theme.colors.primary.sinaas} 0 solid;
    padding-bottom: 0.5rem;
    font: ${({ theme }) => theme.fonts.subtitle};
    font-weight: bold;
    color: ${({ white, theme }) => (white ? 'white' : theme.colors.dark.muddy)};
    outline: none;
    transition: all 250ms;
    :focus {
        border-bottom: ${({ theme }) => theme.colors.primary.sinaas} 0.5rem solid;
    }
`;

const ErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.danger.rose};
`;
