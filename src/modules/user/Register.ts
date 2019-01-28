import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import bcrypt from 'bcryptjs';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';
@Resolver()
export class RegisterResolver {
    @Query(() => String, { description: 'Hello world is a beautiful lorem ipsum' })
    async hello() {
        console.log('');
        return 'hello world';
    }

    @Mutation(() => User, { description: 'Registering a user' })
    async register(@Arg('data') { email, firstName, lastName, password }: RegisterInput): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({ firstName, lastName, email, password: hashedPassword }).save();
        return user;
    }
}
