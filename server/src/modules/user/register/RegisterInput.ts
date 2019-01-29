// import { MaxLength, Length } from 'class-validator';
import { IsEmail, Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { PasswordMixin } from '../../shared/PasswordInput';
import { isEmailAlreadyExist } from './isEmailAlreadyExist';

@InputType()
export class RegisterInput extends PasswordMixin(class {}) {
    @Field()
    @Length(1, 255)
    firstName: string;

    @Field()
    @Length(1, 255)
    lastName: string;

    @Field()
    @IsEmail()
    @isEmailAlreadyExist({ message: 'email already in use' })
    email: string;
}
