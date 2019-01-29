import { v4 } from 'uuid';
import { confirmationPrefix } from '../modules/constants/reditPrefixes';
import { redis } from '../redis';

export const createConfirmationUrl = async (userId: number) => {
    const token = v4();
    await redis.set(confirmationPrefix + token, userId, 'ex', 60 * 60 * 24); // 1 day expiration
    return `http://localhost:3000/user/confirm/${token}`;
};
