// import { MaxLength, Length } from 'class-validator';
import { Min } from 'class-validator';
import { ClassType, Field, InputType } from 'type-graphql';

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
    @InputType()
    class PasswordInput extends BaseClass {
        @Field()
        @Min(5)
        password: string;
    }
    return PasswordInput;
};
