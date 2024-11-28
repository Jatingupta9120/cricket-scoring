import { iResponseStatusMessage } from 'src/utils/response/response.interface';
import {
    userresponseInfo,
    userresponseName,
} from './user/user_response.constants';
import {
    postresponseInfo,
    postresponseName,
} from './post/post_response.constants';

// Response action name
export const responseName = {
    ...userresponseName,
    ...postresponseName,
};

// Response information
export const responseInfo: Record<string, iResponseStatusMessage> = {
    ...userresponseInfo,
    ...postresponseInfo,
};
