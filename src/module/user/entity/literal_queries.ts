import { literal } from 'sequelize';
import { Literal } from 'sequelize/types/utils';

/**
 * @example "SUM(CASE WHEN status IN ('APPROVED', 'REVIEWED') THEN 1 ELSE 0 END)"
 */
export const totalEntriesCountQuery = <
    TReqKey extends string | number | symbol = string,
    TResKey extends string | number | symbol = string,
>(config: {
    queryCondition: {
        value: string[];
        propertyName: TReqKey;
        isNotIn?: boolean;
    }[];
    newPropertyName: TResKey;
}): [Literal, string] => {
    const { queryCondition, newPropertyName } = config;

    const queryMap = queryCondition.map((item) => {
        const { propertyName, value, isNotIn } = { isNotIn: false, ...item };

        const keyName = camelCaseToUnderscore(String(propertyName));

        return `${keyName} ${isNotIn ? 'NOT IN' : 'IN'} (${value
            .map((item) => `'${item}'`)
            .join(', ')})`;
    });

    const queryStr = queryMap.join(' AND ');

    return [
        literal(`SUM(CASE WHEN ${queryStr} THEN 1 ELSE 0 END)`),
        String(newPropertyName),
    ];
};

export const QueryLiteral = <
    TReqModel extends Record<string, any>,
    TResModel extends Record<string, any>,
>() => {
    return {
        totalEntriesCountQuery: totalEntriesCountQuery<
            keyof TReqModel,
            keyof TResModel
        >,
    };
};

function camelCaseToUnderscore(input: string) {
    return input.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
