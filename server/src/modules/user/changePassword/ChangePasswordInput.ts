// import { MaxLength, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export class ChangePasswordInput {
    @Field()
    token: string;

    @Field()
    password: string;
}
