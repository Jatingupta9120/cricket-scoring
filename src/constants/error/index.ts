import { defaultErrorConfig } from './config/default';
import { commonErrorConfig } from './config/common';

import { DEFAULT_ERROR } from './errors/default';
import { COMMON_ERROR } from './errors/common';
import { USER_ERROR } from './errors/user';
import { POST_ERROR } from './errors/post';
import { userErrorConfig } from './config/user';

export type ERROR = DEFAULT_ERROR | COMMON_ERROR | USER_ERROR | POST_ERROR;

export { DEFAULT_ERROR, COMMON_ERROR, USER_ERROR, POST_ERROR };

export const errorConfig = {
    ...defaultErrorConfig,
    ...commonErrorConfig,
    ...userErrorConfig,
};
