import * as React from 'react';
import { ConfirmUserMutation, ConfirmUserVariables } from '../generated/apolloComponents';
import { confirmUserMutation } from '../graphql/user/mutations/confirmUser';
import { MyContext } from '../interfaces/MyContext';
import redirect from '../lib/redirect';

interface ConfirmProps {
    token: string;
}

export default class Confirm extends React.PureComponent<ConfirmProps, any> {
    static async getInitialProps({ query: { token }, apolloClient, ...ctx }: MyContext<ConfirmProps>) {
        if (!token) {
            return {};
        }
        await apolloClient.mutate<ConfirmUserMutation, ConfirmUserVariables>({
            mutation: confirmUserMutation,
            variables: { token }
        });
        redirect(ctx, '/sign-in');
        return {};
    }
    public render() {
        return 'Something went wrong';
    }
}
