import { HttpStatus } from '@nestjs/common';
import { iResponseStatusMessage } from 'src/utils/response/response.interface';

export const postresponseName = {
    GET_POST: 'GET_POST',
    BATS_MAN_CREATED: 'BATS_MAN_CREATED',
    GET_ALL_POSTS: 'GET_ALL_POSTS',
    GET_ALL_BATSMEN: 'GET_ALL_BATSMEN',
    POST_CREATED: 'POST_CREATED',
    GET_BATSMAN: 'GET_BATSMAN',
    BATS_MAN_UPDATED: 'BATS_MAN_UPDATED',
    BATS_MAN_DELETED: 'BATS_MAN_DELETED',
    GET_ALL_BOWLERS: 'GET_ALL_BOWLERS',
    BOWLER_CREATED: 'BOWLER_CREATED',
};

export const postresponseInfo: Record<string, iResponseStatusMessage> = {
    POST_CREATED: {
        message: 'Post created successfully',
        statusCode: HttpStatus.CREATED,
    },
    GET_ALL_BOWLERS: {
        message: 'get bowler successfully',
        statusCode: HttpStatus.OK,
    },
    BOWLER_CREATED: {
        message: 'bowler created successfully',
        statusCode: HttpStatus.CREATED,
    },
    BATS_MAN_CREATED: {
        message: 'Batsman created successfully',
        statusCode: HttpStatus.CREATED,
    },
    BATS_MAN_DELETED: {
        message: 'Batsman deleted successfully',
        statusCode: HttpStatus.OK,
    },

    GET_POST: {
        message: 'fetch post successfully',
        statusCode: HttpStatus.OK,
    },
    GET_BATSMAN: {
        message: 'fetch post successfully',
        statusCode: HttpStatus.OK,
    },
    BATS_MAN_UPDATED: {
        message: 'updated batsman data successfully',
        statusCode: HttpStatus.OK,
    },

    GET_ALL_POSTS: {
        message: 'fetch all posts successfully',
        statusCode: HttpStatus.OK,
    },
    GET_ALL_BATSMEN: {
        message: 'fetch all posts successfully',
        statusCode: HttpStatus.OK,
    },
};
