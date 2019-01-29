import { Arg, ClassType, Field, InputType, Mutation, Resolver, UseMiddleware } from 'type-graphql';
import { Middleware } from 'type-graphql/interfaces/Middleware';
import { Track } from '../../entity/Track';
import { User } from '../../entity/User';
import { RegisterInput } from './register/RegisterInput';

function createResolver<T extends ClassType, X extends ClassType>(
    suffix: string,
    returnType: T,
    inputType: X,
    entity: any,
    middleware?: Middleware<any>[]
) {
    @Resolver()
    class BaseResolver {
        @Mutation(() => returnType, { name: `create${suffix}` })
        @UseMiddleware(...(middleware || []))
        async create(@Arg('data', () => inputType) data: any): Promise<User> {
            return entity.create(data).save();
        }
    }

    return BaseResolver;
}

@InputType()
class TrackInput {
    @Field()
    name: string;
    @Field()
    scUrl: string;
}

export const CreateUserResolver = createResolver('User', User, RegisterInput, User);
export const CreateTrackResolver = createResolver('Track', Track, TrackInput, Track);
