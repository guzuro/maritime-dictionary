import { JSONSchemaType } from "ajv";
import { UserRole, SignInData, SignUpData } from 'maritime-contracts'

export const UserRoleSchema: JSONSchemaType<UserRole> = {
    $id: 'UserRole',
    enum: ['admin', 'student'],
    type: 'string',
    $schema: 'http://json-schema.org/draft-07/schema#',
}

export const SignInSchema: JSONSchemaType<SignInData> = {
    $id: 'SignInSchema',
    type: 'object',
    properties: {
        login: { type: 'string' },
        password: { type: 'string' },
        role: { $ref: "$UserRole" },
    },
    required: ['login', 'password', 'role'],
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
}

export const SignUpSchema: JSONSchemaType<SignUpData> = {
    $id: 'SignUpSchema',
    type: 'object',
    properties: {
        login: { type: 'string' },
        password: { type: 'string' },
    },
    required: ['login', 'password'],
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
}