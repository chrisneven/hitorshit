import { Resolver, Ctx, Query } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { User } from '../../entity/User';
@Resolver()
export class MeResolver {
    @Query(() => User, { description: 'Get the current logged in user', nullable: true })
    async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
        if (!ctx.req.session!.userId) {
            return undefined;
        }
        return User.findOne(ctx.req.session!.userId);
    }
}
