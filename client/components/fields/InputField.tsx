import { FieldProps } from 'formik';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const InputField = ({ field, form: _, ...props }: FieldProps & InputProps) => {
    return (
        <div>
            <Input {...field} {...props} />
        </div>
    );
};

const Input = styled.input`
    background: none;
    width: 40rem;
    height: 5rem;
    margin-bottom: 1rem;
    border: none;
    font: ${({ theme }) => theme.fonts.subtitle};
    font-weight: bold;
    color: white;
    outline: none;
`;
