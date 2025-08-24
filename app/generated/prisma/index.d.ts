
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>
/**
 * Model AssessmentResponse
 * 
 */
export type AssessmentResponse = $Result.DefaultSelection<Prisma.$AssessmentResponsePayload>
/**
 * Model CareCircle
 * 
 */
export type CareCircle = $Result.DefaultSelection<Prisma.$CareCirclePayload>
/**
 * Model CareCircleMember
 * 
 */
export type CareCircleMember = $Result.DefaultSelection<Prisma.$CareCircleMemberPayload>
/**
 * Model ShareToken
 * 
 */
export type ShareToken = $Result.DefaultSelection<Prisma.$ShareTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assessmentResponse`: Exposes CRUD operations for the **AssessmentResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentResponses
    * const assessmentResponses = await prisma.assessmentResponse.findMany()
    * ```
    */
  get assessmentResponse(): Prisma.AssessmentResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careCircle`: Exposes CRUD operations for the **CareCircle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareCircles
    * const careCircles = await prisma.careCircle.findMany()
    * ```
    */
  get careCircle(): Prisma.CareCircleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careCircleMember`: Exposes CRUD operations for the **CareCircleMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareCircleMembers
    * const careCircleMembers = await prisma.careCircleMember.findMany()
    * ```
    */
  get careCircleMember(): Prisma.CareCircleMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shareToken`: Exposes CRUD operations for the **ShareToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShareTokens
    * const shareTokens = await prisma.shareToken.findMany()
    * ```
    */
  get shareToken(): Prisma.ShareTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Metric: 'Metric',
    AssessmentResponse: 'AssessmentResponse',
    CareCircle: 'CareCircle',
    CareCircleMember: 'CareCircleMember',
    ShareToken: 'ShareToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "metric" | "assessmentResponse" | "careCircle" | "careCircleMember" | "shareToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
      AssessmentResponse: {
        payload: Prisma.$AssessmentResponsePayload<ExtArgs>
        fields: Prisma.AssessmentResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>
          }
          findFirst: {
            args: Prisma.AssessmentResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>
          }
          findMany: {
            args: Prisma.AssessmentResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>[]
          }
          create: {
            args: Prisma.AssessmentResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>
          }
          createMany: {
            args: Prisma.AssessmentResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>[]
          }
          delete: {
            args: Prisma.AssessmentResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>
          }
          update: {
            args: Prisma.AssessmentResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>
          }
          deleteMany: {
            args: Prisma.AssessmentResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssessmentResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>[]
          }
          upsert: {
            args: Prisma.AssessmentResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentResponsePayload>
          }
          aggregate: {
            args: Prisma.AssessmentResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentResponse>
          }
          groupBy: {
            args: Prisma.AssessmentResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentResponseCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentResponseCountAggregateOutputType> | number
          }
        }
      }
      CareCircle: {
        payload: Prisma.$CareCirclePayload<ExtArgs>
        fields: Prisma.CareCircleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareCircleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareCircleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>
          }
          findFirst: {
            args: Prisma.CareCircleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareCircleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>
          }
          findMany: {
            args: Prisma.CareCircleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>[]
          }
          create: {
            args: Prisma.CareCircleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>
          }
          createMany: {
            args: Prisma.CareCircleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareCircleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>[]
          }
          delete: {
            args: Prisma.CareCircleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>
          }
          update: {
            args: Prisma.CareCircleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>
          }
          deleteMany: {
            args: Prisma.CareCircleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareCircleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareCircleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>[]
          }
          upsert: {
            args: Prisma.CareCircleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCirclePayload>
          }
          aggregate: {
            args: Prisma.CareCircleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareCircle>
          }
          groupBy: {
            args: Prisma.CareCircleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareCircleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareCircleCountArgs<ExtArgs>
            result: $Utils.Optional<CareCircleCountAggregateOutputType> | number
          }
        }
      }
      CareCircleMember: {
        payload: Prisma.$CareCircleMemberPayload<ExtArgs>
        fields: Prisma.CareCircleMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareCircleMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareCircleMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>
          }
          findFirst: {
            args: Prisma.CareCircleMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareCircleMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>
          }
          findMany: {
            args: Prisma.CareCircleMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>[]
          }
          create: {
            args: Prisma.CareCircleMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>
          }
          createMany: {
            args: Prisma.CareCircleMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CareCircleMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>[]
          }
          delete: {
            args: Prisma.CareCircleMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>
          }
          update: {
            args: Prisma.CareCircleMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>
          }
          deleteMany: {
            args: Prisma.CareCircleMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareCircleMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CareCircleMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>[]
          }
          upsert: {
            args: Prisma.CareCircleMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareCircleMemberPayload>
          }
          aggregate: {
            args: Prisma.CareCircleMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareCircleMember>
          }
          groupBy: {
            args: Prisma.CareCircleMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareCircleMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareCircleMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CareCircleMemberCountAggregateOutputType> | number
          }
        }
      }
      ShareToken: {
        payload: Prisma.$ShareTokenPayload<ExtArgs>
        fields: Prisma.ShareTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShareTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShareTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>
          }
          findFirst: {
            args: Prisma.ShareTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShareTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>
          }
          findMany: {
            args: Prisma.ShareTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>[]
          }
          create: {
            args: Prisma.ShareTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>
          }
          createMany: {
            args: Prisma.ShareTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShareTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>[]
          }
          delete: {
            args: Prisma.ShareTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>
          }
          update: {
            args: Prisma.ShareTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>
          }
          deleteMany: {
            args: Prisma.ShareTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShareTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShareTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>[]
          }
          upsert: {
            args: Prisma.ShareTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShareTokenPayload>
          }
          aggregate: {
            args: Prisma.ShareTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShareToken>
          }
          groupBy: {
            args: Prisma.ShareTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShareTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShareTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ShareTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    metric?: MetricOmit
    assessmentResponse?: AssessmentResponseOmit
    careCircle?: CareCircleOmit
    careCircleMember?: CareCircleMemberOmit
    shareToken?: ShareTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    metrics: number
    responses: number
    careCircles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | UserCountOutputTypeCountMetricsArgs
    responses?: boolean | UserCountOutputTypeCountResponsesArgs
    careCircles?: boolean | UserCountOutputTypeCountCareCirclesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCareCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareCircleMemberWhereInput
  }


  /**
   * Count Type CareCircleCountOutputType
   */

  export type CareCircleCountOutputType = {
    members: number
    shareTokens: number
  }

  export type CareCircleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CareCircleCountOutputTypeCountMembersArgs
    shareTokens?: boolean | CareCircleCountOutputTypeCountShareTokensArgs
  }

  // Custom InputTypes
  /**
   * CareCircleCountOutputType without action
   */
  export type CareCircleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleCountOutputType
     */
    select?: CareCircleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareCircleCountOutputType without action
   */
  export type CareCircleCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareCircleMemberWhereInput
  }

  /**
   * CareCircleCountOutputType without action
   */
  export type CareCircleCountOutputTypeCountShareTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareTokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    sessionToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    sessionToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    sessionToken: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    sessionToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    sessionToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    sessionToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string | null
    email: string | null
    sessionToken: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    sessionToken?: boolean
    metrics?: boolean | User$metricsArgs<ExtArgs>
    responses?: boolean | User$responsesArgs<ExtArgs>
    careCircles?: boolean | User$careCirclesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    sessionToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    sessionToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    sessionToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "email" | "sessionToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | User$metricsArgs<ExtArgs>
    responses?: boolean | User$responsesArgs<ExtArgs>
    careCircles?: boolean | User$careCirclesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      metrics: Prisma.$MetricPayload<ExtArgs>[]
      responses: Prisma.$AssessmentResponsePayload<ExtArgs>[]
      careCircles: Prisma.$CareCircleMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string | null
      email: string | null
      sessionToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    metrics<T extends User$metricsArgs<ExtArgs> = {}>(args?: Subset<T, User$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends User$responsesArgs<ExtArgs> = {}>(args?: Subset<T, User$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    careCircles<T extends User$careCirclesArgs<ExtArgs> = {}>(args?: Subset<T, User$careCirclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly sessionToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.metrics
   */
  export type User$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    cursor?: MetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * User.responses
   */
  export type User$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    where?: AssessmentResponseWhereInput
    orderBy?: AssessmentResponseOrderByWithRelationInput | AssessmentResponseOrderByWithRelationInput[]
    cursor?: AssessmentResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssessmentResponseScalarFieldEnum | AssessmentResponseScalarFieldEnum[]
  }

  /**
   * User.careCircles
   */
  export type User$careCirclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    where?: CareCircleMemberWhereInput
    orderBy?: CareCircleMemberOrderByWithRelationInput | CareCircleMemberOrderByWithRelationInput[]
    cursor?: CareCircleMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareCircleMemberScalarFieldEnum | CareCircleMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricAvgAggregateOutputType = {
    valueNum: number | null
  }

  export type MetricSumAggregateOutputType = {
    valueNum: number | null
  }

  export type MetricMinAggregateOutputType = {
    id: string | null
    userId: string | null
    key: string | null
    valueNum: number | null
    valueText: string | null
    unit: string | null
    recordedAt: Date | null
  }

  export type MetricMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    key: string | null
    valueNum: number | null
    valueText: string | null
    unit: string | null
    recordedAt: Date | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    userId: number
    key: number
    valueNum: number
    valueText: number
    unit: number
    recordedAt: number
    _all: number
  }


  export type MetricAvgAggregateInputType = {
    valueNum?: true
  }

  export type MetricSumAggregateInputType = {
    valueNum?: true
  }

  export type MetricMinAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    valueNum?: true
    valueText?: true
    unit?: true
    recordedAt?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    valueNum?: true
    valueText?: true
    unit?: true
    recordedAt?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    userId?: true
    key?: true
    valueNum?: true
    valueText?: true
    unit?: true
    recordedAt?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _avg?: MetricAvgAggregateInputType
    _sum?: MetricSumAggregateInputType
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: string
    userId: string
    key: string
    valueNum: number | null
    valueText: string | null
    unit: string | null
    recordedAt: Date
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    valueNum?: boolean
    valueText?: boolean
    unit?: boolean
    recordedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    valueNum?: boolean
    valueText?: boolean
    unit?: boolean
    recordedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    key?: boolean
    valueNum?: boolean
    valueText?: boolean
    unit?: boolean
    recordedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    userId?: boolean
    key?: boolean
    valueNum?: boolean
    valueText?: boolean
    unit?: boolean
    recordedAt?: boolean
  }

  export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "key" | "valueNum" | "valueText" | "unit" | "recordedAt", ExtArgs["result"]["metric"]>
  export type MetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      key: string
      valueNum: number | null
      valueText: string | null
      unit: string | null
      recordedAt: Date
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metric model
   */
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'String'>
    readonly userId: FieldRef<"Metric", 'String'>
    readonly key: FieldRef<"Metric", 'String'>
    readonly valueNum: FieldRef<"Metric", 'Float'>
    readonly valueText: FieldRef<"Metric", 'String'>
    readonly unit: FieldRef<"Metric", 'String'>
    readonly recordedAt: FieldRef<"Metric", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric updateManyAndReturn
   */
  export type MetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentResponse
   */

  export type AggregateAssessmentResponse = {
    _count: AssessmentResponseCountAggregateOutputType | null
    _avg: AssessmentResponseAvgAggregateOutputType | null
    _sum: AssessmentResponseSumAggregateOutputType | null
    _min: AssessmentResponseMinAggregateOutputType | null
    _max: AssessmentResponseMaxAggregateOutputType | null
  }

  export type AssessmentResponseAvgAggregateOutputType = {
    score: number | null
  }

  export type AssessmentResponseSumAggregateOutputType = {
    score: number | null
  }

  export type AssessmentResponseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    score: number | null
    createdAt: Date | null
  }

  export type AssessmentResponseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    score: number | null
    createdAt: Date | null
  }

  export type AssessmentResponseCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    score: number
    answers: number
    createdAt: number
    _all: number
  }


  export type AssessmentResponseAvgAggregateInputType = {
    score?: true
  }

  export type AssessmentResponseSumAggregateInputType = {
    score?: true
  }

  export type AssessmentResponseMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    score?: true
    createdAt?: true
  }

  export type AssessmentResponseMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    score?: true
    createdAt?: true
  }

  export type AssessmentResponseCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    score?: true
    answers?: true
    createdAt?: true
    _all?: true
  }

  export type AssessmentResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentResponse to aggregate.
     */
    where?: AssessmentResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentResponses to fetch.
     */
    orderBy?: AssessmentResponseOrderByWithRelationInput | AssessmentResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentResponses
    **/
    _count?: true | AssessmentResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentResponseMaxAggregateInputType
  }

  export type GetAssessmentResponseAggregateType<T extends AssessmentResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentResponse[P]>
      : GetScalarType<T[P], AggregateAssessmentResponse[P]>
  }




  export type AssessmentResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentResponseWhereInput
    orderBy?: AssessmentResponseOrderByWithAggregationInput | AssessmentResponseOrderByWithAggregationInput[]
    by: AssessmentResponseScalarFieldEnum[] | AssessmentResponseScalarFieldEnum
    having?: AssessmentResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentResponseCountAggregateInputType | true
    _avg?: AssessmentResponseAvgAggregateInputType
    _sum?: AssessmentResponseSumAggregateInputType
    _min?: AssessmentResponseMinAggregateInputType
    _max?: AssessmentResponseMaxAggregateInputType
  }

  export type AssessmentResponseGroupByOutputType = {
    id: string
    userId: string | null
    type: string
    score: number | null
    answers: JsonValue
    createdAt: Date
    _count: AssessmentResponseCountAggregateOutputType | null
    _avg: AssessmentResponseAvgAggregateOutputType | null
    _sum: AssessmentResponseSumAggregateOutputType | null
    _min: AssessmentResponseMinAggregateOutputType | null
    _max: AssessmentResponseMaxAggregateOutputType | null
  }

  type GetAssessmentResponseGroupByPayload<T extends AssessmentResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentResponseGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentResponseGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    score?: boolean
    answers?: boolean
    createdAt?: boolean
    user?: boolean | AssessmentResponse$userArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentResponse"]>

  export type AssessmentResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    score?: boolean
    answers?: boolean
    createdAt?: boolean
    user?: boolean | AssessmentResponse$userArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentResponse"]>

  export type AssessmentResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    score?: boolean
    answers?: boolean
    createdAt?: boolean
    user?: boolean | AssessmentResponse$userArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentResponse"]>

  export type AssessmentResponseSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    score?: boolean
    answers?: boolean
    createdAt?: boolean
  }

  export type AssessmentResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "score" | "answers" | "createdAt", ExtArgs["result"]["assessmentResponse"]>
  export type AssessmentResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AssessmentResponse$userArgs<ExtArgs>
  }
  export type AssessmentResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AssessmentResponse$userArgs<ExtArgs>
  }
  export type AssessmentResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AssessmentResponse$userArgs<ExtArgs>
  }

  export type $AssessmentResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentResponse"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      type: string
      score: number | null
      answers: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["assessmentResponse"]>
    composites: {}
  }

  type AssessmentResponseGetPayload<S extends boolean | null | undefined | AssessmentResponseDefaultArgs> = $Result.GetResult<Prisma.$AssessmentResponsePayload, S>

  type AssessmentResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssessmentResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssessmentResponseCountAggregateInputType | true
    }

  export interface AssessmentResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentResponse'], meta: { name: 'AssessmentResponse' } }
    /**
     * Find zero or one AssessmentResponse that matches the filter.
     * @param {AssessmentResponseFindUniqueArgs} args - Arguments to find a AssessmentResponse
     * @example
     * // Get one AssessmentResponse
     * const assessmentResponse = await prisma.assessmentResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentResponseFindUniqueArgs>(args: SelectSubset<T, AssessmentResponseFindUniqueArgs<ExtArgs>>): Prisma__AssessmentResponseClient<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssessmentResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssessmentResponseFindUniqueOrThrowArgs} args - Arguments to find a AssessmentResponse
     * @example
     * // Get one AssessmentResponse
     * const assessmentResponse = await prisma.assessmentResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentResponseClient<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessmentResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResponseFindFirstArgs} args - Arguments to find a AssessmentResponse
     * @example
     * // Get one AssessmentResponse
     * const assessmentResponse = await prisma.assessmentResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentResponseFindFirstArgs>(args?: SelectSubset<T, AssessmentResponseFindFirstArgs<ExtArgs>>): Prisma__AssessmentResponseClient<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssessmentResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResponseFindFirstOrThrowArgs} args - Arguments to find a AssessmentResponse
     * @example
     * // Get one AssessmentResponse
     * const assessmentResponse = await prisma.assessmentResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentResponseClient<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssessmentResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentResponses
     * const assessmentResponses = await prisma.assessmentResponse.findMany()
     * 
     * // Get first 10 AssessmentResponses
     * const assessmentResponses = await prisma.assessmentResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentResponseWithIdOnly = await prisma.assessmentResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentResponseFindManyArgs>(args?: SelectSubset<T, AssessmentResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssessmentResponse.
     * @param {AssessmentResponseCreateArgs} args - Arguments to create a AssessmentResponse.
     * @example
     * // Create one AssessmentResponse
     * const AssessmentResponse = await prisma.assessmentResponse.create({
     *   data: {
     *     // ... data to create a AssessmentResponse
     *   }
     * })
     * 
     */
    create<T extends AssessmentResponseCreateArgs>(args: SelectSubset<T, AssessmentResponseCreateArgs<ExtArgs>>): Prisma__AssessmentResponseClient<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssessmentResponses.
     * @param {AssessmentResponseCreateManyArgs} args - Arguments to create many AssessmentResponses.
     * @example
     * // Create many AssessmentResponses
     * const assessmentResponse = await prisma.assessmentResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentResponseCreateManyArgs>(args?: SelectSubset<T, AssessmentResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentResponses and returns the data saved in the database.
     * @param {AssessmentResponseCreateManyAndReturnArgs} args - Arguments to create many AssessmentResponses.
     * @example
     * // Create many AssessmentResponses
     * const assessmentResponse = await prisma.assessmentResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentResponses and only return the `id`
     * const assessmentResponseWithIdOnly = await prisma.assessmentResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssessmentResponse.
     * @param {AssessmentResponseDeleteArgs} args - Arguments to delete one AssessmentResponse.
     * @example
     * // Delete one AssessmentResponse
     * const AssessmentResponse = await prisma.assessmentResponse.delete({
     *   where: {
     *     // ... filter to delete one AssessmentResponse
     *   }
     * })
     * 
     */
    delete<T extends AssessmentResponseDeleteArgs>(args: SelectSubset<T, AssessmentResponseDeleteArgs<ExtArgs>>): Prisma__AssessmentResponseClient<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssessmentResponse.
     * @param {AssessmentResponseUpdateArgs} args - Arguments to update one AssessmentResponse.
     * @example
     * // Update one AssessmentResponse
     * const assessmentResponse = await prisma.assessmentResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentResponseUpdateArgs>(args: SelectSubset<T, AssessmentResponseUpdateArgs<ExtArgs>>): Prisma__AssessmentResponseClient<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssessmentResponses.
     * @param {AssessmentResponseDeleteManyArgs} args - Arguments to filter AssessmentResponses to delete.
     * @example
     * // Delete a few AssessmentResponses
     * const { count } = await prisma.assessmentResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentResponseDeleteManyArgs>(args?: SelectSubset<T, AssessmentResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentResponses
     * const assessmentResponse = await prisma.assessmentResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentResponseUpdateManyArgs>(args: SelectSubset<T, AssessmentResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentResponses and returns the data updated in the database.
     * @param {AssessmentResponseUpdateManyAndReturnArgs} args - Arguments to update many AssessmentResponses.
     * @example
     * // Update many AssessmentResponses
     * const assessmentResponse = await prisma.assessmentResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssessmentResponses and only return the `id`
     * const assessmentResponseWithIdOnly = await prisma.assessmentResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssessmentResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, AssessmentResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssessmentResponse.
     * @param {AssessmentResponseUpsertArgs} args - Arguments to update or create a AssessmentResponse.
     * @example
     * // Update or create a AssessmentResponse
     * const assessmentResponse = await prisma.assessmentResponse.upsert({
     *   create: {
     *     // ... data to create a AssessmentResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentResponse we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentResponseUpsertArgs>(args: SelectSubset<T, AssessmentResponseUpsertArgs<ExtArgs>>): Prisma__AssessmentResponseClient<$Result.GetResult<Prisma.$AssessmentResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssessmentResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResponseCountArgs} args - Arguments to filter AssessmentResponses to count.
     * @example
     * // Count the number of AssessmentResponses
     * const count = await prisma.assessmentResponse.count({
     *   where: {
     *     // ... the filter for the AssessmentResponses we want to count
     *   }
     * })
    **/
    count<T extends AssessmentResponseCountArgs>(
      args?: Subset<T, AssessmentResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssessmentResponseAggregateArgs>(args: Subset<T, AssessmentResponseAggregateArgs>): Prisma.PrismaPromise<GetAssessmentResponseAggregateType<T>>

    /**
     * Group by AssessmentResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssessmentResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentResponseGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssessmentResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentResponse model
   */
  readonly fields: AssessmentResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AssessmentResponse$userArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentResponse$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssessmentResponse model
   */
  interface AssessmentResponseFieldRefs {
    readonly id: FieldRef<"AssessmentResponse", 'String'>
    readonly userId: FieldRef<"AssessmentResponse", 'String'>
    readonly type: FieldRef<"AssessmentResponse", 'String'>
    readonly score: FieldRef<"AssessmentResponse", 'Int'>
    readonly answers: FieldRef<"AssessmentResponse", 'Json'>
    readonly createdAt: FieldRef<"AssessmentResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentResponse findUnique
   */
  export type AssessmentResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResponse to fetch.
     */
    where: AssessmentResponseWhereUniqueInput
  }

  /**
   * AssessmentResponse findUniqueOrThrow
   */
  export type AssessmentResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResponse to fetch.
     */
    where: AssessmentResponseWhereUniqueInput
  }

  /**
   * AssessmentResponse findFirst
   */
  export type AssessmentResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResponse to fetch.
     */
    where?: AssessmentResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentResponses to fetch.
     */
    orderBy?: AssessmentResponseOrderByWithRelationInput | AssessmentResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentResponses.
     */
    cursor?: AssessmentResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentResponses.
     */
    distinct?: AssessmentResponseScalarFieldEnum | AssessmentResponseScalarFieldEnum[]
  }

  /**
   * AssessmentResponse findFirstOrThrow
   */
  export type AssessmentResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResponse to fetch.
     */
    where?: AssessmentResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentResponses to fetch.
     */
    orderBy?: AssessmentResponseOrderByWithRelationInput | AssessmentResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentResponses.
     */
    cursor?: AssessmentResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentResponses.
     */
    distinct?: AssessmentResponseScalarFieldEnum | AssessmentResponseScalarFieldEnum[]
  }

  /**
   * AssessmentResponse findMany
   */
  export type AssessmentResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentResponses to fetch.
     */
    where?: AssessmentResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentResponses to fetch.
     */
    orderBy?: AssessmentResponseOrderByWithRelationInput | AssessmentResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentResponses.
     */
    cursor?: AssessmentResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentResponses.
     */
    skip?: number
    distinct?: AssessmentResponseScalarFieldEnum | AssessmentResponseScalarFieldEnum[]
  }

  /**
   * AssessmentResponse create
   */
  export type AssessmentResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentResponse.
     */
    data: XOR<AssessmentResponseCreateInput, AssessmentResponseUncheckedCreateInput>
  }

  /**
   * AssessmentResponse createMany
   */
  export type AssessmentResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentResponses.
     */
    data: AssessmentResponseCreateManyInput | AssessmentResponseCreateManyInput[]
  }

  /**
   * AssessmentResponse createManyAndReturn
   */
  export type AssessmentResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * The data used to create many AssessmentResponses.
     */
    data: AssessmentResponseCreateManyInput | AssessmentResponseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentResponse update
   */
  export type AssessmentResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentResponse.
     */
    data: XOR<AssessmentResponseUpdateInput, AssessmentResponseUncheckedUpdateInput>
    /**
     * Choose, which AssessmentResponse to update.
     */
    where: AssessmentResponseWhereUniqueInput
  }

  /**
   * AssessmentResponse updateMany
   */
  export type AssessmentResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentResponses.
     */
    data: XOR<AssessmentResponseUpdateManyMutationInput, AssessmentResponseUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentResponses to update
     */
    where?: AssessmentResponseWhereInput
    /**
     * Limit how many AssessmentResponses to update.
     */
    limit?: number
  }

  /**
   * AssessmentResponse updateManyAndReturn
   */
  export type AssessmentResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * The data used to update AssessmentResponses.
     */
    data: XOR<AssessmentResponseUpdateManyMutationInput, AssessmentResponseUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentResponses to update
     */
    where?: AssessmentResponseWhereInput
    /**
     * Limit how many AssessmentResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssessmentResponse upsert
   */
  export type AssessmentResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentResponse to update in case it exists.
     */
    where: AssessmentResponseWhereUniqueInput
    /**
     * In case the AssessmentResponse found by the `where` argument doesn't exist, create a new AssessmentResponse with this data.
     */
    create: XOR<AssessmentResponseCreateInput, AssessmentResponseUncheckedCreateInput>
    /**
     * In case the AssessmentResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentResponseUpdateInput, AssessmentResponseUncheckedUpdateInput>
  }

  /**
   * AssessmentResponse delete
   */
  export type AssessmentResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
    /**
     * Filter which AssessmentResponse to delete.
     */
    where: AssessmentResponseWhereUniqueInput
  }

  /**
   * AssessmentResponse deleteMany
   */
  export type AssessmentResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentResponses to delete
     */
    where?: AssessmentResponseWhereInput
    /**
     * Limit how many AssessmentResponses to delete.
     */
    limit?: number
  }

  /**
   * AssessmentResponse.user
   */
  export type AssessmentResponse$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AssessmentResponse without action
   */
  export type AssessmentResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentResponse
     */
    select?: AssessmentResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssessmentResponse
     */
    omit?: AssessmentResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentResponseInclude<ExtArgs> | null
  }


  /**
   * Model CareCircle
   */

  export type AggregateCareCircle = {
    _count: CareCircleCountAggregateOutputType | null
    _min: CareCircleMinAggregateOutputType | null
    _max: CareCircleMaxAggregateOutputType | null
  }

  export type CareCircleMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CareCircleMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CareCircleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CareCircleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CareCircleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CareCircleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CareCircleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareCircle to aggregate.
     */
    where?: CareCircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareCircles to fetch.
     */
    orderBy?: CareCircleOrderByWithRelationInput | CareCircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareCircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareCircles
    **/
    _count?: true | CareCircleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareCircleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareCircleMaxAggregateInputType
  }

  export type GetCareCircleAggregateType<T extends CareCircleAggregateArgs> = {
        [P in keyof T & keyof AggregateCareCircle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareCircle[P]>
      : GetScalarType<T[P], AggregateCareCircle[P]>
  }




  export type CareCircleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareCircleWhereInput
    orderBy?: CareCircleOrderByWithAggregationInput | CareCircleOrderByWithAggregationInput[]
    by: CareCircleScalarFieldEnum[] | CareCircleScalarFieldEnum
    having?: CareCircleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareCircleCountAggregateInputType | true
    _min?: CareCircleMinAggregateInputType
    _max?: CareCircleMaxAggregateInputType
  }

  export type CareCircleGroupByOutputType = {
    id: string
    name: string
    _count: CareCircleCountAggregateOutputType | null
    _min: CareCircleMinAggregateOutputType | null
    _max: CareCircleMaxAggregateOutputType | null
  }

  type GetCareCircleGroupByPayload<T extends CareCircleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareCircleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareCircleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareCircleGroupByOutputType[P]>
            : GetScalarType<T[P], CareCircleGroupByOutputType[P]>
        }
      >
    >


  export type CareCircleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    members?: boolean | CareCircle$membersArgs<ExtArgs>
    shareTokens?: boolean | CareCircle$shareTokensArgs<ExtArgs>
    _count?: boolean | CareCircleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careCircle"]>

  export type CareCircleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["careCircle"]>

  export type CareCircleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["careCircle"]>

  export type CareCircleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CareCircleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["careCircle"]>
  export type CareCircleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CareCircle$membersArgs<ExtArgs>
    shareTokens?: boolean | CareCircle$shareTokensArgs<ExtArgs>
    _count?: boolean | CareCircleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CareCircleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CareCircleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CareCirclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareCircle"
    objects: {
      members: Prisma.$CareCircleMemberPayload<ExtArgs>[]
      shareTokens: Prisma.$ShareTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["careCircle"]>
    composites: {}
  }

  type CareCircleGetPayload<S extends boolean | null | undefined | CareCircleDefaultArgs> = $Result.GetResult<Prisma.$CareCirclePayload, S>

  type CareCircleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareCircleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareCircleCountAggregateInputType | true
    }

  export interface CareCircleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareCircle'], meta: { name: 'CareCircle' } }
    /**
     * Find zero or one CareCircle that matches the filter.
     * @param {CareCircleFindUniqueArgs} args - Arguments to find a CareCircle
     * @example
     * // Get one CareCircle
     * const careCircle = await prisma.careCircle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareCircleFindUniqueArgs>(args: SelectSubset<T, CareCircleFindUniqueArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareCircle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareCircleFindUniqueOrThrowArgs} args - Arguments to find a CareCircle
     * @example
     * // Get one CareCircle
     * const careCircle = await prisma.careCircle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareCircleFindUniqueOrThrowArgs>(args: SelectSubset<T, CareCircleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareCircle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleFindFirstArgs} args - Arguments to find a CareCircle
     * @example
     * // Get one CareCircle
     * const careCircle = await prisma.careCircle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareCircleFindFirstArgs>(args?: SelectSubset<T, CareCircleFindFirstArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareCircle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleFindFirstOrThrowArgs} args - Arguments to find a CareCircle
     * @example
     * // Get one CareCircle
     * const careCircle = await prisma.careCircle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareCircleFindFirstOrThrowArgs>(args?: SelectSubset<T, CareCircleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareCircles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareCircles
     * const careCircles = await prisma.careCircle.findMany()
     * 
     * // Get first 10 CareCircles
     * const careCircles = await prisma.careCircle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careCircleWithIdOnly = await prisma.careCircle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareCircleFindManyArgs>(args?: SelectSubset<T, CareCircleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareCircle.
     * @param {CareCircleCreateArgs} args - Arguments to create a CareCircle.
     * @example
     * // Create one CareCircle
     * const CareCircle = await prisma.careCircle.create({
     *   data: {
     *     // ... data to create a CareCircle
     *   }
     * })
     * 
     */
    create<T extends CareCircleCreateArgs>(args: SelectSubset<T, CareCircleCreateArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareCircles.
     * @param {CareCircleCreateManyArgs} args - Arguments to create many CareCircles.
     * @example
     * // Create many CareCircles
     * const careCircle = await prisma.careCircle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareCircleCreateManyArgs>(args?: SelectSubset<T, CareCircleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CareCircles and returns the data saved in the database.
     * @param {CareCircleCreateManyAndReturnArgs} args - Arguments to create many CareCircles.
     * @example
     * // Create many CareCircles
     * const careCircle = await prisma.careCircle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CareCircles and only return the `id`
     * const careCircleWithIdOnly = await prisma.careCircle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareCircleCreateManyAndReturnArgs>(args?: SelectSubset<T, CareCircleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CareCircle.
     * @param {CareCircleDeleteArgs} args - Arguments to delete one CareCircle.
     * @example
     * // Delete one CareCircle
     * const CareCircle = await prisma.careCircle.delete({
     *   where: {
     *     // ... filter to delete one CareCircle
     *   }
     * })
     * 
     */
    delete<T extends CareCircleDeleteArgs>(args: SelectSubset<T, CareCircleDeleteArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareCircle.
     * @param {CareCircleUpdateArgs} args - Arguments to update one CareCircle.
     * @example
     * // Update one CareCircle
     * const careCircle = await prisma.careCircle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareCircleUpdateArgs>(args: SelectSubset<T, CareCircleUpdateArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareCircles.
     * @param {CareCircleDeleteManyArgs} args - Arguments to filter CareCircles to delete.
     * @example
     * // Delete a few CareCircles
     * const { count } = await prisma.careCircle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareCircleDeleteManyArgs>(args?: SelectSubset<T, CareCircleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareCircles
     * const careCircle = await prisma.careCircle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareCircleUpdateManyArgs>(args: SelectSubset<T, CareCircleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareCircles and returns the data updated in the database.
     * @param {CareCircleUpdateManyAndReturnArgs} args - Arguments to update many CareCircles.
     * @example
     * // Update many CareCircles
     * const careCircle = await prisma.careCircle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CareCircles and only return the `id`
     * const careCircleWithIdOnly = await prisma.careCircle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareCircleUpdateManyAndReturnArgs>(args: SelectSubset<T, CareCircleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CareCircle.
     * @param {CareCircleUpsertArgs} args - Arguments to update or create a CareCircle.
     * @example
     * // Update or create a CareCircle
     * const careCircle = await prisma.careCircle.upsert({
     *   create: {
     *     // ... data to create a CareCircle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareCircle we want to update
     *   }
     * })
     */
    upsert<T extends CareCircleUpsertArgs>(args: SelectSubset<T, CareCircleUpsertArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareCircles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleCountArgs} args - Arguments to filter CareCircles to count.
     * @example
     * // Count the number of CareCircles
     * const count = await prisma.careCircle.count({
     *   where: {
     *     // ... the filter for the CareCircles we want to count
     *   }
     * })
    **/
    count<T extends CareCircleCountArgs>(
      args?: Subset<T, CareCircleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareCircleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareCircle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareCircleAggregateArgs>(args: Subset<T, CareCircleAggregateArgs>): Prisma.PrismaPromise<GetCareCircleAggregateType<T>>

    /**
     * Group by CareCircle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareCircleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareCircleGroupByArgs['orderBy'] }
        : { orderBy?: CareCircleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareCircleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareCircleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareCircle model
   */
  readonly fields: CareCircleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareCircle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareCircleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends CareCircle$membersArgs<ExtArgs> = {}>(args?: Subset<T, CareCircle$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shareTokens<T extends CareCircle$shareTokensArgs<ExtArgs> = {}>(args?: Subset<T, CareCircle$shareTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CareCircle model
   */
  interface CareCircleFieldRefs {
    readonly id: FieldRef<"CareCircle", 'String'>
    readonly name: FieldRef<"CareCircle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CareCircle findUnique
   */
  export type CareCircleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * Filter, which CareCircle to fetch.
     */
    where: CareCircleWhereUniqueInput
  }

  /**
   * CareCircle findUniqueOrThrow
   */
  export type CareCircleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * Filter, which CareCircle to fetch.
     */
    where: CareCircleWhereUniqueInput
  }

  /**
   * CareCircle findFirst
   */
  export type CareCircleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * Filter, which CareCircle to fetch.
     */
    where?: CareCircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareCircles to fetch.
     */
    orderBy?: CareCircleOrderByWithRelationInput | CareCircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareCircles.
     */
    cursor?: CareCircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareCircles.
     */
    distinct?: CareCircleScalarFieldEnum | CareCircleScalarFieldEnum[]
  }

  /**
   * CareCircle findFirstOrThrow
   */
  export type CareCircleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * Filter, which CareCircle to fetch.
     */
    where?: CareCircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareCircles to fetch.
     */
    orderBy?: CareCircleOrderByWithRelationInput | CareCircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareCircles.
     */
    cursor?: CareCircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareCircles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareCircles.
     */
    distinct?: CareCircleScalarFieldEnum | CareCircleScalarFieldEnum[]
  }

  /**
   * CareCircle findMany
   */
  export type CareCircleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * Filter, which CareCircles to fetch.
     */
    where?: CareCircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareCircles to fetch.
     */
    orderBy?: CareCircleOrderByWithRelationInput | CareCircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareCircles.
     */
    cursor?: CareCircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareCircles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareCircles.
     */
    skip?: number
    distinct?: CareCircleScalarFieldEnum | CareCircleScalarFieldEnum[]
  }

  /**
   * CareCircle create
   */
  export type CareCircleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * The data needed to create a CareCircle.
     */
    data: XOR<CareCircleCreateInput, CareCircleUncheckedCreateInput>
  }

  /**
   * CareCircle createMany
   */
  export type CareCircleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareCircles.
     */
    data: CareCircleCreateManyInput | CareCircleCreateManyInput[]
  }

  /**
   * CareCircle createManyAndReturn
   */
  export type CareCircleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * The data used to create many CareCircles.
     */
    data: CareCircleCreateManyInput | CareCircleCreateManyInput[]
  }

  /**
   * CareCircle update
   */
  export type CareCircleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * The data needed to update a CareCircle.
     */
    data: XOR<CareCircleUpdateInput, CareCircleUncheckedUpdateInput>
    /**
     * Choose, which CareCircle to update.
     */
    where: CareCircleWhereUniqueInput
  }

  /**
   * CareCircle updateMany
   */
  export type CareCircleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareCircles.
     */
    data: XOR<CareCircleUpdateManyMutationInput, CareCircleUncheckedUpdateManyInput>
    /**
     * Filter which CareCircles to update
     */
    where?: CareCircleWhereInput
    /**
     * Limit how many CareCircles to update.
     */
    limit?: number
  }

  /**
   * CareCircle updateManyAndReturn
   */
  export type CareCircleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * The data used to update CareCircles.
     */
    data: XOR<CareCircleUpdateManyMutationInput, CareCircleUncheckedUpdateManyInput>
    /**
     * Filter which CareCircles to update
     */
    where?: CareCircleWhereInput
    /**
     * Limit how many CareCircles to update.
     */
    limit?: number
  }

  /**
   * CareCircle upsert
   */
  export type CareCircleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * The filter to search for the CareCircle to update in case it exists.
     */
    where: CareCircleWhereUniqueInput
    /**
     * In case the CareCircle found by the `where` argument doesn't exist, create a new CareCircle with this data.
     */
    create: XOR<CareCircleCreateInput, CareCircleUncheckedCreateInput>
    /**
     * In case the CareCircle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareCircleUpdateInput, CareCircleUncheckedUpdateInput>
  }

  /**
   * CareCircle delete
   */
  export type CareCircleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
    /**
     * Filter which CareCircle to delete.
     */
    where: CareCircleWhereUniqueInput
  }

  /**
   * CareCircle deleteMany
   */
  export type CareCircleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareCircles to delete
     */
    where?: CareCircleWhereInput
    /**
     * Limit how many CareCircles to delete.
     */
    limit?: number
  }

  /**
   * CareCircle.members
   */
  export type CareCircle$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    where?: CareCircleMemberWhereInput
    orderBy?: CareCircleMemberOrderByWithRelationInput | CareCircleMemberOrderByWithRelationInput[]
    cursor?: CareCircleMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareCircleMemberScalarFieldEnum | CareCircleMemberScalarFieldEnum[]
  }

  /**
   * CareCircle.shareTokens
   */
  export type CareCircle$shareTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    where?: ShareTokenWhereInput
    orderBy?: ShareTokenOrderByWithRelationInput | ShareTokenOrderByWithRelationInput[]
    cursor?: ShareTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShareTokenScalarFieldEnum | ShareTokenScalarFieldEnum[]
  }

  /**
   * CareCircle without action
   */
  export type CareCircleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircle
     */
    select?: CareCircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircle
     */
    omit?: CareCircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleInclude<ExtArgs> | null
  }


  /**
   * Model CareCircleMember
   */

  export type AggregateCareCircleMember = {
    _count: CareCircleMemberCountAggregateOutputType | null
    _min: CareCircleMemberMinAggregateOutputType | null
    _max: CareCircleMemberMaxAggregateOutputType | null
  }

  export type CareCircleMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    careCircleId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type CareCircleMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    careCircleId: string | null
    role: string | null
    joinedAt: Date | null
  }

  export type CareCircleMemberCountAggregateOutputType = {
    id: number
    userId: number
    careCircleId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type CareCircleMemberMinAggregateInputType = {
    id?: true
    userId?: true
    careCircleId?: true
    role?: true
    joinedAt?: true
  }

  export type CareCircleMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    careCircleId?: true
    role?: true
    joinedAt?: true
  }

  export type CareCircleMemberCountAggregateInputType = {
    id?: true
    userId?: true
    careCircleId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type CareCircleMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareCircleMember to aggregate.
     */
    where?: CareCircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareCircleMembers to fetch.
     */
    orderBy?: CareCircleMemberOrderByWithRelationInput | CareCircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareCircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareCircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareCircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareCircleMembers
    **/
    _count?: true | CareCircleMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareCircleMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareCircleMemberMaxAggregateInputType
  }

  export type GetCareCircleMemberAggregateType<T extends CareCircleMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCareCircleMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareCircleMember[P]>
      : GetScalarType<T[P], AggregateCareCircleMember[P]>
  }




  export type CareCircleMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareCircleMemberWhereInput
    orderBy?: CareCircleMemberOrderByWithAggregationInput | CareCircleMemberOrderByWithAggregationInput[]
    by: CareCircleMemberScalarFieldEnum[] | CareCircleMemberScalarFieldEnum
    having?: CareCircleMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareCircleMemberCountAggregateInputType | true
    _min?: CareCircleMemberMinAggregateInputType
    _max?: CareCircleMemberMaxAggregateInputType
  }

  export type CareCircleMemberGroupByOutputType = {
    id: string
    userId: string
    careCircleId: string
    role: string
    joinedAt: Date
    _count: CareCircleMemberCountAggregateOutputType | null
    _min: CareCircleMemberMinAggregateOutputType | null
    _max: CareCircleMemberMaxAggregateOutputType | null
  }

  type GetCareCircleMemberGroupByPayload<T extends CareCircleMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareCircleMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareCircleMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareCircleMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CareCircleMemberGroupByOutputType[P]>
        }
      >
    >


  export type CareCircleMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careCircleId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careCircleMember"]>

  export type CareCircleMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careCircleId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careCircleMember"]>

  export type CareCircleMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    careCircleId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careCircleMember"]>

  export type CareCircleMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    careCircleId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type CareCircleMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "careCircleId" | "role" | "joinedAt", ExtArgs["result"]["careCircleMember"]>
  export type CareCircleMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }
  export type CareCircleMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }
  export type CareCircleMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }

  export type $CareCircleMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareCircleMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      careCircle: Prisma.$CareCirclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      careCircleId: string
      role: string
      joinedAt: Date
    }, ExtArgs["result"]["careCircleMember"]>
    composites: {}
  }

  type CareCircleMemberGetPayload<S extends boolean | null | undefined | CareCircleMemberDefaultArgs> = $Result.GetResult<Prisma.$CareCircleMemberPayload, S>

  type CareCircleMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareCircleMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareCircleMemberCountAggregateInputType | true
    }

  export interface CareCircleMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareCircleMember'], meta: { name: 'CareCircleMember' } }
    /**
     * Find zero or one CareCircleMember that matches the filter.
     * @param {CareCircleMemberFindUniqueArgs} args - Arguments to find a CareCircleMember
     * @example
     * // Get one CareCircleMember
     * const careCircleMember = await prisma.careCircleMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareCircleMemberFindUniqueArgs>(args: SelectSubset<T, CareCircleMemberFindUniqueArgs<ExtArgs>>): Prisma__CareCircleMemberClient<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareCircleMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareCircleMemberFindUniqueOrThrowArgs} args - Arguments to find a CareCircleMember
     * @example
     * // Get one CareCircleMember
     * const careCircleMember = await prisma.careCircleMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareCircleMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CareCircleMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareCircleMemberClient<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareCircleMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleMemberFindFirstArgs} args - Arguments to find a CareCircleMember
     * @example
     * // Get one CareCircleMember
     * const careCircleMember = await prisma.careCircleMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareCircleMemberFindFirstArgs>(args?: SelectSubset<T, CareCircleMemberFindFirstArgs<ExtArgs>>): Prisma__CareCircleMemberClient<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareCircleMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleMemberFindFirstOrThrowArgs} args - Arguments to find a CareCircleMember
     * @example
     * // Get one CareCircleMember
     * const careCircleMember = await prisma.careCircleMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareCircleMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CareCircleMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareCircleMemberClient<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareCircleMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareCircleMembers
     * const careCircleMembers = await prisma.careCircleMember.findMany()
     * 
     * // Get first 10 CareCircleMembers
     * const careCircleMembers = await prisma.careCircleMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careCircleMemberWithIdOnly = await prisma.careCircleMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareCircleMemberFindManyArgs>(args?: SelectSubset<T, CareCircleMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareCircleMember.
     * @param {CareCircleMemberCreateArgs} args - Arguments to create a CareCircleMember.
     * @example
     * // Create one CareCircleMember
     * const CareCircleMember = await prisma.careCircleMember.create({
     *   data: {
     *     // ... data to create a CareCircleMember
     *   }
     * })
     * 
     */
    create<T extends CareCircleMemberCreateArgs>(args: SelectSubset<T, CareCircleMemberCreateArgs<ExtArgs>>): Prisma__CareCircleMemberClient<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareCircleMembers.
     * @param {CareCircleMemberCreateManyArgs} args - Arguments to create many CareCircleMembers.
     * @example
     * // Create many CareCircleMembers
     * const careCircleMember = await prisma.careCircleMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareCircleMemberCreateManyArgs>(args?: SelectSubset<T, CareCircleMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CareCircleMembers and returns the data saved in the database.
     * @param {CareCircleMemberCreateManyAndReturnArgs} args - Arguments to create many CareCircleMembers.
     * @example
     * // Create many CareCircleMembers
     * const careCircleMember = await prisma.careCircleMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CareCircleMembers and only return the `id`
     * const careCircleMemberWithIdOnly = await prisma.careCircleMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CareCircleMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CareCircleMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CareCircleMember.
     * @param {CareCircleMemberDeleteArgs} args - Arguments to delete one CareCircleMember.
     * @example
     * // Delete one CareCircleMember
     * const CareCircleMember = await prisma.careCircleMember.delete({
     *   where: {
     *     // ... filter to delete one CareCircleMember
     *   }
     * })
     * 
     */
    delete<T extends CareCircleMemberDeleteArgs>(args: SelectSubset<T, CareCircleMemberDeleteArgs<ExtArgs>>): Prisma__CareCircleMemberClient<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareCircleMember.
     * @param {CareCircleMemberUpdateArgs} args - Arguments to update one CareCircleMember.
     * @example
     * // Update one CareCircleMember
     * const careCircleMember = await prisma.careCircleMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareCircleMemberUpdateArgs>(args: SelectSubset<T, CareCircleMemberUpdateArgs<ExtArgs>>): Prisma__CareCircleMemberClient<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareCircleMembers.
     * @param {CareCircleMemberDeleteManyArgs} args - Arguments to filter CareCircleMembers to delete.
     * @example
     * // Delete a few CareCircleMembers
     * const { count } = await prisma.careCircleMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareCircleMemberDeleteManyArgs>(args?: SelectSubset<T, CareCircleMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareCircleMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareCircleMembers
     * const careCircleMember = await prisma.careCircleMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareCircleMemberUpdateManyArgs>(args: SelectSubset<T, CareCircleMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareCircleMembers and returns the data updated in the database.
     * @param {CareCircleMemberUpdateManyAndReturnArgs} args - Arguments to update many CareCircleMembers.
     * @example
     * // Update many CareCircleMembers
     * const careCircleMember = await prisma.careCircleMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CareCircleMembers and only return the `id`
     * const careCircleMemberWithIdOnly = await prisma.careCircleMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CareCircleMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CareCircleMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CareCircleMember.
     * @param {CareCircleMemberUpsertArgs} args - Arguments to update or create a CareCircleMember.
     * @example
     * // Update or create a CareCircleMember
     * const careCircleMember = await prisma.careCircleMember.upsert({
     *   create: {
     *     // ... data to create a CareCircleMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareCircleMember we want to update
     *   }
     * })
     */
    upsert<T extends CareCircleMemberUpsertArgs>(args: SelectSubset<T, CareCircleMemberUpsertArgs<ExtArgs>>): Prisma__CareCircleMemberClient<$Result.GetResult<Prisma.$CareCircleMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareCircleMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleMemberCountArgs} args - Arguments to filter CareCircleMembers to count.
     * @example
     * // Count the number of CareCircleMembers
     * const count = await prisma.careCircleMember.count({
     *   where: {
     *     // ... the filter for the CareCircleMembers we want to count
     *   }
     * })
    **/
    count<T extends CareCircleMemberCountArgs>(
      args?: Subset<T, CareCircleMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareCircleMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareCircleMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareCircleMemberAggregateArgs>(args: Subset<T, CareCircleMemberAggregateArgs>): Prisma.PrismaPromise<GetCareCircleMemberAggregateType<T>>

    /**
     * Group by CareCircleMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareCircleMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareCircleMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareCircleMemberGroupByArgs['orderBy'] }
        : { orderBy?: CareCircleMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareCircleMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareCircleMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareCircleMember model
   */
  readonly fields: CareCircleMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareCircleMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareCircleMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    careCircle<T extends CareCircleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareCircleDefaultArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CareCircleMember model
   */
  interface CareCircleMemberFieldRefs {
    readonly id: FieldRef<"CareCircleMember", 'String'>
    readonly userId: FieldRef<"CareCircleMember", 'String'>
    readonly careCircleId: FieldRef<"CareCircleMember", 'String'>
    readonly role: FieldRef<"CareCircleMember", 'String'>
    readonly joinedAt: FieldRef<"CareCircleMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CareCircleMember findUnique
   */
  export type CareCircleMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CareCircleMember to fetch.
     */
    where: CareCircleMemberWhereUniqueInput
  }

  /**
   * CareCircleMember findUniqueOrThrow
   */
  export type CareCircleMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CareCircleMember to fetch.
     */
    where: CareCircleMemberWhereUniqueInput
  }

  /**
   * CareCircleMember findFirst
   */
  export type CareCircleMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CareCircleMember to fetch.
     */
    where?: CareCircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareCircleMembers to fetch.
     */
    orderBy?: CareCircleMemberOrderByWithRelationInput | CareCircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareCircleMembers.
     */
    cursor?: CareCircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareCircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareCircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareCircleMembers.
     */
    distinct?: CareCircleMemberScalarFieldEnum | CareCircleMemberScalarFieldEnum[]
  }

  /**
   * CareCircleMember findFirstOrThrow
   */
  export type CareCircleMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CareCircleMember to fetch.
     */
    where?: CareCircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareCircleMembers to fetch.
     */
    orderBy?: CareCircleMemberOrderByWithRelationInput | CareCircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareCircleMembers.
     */
    cursor?: CareCircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareCircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareCircleMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareCircleMembers.
     */
    distinct?: CareCircleMemberScalarFieldEnum | CareCircleMemberScalarFieldEnum[]
  }

  /**
   * CareCircleMember findMany
   */
  export type CareCircleMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * Filter, which CareCircleMembers to fetch.
     */
    where?: CareCircleMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareCircleMembers to fetch.
     */
    orderBy?: CareCircleMemberOrderByWithRelationInput | CareCircleMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareCircleMembers.
     */
    cursor?: CareCircleMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareCircleMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareCircleMembers.
     */
    skip?: number
    distinct?: CareCircleMemberScalarFieldEnum | CareCircleMemberScalarFieldEnum[]
  }

  /**
   * CareCircleMember create
   */
  export type CareCircleMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CareCircleMember.
     */
    data: XOR<CareCircleMemberCreateInput, CareCircleMemberUncheckedCreateInput>
  }

  /**
   * CareCircleMember createMany
   */
  export type CareCircleMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareCircleMembers.
     */
    data: CareCircleMemberCreateManyInput | CareCircleMemberCreateManyInput[]
  }

  /**
   * CareCircleMember createManyAndReturn
   */
  export type CareCircleMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CareCircleMembers.
     */
    data: CareCircleMemberCreateManyInput | CareCircleMemberCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareCircleMember update
   */
  export type CareCircleMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CareCircleMember.
     */
    data: XOR<CareCircleMemberUpdateInput, CareCircleMemberUncheckedUpdateInput>
    /**
     * Choose, which CareCircleMember to update.
     */
    where: CareCircleMemberWhereUniqueInput
  }

  /**
   * CareCircleMember updateMany
   */
  export type CareCircleMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareCircleMembers.
     */
    data: XOR<CareCircleMemberUpdateManyMutationInput, CareCircleMemberUncheckedUpdateManyInput>
    /**
     * Filter which CareCircleMembers to update
     */
    where?: CareCircleMemberWhereInput
    /**
     * Limit how many CareCircleMembers to update.
     */
    limit?: number
  }

  /**
   * CareCircleMember updateManyAndReturn
   */
  export type CareCircleMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * The data used to update CareCircleMembers.
     */
    data: XOR<CareCircleMemberUpdateManyMutationInput, CareCircleMemberUncheckedUpdateManyInput>
    /**
     * Filter which CareCircleMembers to update
     */
    where?: CareCircleMemberWhereInput
    /**
     * Limit how many CareCircleMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CareCircleMember upsert
   */
  export type CareCircleMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CareCircleMember to update in case it exists.
     */
    where: CareCircleMemberWhereUniqueInput
    /**
     * In case the CareCircleMember found by the `where` argument doesn't exist, create a new CareCircleMember with this data.
     */
    create: XOR<CareCircleMemberCreateInput, CareCircleMemberUncheckedCreateInput>
    /**
     * In case the CareCircleMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareCircleMemberUpdateInput, CareCircleMemberUncheckedUpdateInput>
  }

  /**
   * CareCircleMember delete
   */
  export type CareCircleMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
    /**
     * Filter which CareCircleMember to delete.
     */
    where: CareCircleMemberWhereUniqueInput
  }

  /**
   * CareCircleMember deleteMany
   */
  export type CareCircleMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareCircleMembers to delete
     */
    where?: CareCircleMemberWhereInput
    /**
     * Limit how many CareCircleMembers to delete.
     */
    limit?: number
  }

  /**
   * CareCircleMember without action
   */
  export type CareCircleMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareCircleMember
     */
    select?: CareCircleMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareCircleMember
     */
    omit?: CareCircleMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareCircleMemberInclude<ExtArgs> | null
  }


  /**
   * Model ShareToken
   */

  export type AggregateShareToken = {
    _count: ShareTokenCountAggregateOutputType | null
    _min: ShareTokenMinAggregateOutputType | null
    _max: ShareTokenMaxAggregateOutputType | null
  }

  export type ShareTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    careCircleId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type ShareTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    careCircleId: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type ShareTokenCountAggregateOutputType = {
    id: number
    token: number
    careCircleId: number
    createdAt: number
    expiresAt: number
    scopes: number
    _all: number
  }


  export type ShareTokenMinAggregateInputType = {
    id?: true
    token?: true
    careCircleId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type ShareTokenMaxAggregateInputType = {
    id?: true
    token?: true
    careCircleId?: true
    createdAt?: true
    expiresAt?: true
  }

  export type ShareTokenCountAggregateInputType = {
    id?: true
    token?: true
    careCircleId?: true
    createdAt?: true
    expiresAt?: true
    scopes?: true
    _all?: true
  }

  export type ShareTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareToken to aggregate.
     */
    where?: ShareTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareTokens to fetch.
     */
    orderBy?: ShareTokenOrderByWithRelationInput | ShareTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShareTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShareTokens
    **/
    _count?: true | ShareTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShareTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShareTokenMaxAggregateInputType
  }

  export type GetShareTokenAggregateType<T extends ShareTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateShareToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShareToken[P]>
      : GetScalarType<T[P], AggregateShareToken[P]>
  }




  export type ShareTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShareTokenWhereInput
    orderBy?: ShareTokenOrderByWithAggregationInput | ShareTokenOrderByWithAggregationInput[]
    by: ShareTokenScalarFieldEnum[] | ShareTokenScalarFieldEnum
    having?: ShareTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShareTokenCountAggregateInputType | true
    _min?: ShareTokenMinAggregateInputType
    _max?: ShareTokenMaxAggregateInputType
  }

  export type ShareTokenGroupByOutputType = {
    id: string
    token: string
    careCircleId: string
    createdAt: Date
    expiresAt: Date | null
    scopes: JsonValue
    _count: ShareTokenCountAggregateOutputType | null
    _min: ShareTokenMinAggregateOutputType | null
    _max: ShareTokenMaxAggregateOutputType | null
  }

  type GetShareTokenGroupByPayload<T extends ShareTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShareTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShareTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ShareTokenGroupByOutputType[P]>
        }
      >
    >


  export type ShareTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    careCircleId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    scopes?: boolean
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareToken"]>

  export type ShareTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    careCircleId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    scopes?: boolean
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareToken"]>

  export type ShareTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    careCircleId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    scopes?: boolean
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shareToken"]>

  export type ShareTokenSelectScalar = {
    id?: boolean
    token?: boolean
    careCircleId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    scopes?: boolean
  }

  export type ShareTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "careCircleId" | "createdAt" | "expiresAt" | "scopes", ExtArgs["result"]["shareToken"]>
  export type ShareTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }
  export type ShareTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }
  export type ShareTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    careCircle?: boolean | CareCircleDefaultArgs<ExtArgs>
  }

  export type $ShareTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShareToken"
    objects: {
      careCircle: Prisma.$CareCirclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      careCircleId: string
      createdAt: Date
      expiresAt: Date | null
      scopes: Prisma.JsonValue
    }, ExtArgs["result"]["shareToken"]>
    composites: {}
  }

  type ShareTokenGetPayload<S extends boolean | null | undefined | ShareTokenDefaultArgs> = $Result.GetResult<Prisma.$ShareTokenPayload, S>

  type ShareTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShareTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShareTokenCountAggregateInputType | true
    }

  export interface ShareTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShareToken'], meta: { name: 'ShareToken' } }
    /**
     * Find zero or one ShareToken that matches the filter.
     * @param {ShareTokenFindUniqueArgs} args - Arguments to find a ShareToken
     * @example
     * // Get one ShareToken
     * const shareToken = await prisma.shareToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShareTokenFindUniqueArgs>(args: SelectSubset<T, ShareTokenFindUniqueArgs<ExtArgs>>): Prisma__ShareTokenClient<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShareToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShareTokenFindUniqueOrThrowArgs} args - Arguments to find a ShareToken
     * @example
     * // Get one ShareToken
     * const shareToken = await prisma.shareToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShareTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ShareTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShareTokenClient<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTokenFindFirstArgs} args - Arguments to find a ShareToken
     * @example
     * // Get one ShareToken
     * const shareToken = await prisma.shareToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShareTokenFindFirstArgs>(args?: SelectSubset<T, ShareTokenFindFirstArgs<ExtArgs>>): Prisma__ShareTokenClient<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShareToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTokenFindFirstOrThrowArgs} args - Arguments to find a ShareToken
     * @example
     * // Get one ShareToken
     * const shareToken = await prisma.shareToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShareTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ShareTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShareTokenClient<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShareTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShareTokens
     * const shareTokens = await prisma.shareToken.findMany()
     * 
     * // Get first 10 ShareTokens
     * const shareTokens = await prisma.shareToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shareTokenWithIdOnly = await prisma.shareToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShareTokenFindManyArgs>(args?: SelectSubset<T, ShareTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShareToken.
     * @param {ShareTokenCreateArgs} args - Arguments to create a ShareToken.
     * @example
     * // Create one ShareToken
     * const ShareToken = await prisma.shareToken.create({
     *   data: {
     *     // ... data to create a ShareToken
     *   }
     * })
     * 
     */
    create<T extends ShareTokenCreateArgs>(args: SelectSubset<T, ShareTokenCreateArgs<ExtArgs>>): Prisma__ShareTokenClient<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShareTokens.
     * @param {ShareTokenCreateManyArgs} args - Arguments to create many ShareTokens.
     * @example
     * // Create many ShareTokens
     * const shareToken = await prisma.shareToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShareTokenCreateManyArgs>(args?: SelectSubset<T, ShareTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShareTokens and returns the data saved in the database.
     * @param {ShareTokenCreateManyAndReturnArgs} args - Arguments to create many ShareTokens.
     * @example
     * // Create many ShareTokens
     * const shareToken = await prisma.shareToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShareTokens and only return the `id`
     * const shareTokenWithIdOnly = await prisma.shareToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShareTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ShareTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShareToken.
     * @param {ShareTokenDeleteArgs} args - Arguments to delete one ShareToken.
     * @example
     * // Delete one ShareToken
     * const ShareToken = await prisma.shareToken.delete({
     *   where: {
     *     // ... filter to delete one ShareToken
     *   }
     * })
     * 
     */
    delete<T extends ShareTokenDeleteArgs>(args: SelectSubset<T, ShareTokenDeleteArgs<ExtArgs>>): Prisma__ShareTokenClient<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShareToken.
     * @param {ShareTokenUpdateArgs} args - Arguments to update one ShareToken.
     * @example
     * // Update one ShareToken
     * const shareToken = await prisma.shareToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShareTokenUpdateArgs>(args: SelectSubset<T, ShareTokenUpdateArgs<ExtArgs>>): Prisma__ShareTokenClient<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShareTokens.
     * @param {ShareTokenDeleteManyArgs} args - Arguments to filter ShareTokens to delete.
     * @example
     * // Delete a few ShareTokens
     * const { count } = await prisma.shareToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShareTokenDeleteManyArgs>(args?: SelectSubset<T, ShareTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShareTokens
     * const shareToken = await prisma.shareToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShareTokenUpdateManyArgs>(args: SelectSubset<T, ShareTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShareTokens and returns the data updated in the database.
     * @param {ShareTokenUpdateManyAndReturnArgs} args - Arguments to update many ShareTokens.
     * @example
     * // Update many ShareTokens
     * const shareToken = await prisma.shareToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShareTokens and only return the `id`
     * const shareTokenWithIdOnly = await prisma.shareToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShareTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ShareTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShareToken.
     * @param {ShareTokenUpsertArgs} args - Arguments to update or create a ShareToken.
     * @example
     * // Update or create a ShareToken
     * const shareToken = await prisma.shareToken.upsert({
     *   create: {
     *     // ... data to create a ShareToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShareToken we want to update
     *   }
     * })
     */
    upsert<T extends ShareTokenUpsertArgs>(args: SelectSubset<T, ShareTokenUpsertArgs<ExtArgs>>): Prisma__ShareTokenClient<$Result.GetResult<Prisma.$ShareTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShareTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTokenCountArgs} args - Arguments to filter ShareTokens to count.
     * @example
     * // Count the number of ShareTokens
     * const count = await prisma.shareToken.count({
     *   where: {
     *     // ... the filter for the ShareTokens we want to count
     *   }
     * })
    **/
    count<T extends ShareTokenCountArgs>(
      args?: Subset<T, ShareTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShareToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShareTokenAggregateArgs>(args: Subset<T, ShareTokenAggregateArgs>): Prisma.PrismaPromise<GetShareTokenAggregateType<T>>

    /**
     * Group by ShareToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShareTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShareTokenGroupByArgs['orderBy'] }
        : { orderBy?: ShareTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShareTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShareTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShareToken model
   */
  readonly fields: ShareTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShareToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShareTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    careCircle<T extends CareCircleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CareCircleDefaultArgs<ExtArgs>>): Prisma__CareCircleClient<$Result.GetResult<Prisma.$CareCirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShareToken model
   */
  interface ShareTokenFieldRefs {
    readonly id: FieldRef<"ShareToken", 'String'>
    readonly token: FieldRef<"ShareToken", 'String'>
    readonly careCircleId: FieldRef<"ShareToken", 'String'>
    readonly createdAt: FieldRef<"ShareToken", 'DateTime'>
    readonly expiresAt: FieldRef<"ShareToken", 'DateTime'>
    readonly scopes: FieldRef<"ShareToken", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ShareToken findUnique
   */
  export type ShareTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * Filter, which ShareToken to fetch.
     */
    where: ShareTokenWhereUniqueInput
  }

  /**
   * ShareToken findUniqueOrThrow
   */
  export type ShareTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * Filter, which ShareToken to fetch.
     */
    where: ShareTokenWhereUniqueInput
  }

  /**
   * ShareToken findFirst
   */
  export type ShareTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * Filter, which ShareToken to fetch.
     */
    where?: ShareTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareTokens to fetch.
     */
    orderBy?: ShareTokenOrderByWithRelationInput | ShareTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareTokens.
     */
    cursor?: ShareTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareTokens.
     */
    distinct?: ShareTokenScalarFieldEnum | ShareTokenScalarFieldEnum[]
  }

  /**
   * ShareToken findFirstOrThrow
   */
  export type ShareTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * Filter, which ShareToken to fetch.
     */
    where?: ShareTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareTokens to fetch.
     */
    orderBy?: ShareTokenOrderByWithRelationInput | ShareTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShareTokens.
     */
    cursor?: ShareTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShareTokens.
     */
    distinct?: ShareTokenScalarFieldEnum | ShareTokenScalarFieldEnum[]
  }

  /**
   * ShareToken findMany
   */
  export type ShareTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * Filter, which ShareTokens to fetch.
     */
    where?: ShareTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShareTokens to fetch.
     */
    orderBy?: ShareTokenOrderByWithRelationInput | ShareTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShareTokens.
     */
    cursor?: ShareTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShareTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShareTokens.
     */
    skip?: number
    distinct?: ShareTokenScalarFieldEnum | ShareTokenScalarFieldEnum[]
  }

  /**
   * ShareToken create
   */
  export type ShareTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ShareToken.
     */
    data: XOR<ShareTokenCreateInput, ShareTokenUncheckedCreateInput>
  }

  /**
   * ShareToken createMany
   */
  export type ShareTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShareTokens.
     */
    data: ShareTokenCreateManyInput | ShareTokenCreateManyInput[]
  }

  /**
   * ShareToken createManyAndReturn
   */
  export type ShareTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ShareTokens.
     */
    data: ShareTokenCreateManyInput | ShareTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareToken update
   */
  export type ShareTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ShareToken.
     */
    data: XOR<ShareTokenUpdateInput, ShareTokenUncheckedUpdateInput>
    /**
     * Choose, which ShareToken to update.
     */
    where: ShareTokenWhereUniqueInput
  }

  /**
   * ShareToken updateMany
   */
  export type ShareTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShareTokens.
     */
    data: XOR<ShareTokenUpdateManyMutationInput, ShareTokenUncheckedUpdateManyInput>
    /**
     * Filter which ShareTokens to update
     */
    where?: ShareTokenWhereInput
    /**
     * Limit how many ShareTokens to update.
     */
    limit?: number
  }

  /**
   * ShareToken updateManyAndReturn
   */
  export type ShareTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * The data used to update ShareTokens.
     */
    data: XOR<ShareTokenUpdateManyMutationInput, ShareTokenUncheckedUpdateManyInput>
    /**
     * Filter which ShareTokens to update
     */
    where?: ShareTokenWhereInput
    /**
     * Limit how many ShareTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShareToken upsert
   */
  export type ShareTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ShareToken to update in case it exists.
     */
    where: ShareTokenWhereUniqueInput
    /**
     * In case the ShareToken found by the `where` argument doesn't exist, create a new ShareToken with this data.
     */
    create: XOR<ShareTokenCreateInput, ShareTokenUncheckedCreateInput>
    /**
     * In case the ShareToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShareTokenUpdateInput, ShareTokenUncheckedUpdateInput>
  }

  /**
   * ShareToken delete
   */
  export type ShareTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
    /**
     * Filter which ShareToken to delete.
     */
    where: ShareTokenWhereUniqueInput
  }

  /**
   * ShareToken deleteMany
   */
  export type ShareTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShareTokens to delete
     */
    where?: ShareTokenWhereInput
    /**
     * Limit how many ShareTokens to delete.
     */
    limit?: number
  }

  /**
   * ShareToken without action
   */
  export type ShareTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShareToken
     */
    select?: ShareTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShareToken
     */
    omit?: ShareTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShareTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    sessionToken: 'sessionToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    key: 'key',
    valueNum: 'valueNum',
    valueText: 'valueText',
    unit: 'unit',
    recordedAt: 'recordedAt'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const AssessmentResponseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    score: 'score',
    answers: 'answers',
    createdAt: 'createdAt'
  };

  export type AssessmentResponseScalarFieldEnum = (typeof AssessmentResponseScalarFieldEnum)[keyof typeof AssessmentResponseScalarFieldEnum]


  export const CareCircleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CareCircleScalarFieldEnum = (typeof CareCircleScalarFieldEnum)[keyof typeof CareCircleScalarFieldEnum]


  export const CareCircleMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    careCircleId: 'careCircleId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type CareCircleMemberScalarFieldEnum = (typeof CareCircleMemberScalarFieldEnum)[keyof typeof CareCircleMemberScalarFieldEnum]


  export const ShareTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    careCircleId: 'careCircleId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    scopes: 'scopes'
  };

  export type ShareTokenScalarFieldEnum = (typeof ShareTokenScalarFieldEnum)[keyof typeof ShareTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    sessionToken?: StringNullableFilter<"User"> | string | null
    metrics?: MetricListRelationFilter
    responses?: AssessmentResponseListRelationFilter
    careCircles?: CareCircleMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    metrics?: MetricOrderByRelationAggregateInput
    responses?: AssessmentResponseOrderByRelationAggregateInput
    careCircles?: CareCircleMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    sessionToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    metrics?: MetricListRelationFilter
    responses?: AssessmentResponseListRelationFilter
    careCircles?: CareCircleMemberListRelationFilter
  }, "id" | "email" | "sessionToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    sessionToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    sessionToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: StringFilter<"Metric"> | string
    userId?: StringFilter<"Metric"> | string
    key?: StringFilter<"Metric"> | string
    valueNum?: FloatNullableFilter<"Metric"> | number | null
    valueText?: StringNullableFilter<"Metric"> | string | null
    unit?: StringNullableFilter<"Metric"> | string | null
    recordedAt?: DateTimeFilter<"Metric"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    valueNum?: SortOrderInput | SortOrder
    valueText?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    userId?: StringFilter<"Metric"> | string
    key?: StringFilter<"Metric"> | string
    valueNum?: FloatNullableFilter<"Metric"> | number | null
    valueText?: StringNullableFilter<"Metric"> | string | null
    unit?: StringNullableFilter<"Metric"> | string | null
    recordedAt?: DateTimeFilter<"Metric"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    valueNum?: SortOrderInput | SortOrder
    valueText?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    _count?: MetricCountOrderByAggregateInput
    _avg?: MetricAvgOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
    _sum?: MetricSumOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Metric"> | string
    userId?: StringWithAggregatesFilter<"Metric"> | string
    key?: StringWithAggregatesFilter<"Metric"> | string
    valueNum?: FloatNullableWithAggregatesFilter<"Metric"> | number | null
    valueText?: StringNullableWithAggregatesFilter<"Metric"> | string | null
    unit?: StringNullableWithAggregatesFilter<"Metric"> | string | null
    recordedAt?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
  }

  export type AssessmentResponseWhereInput = {
    AND?: AssessmentResponseWhereInput | AssessmentResponseWhereInput[]
    OR?: AssessmentResponseWhereInput[]
    NOT?: AssessmentResponseWhereInput | AssessmentResponseWhereInput[]
    id?: StringFilter<"AssessmentResponse"> | string
    userId?: StringNullableFilter<"AssessmentResponse"> | string | null
    type?: StringFilter<"AssessmentResponse"> | string
    score?: IntNullableFilter<"AssessmentResponse"> | number | null
    answers?: JsonFilter<"AssessmentResponse">
    createdAt?: DateTimeFilter<"AssessmentResponse"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AssessmentResponseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    score?: SortOrderInput | SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AssessmentResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentResponseWhereInput | AssessmentResponseWhereInput[]
    OR?: AssessmentResponseWhereInput[]
    NOT?: AssessmentResponseWhereInput | AssessmentResponseWhereInput[]
    userId?: StringNullableFilter<"AssessmentResponse"> | string | null
    type?: StringFilter<"AssessmentResponse"> | string
    score?: IntNullableFilter<"AssessmentResponse"> | number | null
    answers?: JsonFilter<"AssessmentResponse">
    createdAt?: DateTimeFilter<"AssessmentResponse"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AssessmentResponseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    score?: SortOrderInput | SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    _count?: AssessmentResponseCountOrderByAggregateInput
    _avg?: AssessmentResponseAvgOrderByAggregateInput
    _max?: AssessmentResponseMaxOrderByAggregateInput
    _min?: AssessmentResponseMinOrderByAggregateInput
    _sum?: AssessmentResponseSumOrderByAggregateInput
  }

  export type AssessmentResponseScalarWhereWithAggregatesInput = {
    AND?: AssessmentResponseScalarWhereWithAggregatesInput | AssessmentResponseScalarWhereWithAggregatesInput[]
    OR?: AssessmentResponseScalarWhereWithAggregatesInput[]
    NOT?: AssessmentResponseScalarWhereWithAggregatesInput | AssessmentResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssessmentResponse"> | string
    userId?: StringNullableWithAggregatesFilter<"AssessmentResponse"> | string | null
    type?: StringWithAggregatesFilter<"AssessmentResponse"> | string
    score?: IntNullableWithAggregatesFilter<"AssessmentResponse"> | number | null
    answers?: JsonWithAggregatesFilter<"AssessmentResponse">
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentResponse"> | Date | string
  }

  export type CareCircleWhereInput = {
    AND?: CareCircleWhereInput | CareCircleWhereInput[]
    OR?: CareCircleWhereInput[]
    NOT?: CareCircleWhereInput | CareCircleWhereInput[]
    id?: StringFilter<"CareCircle"> | string
    name?: StringFilter<"CareCircle"> | string
    members?: CareCircleMemberListRelationFilter
    shareTokens?: ShareTokenListRelationFilter
  }

  export type CareCircleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    members?: CareCircleMemberOrderByRelationAggregateInput
    shareTokens?: ShareTokenOrderByRelationAggregateInput
  }

  export type CareCircleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CareCircleWhereInput | CareCircleWhereInput[]
    OR?: CareCircleWhereInput[]
    NOT?: CareCircleWhereInput | CareCircleWhereInput[]
    name?: StringFilter<"CareCircle"> | string
    members?: CareCircleMemberListRelationFilter
    shareTokens?: ShareTokenListRelationFilter
  }, "id">

  export type CareCircleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CareCircleCountOrderByAggregateInput
    _max?: CareCircleMaxOrderByAggregateInput
    _min?: CareCircleMinOrderByAggregateInput
  }

  export type CareCircleScalarWhereWithAggregatesInput = {
    AND?: CareCircleScalarWhereWithAggregatesInput | CareCircleScalarWhereWithAggregatesInput[]
    OR?: CareCircleScalarWhereWithAggregatesInput[]
    NOT?: CareCircleScalarWhereWithAggregatesInput | CareCircleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CareCircle"> | string
    name?: StringWithAggregatesFilter<"CareCircle"> | string
  }

  export type CareCircleMemberWhereInput = {
    AND?: CareCircleMemberWhereInput | CareCircleMemberWhereInput[]
    OR?: CareCircleMemberWhereInput[]
    NOT?: CareCircleMemberWhereInput | CareCircleMemberWhereInput[]
    id?: StringFilter<"CareCircleMember"> | string
    userId?: StringFilter<"CareCircleMember"> | string
    careCircleId?: StringFilter<"CareCircleMember"> | string
    role?: StringFilter<"CareCircleMember"> | string
    joinedAt?: DateTimeFilter<"CareCircleMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    careCircle?: XOR<CareCircleScalarRelationFilter, CareCircleWhereInput>
  }

  export type CareCircleMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    careCircleId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    careCircle?: CareCircleOrderByWithRelationInput
  }

  export type CareCircleMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CareCircleMemberWhereInput | CareCircleMemberWhereInput[]
    OR?: CareCircleMemberWhereInput[]
    NOT?: CareCircleMemberWhereInput | CareCircleMemberWhereInput[]
    userId?: StringFilter<"CareCircleMember"> | string
    careCircleId?: StringFilter<"CareCircleMember"> | string
    role?: StringFilter<"CareCircleMember"> | string
    joinedAt?: DateTimeFilter<"CareCircleMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    careCircle?: XOR<CareCircleScalarRelationFilter, CareCircleWhereInput>
  }, "id">

  export type CareCircleMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    careCircleId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: CareCircleMemberCountOrderByAggregateInput
    _max?: CareCircleMemberMaxOrderByAggregateInput
    _min?: CareCircleMemberMinOrderByAggregateInput
  }

  export type CareCircleMemberScalarWhereWithAggregatesInput = {
    AND?: CareCircleMemberScalarWhereWithAggregatesInput | CareCircleMemberScalarWhereWithAggregatesInput[]
    OR?: CareCircleMemberScalarWhereWithAggregatesInput[]
    NOT?: CareCircleMemberScalarWhereWithAggregatesInput | CareCircleMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CareCircleMember"> | string
    userId?: StringWithAggregatesFilter<"CareCircleMember"> | string
    careCircleId?: StringWithAggregatesFilter<"CareCircleMember"> | string
    role?: StringWithAggregatesFilter<"CareCircleMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"CareCircleMember"> | Date | string
  }

  export type ShareTokenWhereInput = {
    AND?: ShareTokenWhereInput | ShareTokenWhereInput[]
    OR?: ShareTokenWhereInput[]
    NOT?: ShareTokenWhereInput | ShareTokenWhereInput[]
    id?: StringFilter<"ShareToken"> | string
    token?: StringFilter<"ShareToken"> | string
    careCircleId?: StringFilter<"ShareToken"> | string
    createdAt?: DateTimeFilter<"ShareToken"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ShareToken"> | Date | string | null
    scopes?: JsonFilter<"ShareToken">
    careCircle?: XOR<CareCircleScalarRelationFilter, CareCircleWhereInput>
  }

  export type ShareTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    careCircleId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    scopes?: SortOrder
    careCircle?: CareCircleOrderByWithRelationInput
  }

  export type ShareTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ShareTokenWhereInput | ShareTokenWhereInput[]
    OR?: ShareTokenWhereInput[]
    NOT?: ShareTokenWhereInput | ShareTokenWhereInput[]
    careCircleId?: StringFilter<"ShareToken"> | string
    createdAt?: DateTimeFilter<"ShareToken"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ShareToken"> | Date | string | null
    scopes?: JsonFilter<"ShareToken">
    careCircle?: XOR<CareCircleScalarRelationFilter, CareCircleWhereInput>
  }, "id" | "token">

  export type ShareTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    careCircleId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    scopes?: SortOrder
    _count?: ShareTokenCountOrderByAggregateInput
    _max?: ShareTokenMaxOrderByAggregateInput
    _min?: ShareTokenMinOrderByAggregateInput
  }

  export type ShareTokenScalarWhereWithAggregatesInput = {
    AND?: ShareTokenScalarWhereWithAggregatesInput | ShareTokenScalarWhereWithAggregatesInput[]
    OR?: ShareTokenScalarWhereWithAggregatesInput[]
    NOT?: ShareTokenScalarWhereWithAggregatesInput | ShareTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShareToken"> | string
    token?: StringWithAggregatesFilter<"ShareToken"> | string
    careCircleId?: StringWithAggregatesFilter<"ShareToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShareToken"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ShareToken"> | Date | string | null
    scopes?: JsonWithAggregatesFilter<"ShareToken">
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
    metrics?: MetricCreateNestedManyWithoutUserInput
    responses?: AssessmentResponseCreateNestedManyWithoutUserInput
    careCircles?: CareCircleMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
    metrics?: MetricUncheckedCreateNestedManyWithoutUserInput
    responses?: AssessmentResponseUncheckedCreateNestedManyWithoutUserInput
    careCircles?: CareCircleMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: MetricUpdateManyWithoutUserNestedInput
    responses?: AssessmentResponseUpdateManyWithoutUserNestedInput
    careCircles?: CareCircleMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: MetricUncheckedUpdateManyWithoutUserNestedInput
    responses?: AssessmentResponseUncheckedUpdateManyWithoutUserNestedInput
    careCircles?: CareCircleMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MetricCreateInput = {
    id?: string
    key: string
    valueNum?: number | null
    valueText?: string | null
    unit?: string | null
    recordedAt?: Date | string
    user: UserCreateNestedOneWithoutMetricsInput
  }

  export type MetricUncheckedCreateInput = {
    id?: string
    userId: string
    key: string
    valueNum?: number | null
    valueText?: string | null
    unit?: string | null
    recordedAt?: Date | string
  }

  export type MetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    valueNum?: NullableFloatFieldUpdateOperationsInput | number | null
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type MetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    valueNum?: NullableFloatFieldUpdateOperationsInput | number | null
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricCreateManyInput = {
    id?: string
    userId: string
    key: string
    valueNum?: number | null
    valueText?: string | null
    unit?: string | null
    recordedAt?: Date | string
  }

  export type MetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    valueNum?: NullableFloatFieldUpdateOperationsInput | number | null
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    valueNum?: NullableFloatFieldUpdateOperationsInput | number | null
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResponseCreateInput = {
    id?: string
    type: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutResponsesInput
  }

  export type AssessmentResponseUncheckedCreateInput = {
    id?: string
    userId?: string | null
    type: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssessmentResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutResponsesNestedInput
  }

  export type AssessmentResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResponseCreateManyInput = {
    id?: string
    userId?: string | null
    type: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssessmentResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareCircleCreateInput = {
    id?: string
    name: string
    members?: CareCircleMemberCreateNestedManyWithoutCareCircleInput
    shareTokens?: ShareTokenCreateNestedManyWithoutCareCircleInput
  }

  export type CareCircleUncheckedCreateInput = {
    id?: string
    name: string
    members?: CareCircleMemberUncheckedCreateNestedManyWithoutCareCircleInput
    shareTokens?: ShareTokenUncheckedCreateNestedManyWithoutCareCircleInput
  }

  export type CareCircleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: CareCircleMemberUpdateManyWithoutCareCircleNestedInput
    shareTokens?: ShareTokenUpdateManyWithoutCareCircleNestedInput
  }

  export type CareCircleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: CareCircleMemberUncheckedUpdateManyWithoutCareCircleNestedInput
    shareTokens?: ShareTokenUncheckedUpdateManyWithoutCareCircleNestedInput
  }

  export type CareCircleCreateManyInput = {
    id?: string
    name: string
  }

  export type CareCircleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CareCircleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CareCircleMemberCreateInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutCareCirclesInput
    careCircle: CareCircleCreateNestedOneWithoutMembersInput
  }

  export type CareCircleMemberUncheckedCreateInput = {
    id?: string
    userId: string
    careCircleId: string
    role: string
    joinedAt?: Date | string
  }

  export type CareCircleMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCareCirclesNestedInput
    careCircle?: CareCircleUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CareCircleMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    careCircleId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareCircleMemberCreateManyInput = {
    id?: string
    userId: string
    careCircleId: string
    role: string
    joinedAt?: Date | string
  }

  export type CareCircleMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareCircleMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    careCircleId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    scopes: JsonNullValueInput | InputJsonValue
    careCircle: CareCircleCreateNestedOneWithoutShareTokensInput
  }

  export type ShareTokenUncheckedCreateInput = {
    id?: string
    token: string
    careCircleId: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    scopes: JsonNullValueInput | InputJsonValue
  }

  export type ShareTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: JsonNullValueInput | InputJsonValue
    careCircle?: CareCircleUpdateOneRequiredWithoutShareTokensNestedInput
  }

  export type ShareTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    careCircleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: JsonNullValueInput | InputJsonValue
  }

  export type ShareTokenCreateManyInput = {
    id?: string
    token: string
    careCircleId: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    scopes: JsonNullValueInput | InputJsonValue
  }

  export type ShareTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: JsonNullValueInput | InputJsonValue
  }

  export type ShareTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    careCircleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: JsonNullValueInput | InputJsonValue
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MetricListRelationFilter = {
    every?: MetricWhereInput
    some?: MetricWhereInput
    none?: MetricWhereInput
  }

  export type AssessmentResponseListRelationFilter = {
    every?: AssessmentResponseWhereInput
    some?: AssessmentResponseWhereInput
    none?: AssessmentResponseWhereInput
  }

  export type CareCircleMemberListRelationFilter = {
    every?: CareCircleMemberWhereInput
    some?: CareCircleMemberWhereInput
    none?: CareCircleMemberWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareCircleMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    sessionToken?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    sessionToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    sessionToken?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    valueNum?: SortOrder
    valueText?: SortOrder
    unit?: SortOrder
    recordedAt?: SortOrder
  }

  export type MetricAvgOrderByAggregateInput = {
    valueNum?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    valueNum?: SortOrder
    valueText?: SortOrder
    unit?: SortOrder
    recordedAt?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    key?: SortOrder
    valueNum?: SortOrder
    valueText?: SortOrder
    unit?: SortOrder
    recordedAt?: SortOrder
  }

  export type MetricSumOrderByAggregateInput = {
    valueNum?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AssessmentResponseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    score?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentResponseAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AssessmentResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentResponseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentResponseSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ShareTokenListRelationFilter = {
    every?: ShareTokenWhereInput
    some?: ShareTokenWhereInput
    none?: ShareTokenWhereInput
  }

  export type ShareTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareCircleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CareCircleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CareCircleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CareCircleScalarRelationFilter = {
    is?: CareCircleWhereInput
    isNot?: CareCircleWhereInput
  }

  export type CareCircleMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careCircleId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type CareCircleMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careCircleId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type CareCircleMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    careCircleId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ShareTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    careCircleId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    scopes?: SortOrder
  }

  export type ShareTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    careCircleId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type ShareTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    careCircleId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MetricCreateNestedManyWithoutUserInput = {
    create?: XOR<MetricCreateWithoutUserInput, MetricUncheckedCreateWithoutUserInput> | MetricCreateWithoutUserInput[] | MetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutUserInput | MetricCreateOrConnectWithoutUserInput[]
    createMany?: MetricCreateManyUserInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type AssessmentResponseCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentResponseCreateWithoutUserInput, AssessmentResponseUncheckedCreateWithoutUserInput> | AssessmentResponseCreateWithoutUserInput[] | AssessmentResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentResponseCreateOrConnectWithoutUserInput | AssessmentResponseCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentResponseCreateManyUserInputEnvelope
    connect?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
  }

  export type CareCircleMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<CareCircleMemberCreateWithoutUserInput, CareCircleMemberUncheckedCreateWithoutUserInput> | CareCircleMemberCreateWithoutUserInput[] | CareCircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CareCircleMemberCreateOrConnectWithoutUserInput | CareCircleMemberCreateOrConnectWithoutUserInput[]
    createMany?: CareCircleMemberCreateManyUserInputEnvelope
    connect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
  }

  export type MetricUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MetricCreateWithoutUserInput, MetricUncheckedCreateWithoutUserInput> | MetricCreateWithoutUserInput[] | MetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutUserInput | MetricCreateOrConnectWithoutUserInput[]
    createMany?: MetricCreateManyUserInputEnvelope
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
  }

  export type AssessmentResponseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssessmentResponseCreateWithoutUserInput, AssessmentResponseUncheckedCreateWithoutUserInput> | AssessmentResponseCreateWithoutUserInput[] | AssessmentResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentResponseCreateOrConnectWithoutUserInput | AssessmentResponseCreateOrConnectWithoutUserInput[]
    createMany?: AssessmentResponseCreateManyUserInputEnvelope
    connect?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
  }

  export type CareCircleMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CareCircleMemberCreateWithoutUserInput, CareCircleMemberUncheckedCreateWithoutUserInput> | CareCircleMemberCreateWithoutUserInput[] | CareCircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CareCircleMemberCreateOrConnectWithoutUserInput | CareCircleMemberCreateOrConnectWithoutUserInput[]
    createMany?: CareCircleMemberCreateManyUserInputEnvelope
    connect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MetricUpdateManyWithoutUserNestedInput = {
    create?: XOR<MetricCreateWithoutUserInput, MetricUncheckedCreateWithoutUserInput> | MetricCreateWithoutUserInput[] | MetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutUserInput | MetricCreateOrConnectWithoutUserInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutUserInput | MetricUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MetricCreateManyUserInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutUserInput | MetricUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutUserInput | MetricUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type AssessmentResponseUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentResponseCreateWithoutUserInput, AssessmentResponseUncheckedCreateWithoutUserInput> | AssessmentResponseCreateWithoutUserInput[] | AssessmentResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentResponseCreateOrConnectWithoutUserInput | AssessmentResponseCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentResponseUpsertWithWhereUniqueWithoutUserInput | AssessmentResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentResponseCreateManyUserInputEnvelope
    set?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
    disconnect?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
    delete?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
    connect?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
    update?: AssessmentResponseUpdateWithWhereUniqueWithoutUserInput | AssessmentResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentResponseUpdateManyWithWhereWithoutUserInput | AssessmentResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentResponseScalarWhereInput | AssessmentResponseScalarWhereInput[]
  }

  export type CareCircleMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<CareCircleMemberCreateWithoutUserInput, CareCircleMemberUncheckedCreateWithoutUserInput> | CareCircleMemberCreateWithoutUserInput[] | CareCircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CareCircleMemberCreateOrConnectWithoutUserInput | CareCircleMemberCreateOrConnectWithoutUserInput[]
    upsert?: CareCircleMemberUpsertWithWhereUniqueWithoutUserInput | CareCircleMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CareCircleMemberCreateManyUserInputEnvelope
    set?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    disconnect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    delete?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    connect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    update?: CareCircleMemberUpdateWithWhereUniqueWithoutUserInput | CareCircleMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CareCircleMemberUpdateManyWithWhereWithoutUserInput | CareCircleMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CareCircleMemberScalarWhereInput | CareCircleMemberScalarWhereInput[]
  }

  export type MetricUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MetricCreateWithoutUserInput, MetricUncheckedCreateWithoutUserInput> | MetricCreateWithoutUserInput[] | MetricUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MetricCreateOrConnectWithoutUserInput | MetricCreateOrConnectWithoutUserInput[]
    upsert?: MetricUpsertWithWhereUniqueWithoutUserInput | MetricUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MetricCreateManyUserInputEnvelope
    set?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    disconnect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    delete?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    connect?: MetricWhereUniqueInput | MetricWhereUniqueInput[]
    update?: MetricUpdateWithWhereUniqueWithoutUserInput | MetricUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MetricUpdateManyWithWhereWithoutUserInput | MetricUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MetricScalarWhereInput | MetricScalarWhereInput[]
  }

  export type AssessmentResponseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssessmentResponseCreateWithoutUserInput, AssessmentResponseUncheckedCreateWithoutUserInput> | AssessmentResponseCreateWithoutUserInput[] | AssessmentResponseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssessmentResponseCreateOrConnectWithoutUserInput | AssessmentResponseCreateOrConnectWithoutUserInput[]
    upsert?: AssessmentResponseUpsertWithWhereUniqueWithoutUserInput | AssessmentResponseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssessmentResponseCreateManyUserInputEnvelope
    set?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
    disconnect?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
    delete?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
    connect?: AssessmentResponseWhereUniqueInput | AssessmentResponseWhereUniqueInput[]
    update?: AssessmentResponseUpdateWithWhereUniqueWithoutUserInput | AssessmentResponseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssessmentResponseUpdateManyWithWhereWithoutUserInput | AssessmentResponseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssessmentResponseScalarWhereInput | AssessmentResponseScalarWhereInput[]
  }

  export type CareCircleMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CareCircleMemberCreateWithoutUserInput, CareCircleMemberUncheckedCreateWithoutUserInput> | CareCircleMemberCreateWithoutUserInput[] | CareCircleMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CareCircleMemberCreateOrConnectWithoutUserInput | CareCircleMemberCreateOrConnectWithoutUserInput[]
    upsert?: CareCircleMemberUpsertWithWhereUniqueWithoutUserInput | CareCircleMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CareCircleMemberCreateManyUserInputEnvelope
    set?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    disconnect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    delete?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    connect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    update?: CareCircleMemberUpdateWithWhereUniqueWithoutUserInput | CareCircleMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CareCircleMemberUpdateManyWithWhereWithoutUserInput | CareCircleMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CareCircleMemberScalarWhereInput | CareCircleMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMetricsInput = {
    create?: XOR<UserCreateWithoutMetricsInput, UserUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetricsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<UserCreateWithoutMetricsInput, UserUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMetricsInput
    upsert?: UserUpsertWithoutMetricsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMetricsInput, UserUpdateWithoutMetricsInput>, UserUncheckedUpdateWithoutMetricsInput>
  }

  export type UserCreateNestedOneWithoutResponsesInput = {
    create?: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutResponsesNestedInput = {
    create?: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsesInput
    upsert?: UserUpsertWithoutResponsesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsesInput, UserUpdateWithoutResponsesInput>, UserUncheckedUpdateWithoutResponsesInput>
  }

  export type CareCircleMemberCreateNestedManyWithoutCareCircleInput = {
    create?: XOR<CareCircleMemberCreateWithoutCareCircleInput, CareCircleMemberUncheckedCreateWithoutCareCircleInput> | CareCircleMemberCreateWithoutCareCircleInput[] | CareCircleMemberUncheckedCreateWithoutCareCircleInput[]
    connectOrCreate?: CareCircleMemberCreateOrConnectWithoutCareCircleInput | CareCircleMemberCreateOrConnectWithoutCareCircleInput[]
    createMany?: CareCircleMemberCreateManyCareCircleInputEnvelope
    connect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
  }

  export type ShareTokenCreateNestedManyWithoutCareCircleInput = {
    create?: XOR<ShareTokenCreateWithoutCareCircleInput, ShareTokenUncheckedCreateWithoutCareCircleInput> | ShareTokenCreateWithoutCareCircleInput[] | ShareTokenUncheckedCreateWithoutCareCircleInput[]
    connectOrCreate?: ShareTokenCreateOrConnectWithoutCareCircleInput | ShareTokenCreateOrConnectWithoutCareCircleInput[]
    createMany?: ShareTokenCreateManyCareCircleInputEnvelope
    connect?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
  }

  export type CareCircleMemberUncheckedCreateNestedManyWithoutCareCircleInput = {
    create?: XOR<CareCircleMemberCreateWithoutCareCircleInput, CareCircleMemberUncheckedCreateWithoutCareCircleInput> | CareCircleMemberCreateWithoutCareCircleInput[] | CareCircleMemberUncheckedCreateWithoutCareCircleInput[]
    connectOrCreate?: CareCircleMemberCreateOrConnectWithoutCareCircleInput | CareCircleMemberCreateOrConnectWithoutCareCircleInput[]
    createMany?: CareCircleMemberCreateManyCareCircleInputEnvelope
    connect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
  }

  export type ShareTokenUncheckedCreateNestedManyWithoutCareCircleInput = {
    create?: XOR<ShareTokenCreateWithoutCareCircleInput, ShareTokenUncheckedCreateWithoutCareCircleInput> | ShareTokenCreateWithoutCareCircleInput[] | ShareTokenUncheckedCreateWithoutCareCircleInput[]
    connectOrCreate?: ShareTokenCreateOrConnectWithoutCareCircleInput | ShareTokenCreateOrConnectWithoutCareCircleInput[]
    createMany?: ShareTokenCreateManyCareCircleInputEnvelope
    connect?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
  }

  export type CareCircleMemberUpdateManyWithoutCareCircleNestedInput = {
    create?: XOR<CareCircleMemberCreateWithoutCareCircleInput, CareCircleMemberUncheckedCreateWithoutCareCircleInput> | CareCircleMemberCreateWithoutCareCircleInput[] | CareCircleMemberUncheckedCreateWithoutCareCircleInput[]
    connectOrCreate?: CareCircleMemberCreateOrConnectWithoutCareCircleInput | CareCircleMemberCreateOrConnectWithoutCareCircleInput[]
    upsert?: CareCircleMemberUpsertWithWhereUniqueWithoutCareCircleInput | CareCircleMemberUpsertWithWhereUniqueWithoutCareCircleInput[]
    createMany?: CareCircleMemberCreateManyCareCircleInputEnvelope
    set?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    disconnect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    delete?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    connect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    update?: CareCircleMemberUpdateWithWhereUniqueWithoutCareCircleInput | CareCircleMemberUpdateWithWhereUniqueWithoutCareCircleInput[]
    updateMany?: CareCircleMemberUpdateManyWithWhereWithoutCareCircleInput | CareCircleMemberUpdateManyWithWhereWithoutCareCircleInput[]
    deleteMany?: CareCircleMemberScalarWhereInput | CareCircleMemberScalarWhereInput[]
  }

  export type ShareTokenUpdateManyWithoutCareCircleNestedInput = {
    create?: XOR<ShareTokenCreateWithoutCareCircleInput, ShareTokenUncheckedCreateWithoutCareCircleInput> | ShareTokenCreateWithoutCareCircleInput[] | ShareTokenUncheckedCreateWithoutCareCircleInput[]
    connectOrCreate?: ShareTokenCreateOrConnectWithoutCareCircleInput | ShareTokenCreateOrConnectWithoutCareCircleInput[]
    upsert?: ShareTokenUpsertWithWhereUniqueWithoutCareCircleInput | ShareTokenUpsertWithWhereUniqueWithoutCareCircleInput[]
    createMany?: ShareTokenCreateManyCareCircleInputEnvelope
    set?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
    disconnect?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
    delete?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
    connect?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
    update?: ShareTokenUpdateWithWhereUniqueWithoutCareCircleInput | ShareTokenUpdateWithWhereUniqueWithoutCareCircleInput[]
    updateMany?: ShareTokenUpdateManyWithWhereWithoutCareCircleInput | ShareTokenUpdateManyWithWhereWithoutCareCircleInput[]
    deleteMany?: ShareTokenScalarWhereInput | ShareTokenScalarWhereInput[]
  }

  export type CareCircleMemberUncheckedUpdateManyWithoutCareCircleNestedInput = {
    create?: XOR<CareCircleMemberCreateWithoutCareCircleInput, CareCircleMemberUncheckedCreateWithoutCareCircleInput> | CareCircleMemberCreateWithoutCareCircleInput[] | CareCircleMemberUncheckedCreateWithoutCareCircleInput[]
    connectOrCreate?: CareCircleMemberCreateOrConnectWithoutCareCircleInput | CareCircleMemberCreateOrConnectWithoutCareCircleInput[]
    upsert?: CareCircleMemberUpsertWithWhereUniqueWithoutCareCircleInput | CareCircleMemberUpsertWithWhereUniqueWithoutCareCircleInput[]
    createMany?: CareCircleMemberCreateManyCareCircleInputEnvelope
    set?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    disconnect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    delete?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    connect?: CareCircleMemberWhereUniqueInput | CareCircleMemberWhereUniqueInput[]
    update?: CareCircleMemberUpdateWithWhereUniqueWithoutCareCircleInput | CareCircleMemberUpdateWithWhereUniqueWithoutCareCircleInput[]
    updateMany?: CareCircleMemberUpdateManyWithWhereWithoutCareCircleInput | CareCircleMemberUpdateManyWithWhereWithoutCareCircleInput[]
    deleteMany?: CareCircleMemberScalarWhereInput | CareCircleMemberScalarWhereInput[]
  }

  export type ShareTokenUncheckedUpdateManyWithoutCareCircleNestedInput = {
    create?: XOR<ShareTokenCreateWithoutCareCircleInput, ShareTokenUncheckedCreateWithoutCareCircleInput> | ShareTokenCreateWithoutCareCircleInput[] | ShareTokenUncheckedCreateWithoutCareCircleInput[]
    connectOrCreate?: ShareTokenCreateOrConnectWithoutCareCircleInput | ShareTokenCreateOrConnectWithoutCareCircleInput[]
    upsert?: ShareTokenUpsertWithWhereUniqueWithoutCareCircleInput | ShareTokenUpsertWithWhereUniqueWithoutCareCircleInput[]
    createMany?: ShareTokenCreateManyCareCircleInputEnvelope
    set?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
    disconnect?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
    delete?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
    connect?: ShareTokenWhereUniqueInput | ShareTokenWhereUniqueInput[]
    update?: ShareTokenUpdateWithWhereUniqueWithoutCareCircleInput | ShareTokenUpdateWithWhereUniqueWithoutCareCircleInput[]
    updateMany?: ShareTokenUpdateManyWithWhereWithoutCareCircleInput | ShareTokenUpdateManyWithWhereWithoutCareCircleInput[]
    deleteMany?: ShareTokenScalarWhereInput | ShareTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCareCirclesInput = {
    create?: XOR<UserCreateWithoutCareCirclesInput, UserUncheckedCreateWithoutCareCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareCirclesInput
    connect?: UserWhereUniqueInput
  }

  export type CareCircleCreateNestedOneWithoutMembersInput = {
    create?: XOR<CareCircleCreateWithoutMembersInput, CareCircleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CareCircleCreateOrConnectWithoutMembersInput
    connect?: CareCircleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCareCirclesNestedInput = {
    create?: XOR<UserCreateWithoutCareCirclesInput, UserUncheckedCreateWithoutCareCirclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCareCirclesInput
    upsert?: UserUpsertWithoutCareCirclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCareCirclesInput, UserUpdateWithoutCareCirclesInput>, UserUncheckedUpdateWithoutCareCirclesInput>
  }

  export type CareCircleUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CareCircleCreateWithoutMembersInput, CareCircleUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CareCircleCreateOrConnectWithoutMembersInput
    upsert?: CareCircleUpsertWithoutMembersInput
    connect?: CareCircleWhereUniqueInput
    update?: XOR<XOR<CareCircleUpdateToOneWithWhereWithoutMembersInput, CareCircleUpdateWithoutMembersInput>, CareCircleUncheckedUpdateWithoutMembersInput>
  }

  export type CareCircleCreateNestedOneWithoutShareTokensInput = {
    create?: XOR<CareCircleCreateWithoutShareTokensInput, CareCircleUncheckedCreateWithoutShareTokensInput>
    connectOrCreate?: CareCircleCreateOrConnectWithoutShareTokensInput
    connect?: CareCircleWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CareCircleUpdateOneRequiredWithoutShareTokensNestedInput = {
    create?: XOR<CareCircleCreateWithoutShareTokensInput, CareCircleUncheckedCreateWithoutShareTokensInput>
    connectOrCreate?: CareCircleCreateOrConnectWithoutShareTokensInput
    upsert?: CareCircleUpsertWithoutShareTokensInput
    connect?: CareCircleWhereUniqueInput
    update?: XOR<XOR<CareCircleUpdateToOneWithWhereWithoutShareTokensInput, CareCircleUpdateWithoutShareTokensInput>, CareCircleUncheckedUpdateWithoutShareTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MetricCreateWithoutUserInput = {
    id?: string
    key: string
    valueNum?: number | null
    valueText?: string | null
    unit?: string | null
    recordedAt?: Date | string
  }

  export type MetricUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    valueNum?: number | null
    valueText?: string | null
    unit?: string | null
    recordedAt?: Date | string
  }

  export type MetricCreateOrConnectWithoutUserInput = {
    where: MetricWhereUniqueInput
    create: XOR<MetricCreateWithoutUserInput, MetricUncheckedCreateWithoutUserInput>
  }

  export type MetricCreateManyUserInputEnvelope = {
    data: MetricCreateManyUserInput | MetricCreateManyUserInput[]
  }

  export type AssessmentResponseCreateWithoutUserInput = {
    id?: string
    type: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssessmentResponseUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AssessmentResponseCreateOrConnectWithoutUserInput = {
    where: AssessmentResponseWhereUniqueInput
    create: XOR<AssessmentResponseCreateWithoutUserInput, AssessmentResponseUncheckedCreateWithoutUserInput>
  }

  export type AssessmentResponseCreateManyUserInputEnvelope = {
    data: AssessmentResponseCreateManyUserInput | AssessmentResponseCreateManyUserInput[]
  }

  export type CareCircleMemberCreateWithoutUserInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    careCircle: CareCircleCreateNestedOneWithoutMembersInput
  }

  export type CareCircleMemberUncheckedCreateWithoutUserInput = {
    id?: string
    careCircleId: string
    role: string
    joinedAt?: Date | string
  }

  export type CareCircleMemberCreateOrConnectWithoutUserInput = {
    where: CareCircleMemberWhereUniqueInput
    create: XOR<CareCircleMemberCreateWithoutUserInput, CareCircleMemberUncheckedCreateWithoutUserInput>
  }

  export type CareCircleMemberCreateManyUserInputEnvelope = {
    data: CareCircleMemberCreateManyUserInput | CareCircleMemberCreateManyUserInput[]
  }

  export type MetricUpsertWithWhereUniqueWithoutUserInput = {
    where: MetricWhereUniqueInput
    update: XOR<MetricUpdateWithoutUserInput, MetricUncheckedUpdateWithoutUserInput>
    create: XOR<MetricCreateWithoutUserInput, MetricUncheckedCreateWithoutUserInput>
  }

  export type MetricUpdateWithWhereUniqueWithoutUserInput = {
    where: MetricWhereUniqueInput
    data: XOR<MetricUpdateWithoutUserInput, MetricUncheckedUpdateWithoutUserInput>
  }

  export type MetricUpdateManyWithWhereWithoutUserInput = {
    where: MetricScalarWhereInput
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyWithoutUserInput>
  }

  export type MetricScalarWhereInput = {
    AND?: MetricScalarWhereInput | MetricScalarWhereInput[]
    OR?: MetricScalarWhereInput[]
    NOT?: MetricScalarWhereInput | MetricScalarWhereInput[]
    id?: StringFilter<"Metric"> | string
    userId?: StringFilter<"Metric"> | string
    key?: StringFilter<"Metric"> | string
    valueNum?: FloatNullableFilter<"Metric"> | number | null
    valueText?: StringNullableFilter<"Metric"> | string | null
    unit?: StringNullableFilter<"Metric"> | string | null
    recordedAt?: DateTimeFilter<"Metric"> | Date | string
  }

  export type AssessmentResponseUpsertWithWhereUniqueWithoutUserInput = {
    where: AssessmentResponseWhereUniqueInput
    update: XOR<AssessmentResponseUpdateWithoutUserInput, AssessmentResponseUncheckedUpdateWithoutUserInput>
    create: XOR<AssessmentResponseCreateWithoutUserInput, AssessmentResponseUncheckedCreateWithoutUserInput>
  }

  export type AssessmentResponseUpdateWithWhereUniqueWithoutUserInput = {
    where: AssessmentResponseWhereUniqueInput
    data: XOR<AssessmentResponseUpdateWithoutUserInput, AssessmentResponseUncheckedUpdateWithoutUserInput>
  }

  export type AssessmentResponseUpdateManyWithWhereWithoutUserInput = {
    where: AssessmentResponseScalarWhereInput
    data: XOR<AssessmentResponseUpdateManyMutationInput, AssessmentResponseUncheckedUpdateManyWithoutUserInput>
  }

  export type AssessmentResponseScalarWhereInput = {
    AND?: AssessmentResponseScalarWhereInput | AssessmentResponseScalarWhereInput[]
    OR?: AssessmentResponseScalarWhereInput[]
    NOT?: AssessmentResponseScalarWhereInput | AssessmentResponseScalarWhereInput[]
    id?: StringFilter<"AssessmentResponse"> | string
    userId?: StringNullableFilter<"AssessmentResponse"> | string | null
    type?: StringFilter<"AssessmentResponse"> | string
    score?: IntNullableFilter<"AssessmentResponse"> | number | null
    answers?: JsonFilter<"AssessmentResponse">
    createdAt?: DateTimeFilter<"AssessmentResponse"> | Date | string
  }

  export type CareCircleMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: CareCircleMemberWhereUniqueInput
    update: XOR<CareCircleMemberUpdateWithoutUserInput, CareCircleMemberUncheckedUpdateWithoutUserInput>
    create: XOR<CareCircleMemberCreateWithoutUserInput, CareCircleMemberUncheckedCreateWithoutUserInput>
  }

  export type CareCircleMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: CareCircleMemberWhereUniqueInput
    data: XOR<CareCircleMemberUpdateWithoutUserInput, CareCircleMemberUncheckedUpdateWithoutUserInput>
  }

  export type CareCircleMemberUpdateManyWithWhereWithoutUserInput = {
    where: CareCircleMemberScalarWhereInput
    data: XOR<CareCircleMemberUpdateManyMutationInput, CareCircleMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type CareCircleMemberScalarWhereInput = {
    AND?: CareCircleMemberScalarWhereInput | CareCircleMemberScalarWhereInput[]
    OR?: CareCircleMemberScalarWhereInput[]
    NOT?: CareCircleMemberScalarWhereInput | CareCircleMemberScalarWhereInput[]
    id?: StringFilter<"CareCircleMember"> | string
    userId?: StringFilter<"CareCircleMember"> | string
    careCircleId?: StringFilter<"CareCircleMember"> | string
    role?: StringFilter<"CareCircleMember"> | string
    joinedAt?: DateTimeFilter<"CareCircleMember"> | Date | string
  }

  export type UserCreateWithoutMetricsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
    responses?: AssessmentResponseCreateNestedManyWithoutUserInput
    careCircles?: CareCircleMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMetricsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
    responses?: AssessmentResponseUncheckedCreateNestedManyWithoutUserInput
    careCircles?: CareCircleMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMetricsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMetricsInput, UserUncheckedCreateWithoutMetricsInput>
  }

  export type UserUpsertWithoutMetricsInput = {
    update: XOR<UserUpdateWithoutMetricsInput, UserUncheckedUpdateWithoutMetricsInput>
    create: XOR<UserCreateWithoutMetricsInput, UserUncheckedCreateWithoutMetricsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMetricsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMetricsInput, UserUncheckedUpdateWithoutMetricsInput>
  }

  export type UserUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: AssessmentResponseUpdateManyWithoutUserNestedInput
    careCircles?: CareCircleMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMetricsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: AssessmentResponseUncheckedUpdateManyWithoutUserNestedInput
    careCircles?: CareCircleMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutResponsesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
    metrics?: MetricCreateNestedManyWithoutUserInput
    careCircles?: CareCircleMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResponsesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
    metrics?: MetricUncheckedCreateNestedManyWithoutUserInput
    careCircles?: CareCircleMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
  }

  export type UserUpsertWithoutResponsesInput = {
    update: XOR<UserUpdateWithoutResponsesInput, UserUncheckedUpdateWithoutResponsesInput>
    create: XOR<UserCreateWithoutResponsesInput, UserUncheckedCreateWithoutResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsesInput, UserUncheckedUpdateWithoutResponsesInput>
  }

  export type UserUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: MetricUpdateManyWithoutUserNestedInput
    careCircles?: CareCircleMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: MetricUncheckedUpdateManyWithoutUserNestedInput
    careCircles?: CareCircleMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CareCircleMemberCreateWithoutCareCircleInput = {
    id?: string
    role: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutCareCirclesInput
  }

  export type CareCircleMemberUncheckedCreateWithoutCareCircleInput = {
    id?: string
    userId: string
    role: string
    joinedAt?: Date | string
  }

  export type CareCircleMemberCreateOrConnectWithoutCareCircleInput = {
    where: CareCircleMemberWhereUniqueInput
    create: XOR<CareCircleMemberCreateWithoutCareCircleInput, CareCircleMemberUncheckedCreateWithoutCareCircleInput>
  }

  export type CareCircleMemberCreateManyCareCircleInputEnvelope = {
    data: CareCircleMemberCreateManyCareCircleInput | CareCircleMemberCreateManyCareCircleInput[]
  }

  export type ShareTokenCreateWithoutCareCircleInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    scopes: JsonNullValueInput | InputJsonValue
  }

  export type ShareTokenUncheckedCreateWithoutCareCircleInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    scopes: JsonNullValueInput | InputJsonValue
  }

  export type ShareTokenCreateOrConnectWithoutCareCircleInput = {
    where: ShareTokenWhereUniqueInput
    create: XOR<ShareTokenCreateWithoutCareCircleInput, ShareTokenUncheckedCreateWithoutCareCircleInput>
  }

  export type ShareTokenCreateManyCareCircleInputEnvelope = {
    data: ShareTokenCreateManyCareCircleInput | ShareTokenCreateManyCareCircleInput[]
  }

  export type CareCircleMemberUpsertWithWhereUniqueWithoutCareCircleInput = {
    where: CareCircleMemberWhereUniqueInput
    update: XOR<CareCircleMemberUpdateWithoutCareCircleInput, CareCircleMemberUncheckedUpdateWithoutCareCircleInput>
    create: XOR<CareCircleMemberCreateWithoutCareCircleInput, CareCircleMemberUncheckedCreateWithoutCareCircleInput>
  }

  export type CareCircleMemberUpdateWithWhereUniqueWithoutCareCircleInput = {
    where: CareCircleMemberWhereUniqueInput
    data: XOR<CareCircleMemberUpdateWithoutCareCircleInput, CareCircleMemberUncheckedUpdateWithoutCareCircleInput>
  }

  export type CareCircleMemberUpdateManyWithWhereWithoutCareCircleInput = {
    where: CareCircleMemberScalarWhereInput
    data: XOR<CareCircleMemberUpdateManyMutationInput, CareCircleMemberUncheckedUpdateManyWithoutCareCircleInput>
  }

  export type ShareTokenUpsertWithWhereUniqueWithoutCareCircleInput = {
    where: ShareTokenWhereUniqueInput
    update: XOR<ShareTokenUpdateWithoutCareCircleInput, ShareTokenUncheckedUpdateWithoutCareCircleInput>
    create: XOR<ShareTokenCreateWithoutCareCircleInput, ShareTokenUncheckedCreateWithoutCareCircleInput>
  }

  export type ShareTokenUpdateWithWhereUniqueWithoutCareCircleInput = {
    where: ShareTokenWhereUniqueInput
    data: XOR<ShareTokenUpdateWithoutCareCircleInput, ShareTokenUncheckedUpdateWithoutCareCircleInput>
  }

  export type ShareTokenUpdateManyWithWhereWithoutCareCircleInput = {
    where: ShareTokenScalarWhereInput
    data: XOR<ShareTokenUpdateManyMutationInput, ShareTokenUncheckedUpdateManyWithoutCareCircleInput>
  }

  export type ShareTokenScalarWhereInput = {
    AND?: ShareTokenScalarWhereInput | ShareTokenScalarWhereInput[]
    OR?: ShareTokenScalarWhereInput[]
    NOT?: ShareTokenScalarWhereInput | ShareTokenScalarWhereInput[]
    id?: StringFilter<"ShareToken"> | string
    token?: StringFilter<"ShareToken"> | string
    careCircleId?: StringFilter<"ShareToken"> | string
    createdAt?: DateTimeFilter<"ShareToken"> | Date | string
    expiresAt?: DateTimeNullableFilter<"ShareToken"> | Date | string | null
    scopes?: JsonFilter<"ShareToken">
  }

  export type UserCreateWithoutCareCirclesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
    metrics?: MetricCreateNestedManyWithoutUserInput
    responses?: AssessmentResponseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCareCirclesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name?: string | null
    email?: string | null
    sessionToken?: string | null
    metrics?: MetricUncheckedCreateNestedManyWithoutUserInput
    responses?: AssessmentResponseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCareCirclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCareCirclesInput, UserUncheckedCreateWithoutCareCirclesInput>
  }

  export type CareCircleCreateWithoutMembersInput = {
    id?: string
    name: string
    shareTokens?: ShareTokenCreateNestedManyWithoutCareCircleInput
  }

  export type CareCircleUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    shareTokens?: ShareTokenUncheckedCreateNestedManyWithoutCareCircleInput
  }

  export type CareCircleCreateOrConnectWithoutMembersInput = {
    where: CareCircleWhereUniqueInput
    create: XOR<CareCircleCreateWithoutMembersInput, CareCircleUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutCareCirclesInput = {
    update: XOR<UserUpdateWithoutCareCirclesInput, UserUncheckedUpdateWithoutCareCirclesInput>
    create: XOR<UserCreateWithoutCareCirclesInput, UserUncheckedCreateWithoutCareCirclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCareCirclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCareCirclesInput, UserUncheckedUpdateWithoutCareCirclesInput>
  }

  export type UserUpdateWithoutCareCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: MetricUpdateManyWithoutUserNestedInput
    responses?: AssessmentResponseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCareCirclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    sessionToken?: NullableStringFieldUpdateOperationsInput | string | null
    metrics?: MetricUncheckedUpdateManyWithoutUserNestedInput
    responses?: AssessmentResponseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CareCircleUpsertWithoutMembersInput = {
    update: XOR<CareCircleUpdateWithoutMembersInput, CareCircleUncheckedUpdateWithoutMembersInput>
    create: XOR<CareCircleCreateWithoutMembersInput, CareCircleUncheckedCreateWithoutMembersInput>
    where?: CareCircleWhereInput
  }

  export type CareCircleUpdateToOneWithWhereWithoutMembersInput = {
    where?: CareCircleWhereInput
    data: XOR<CareCircleUpdateWithoutMembersInput, CareCircleUncheckedUpdateWithoutMembersInput>
  }

  export type CareCircleUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareTokens?: ShareTokenUpdateManyWithoutCareCircleNestedInput
  }

  export type CareCircleUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shareTokens?: ShareTokenUncheckedUpdateManyWithoutCareCircleNestedInput
  }

  export type CareCircleCreateWithoutShareTokensInput = {
    id?: string
    name: string
    members?: CareCircleMemberCreateNestedManyWithoutCareCircleInput
  }

  export type CareCircleUncheckedCreateWithoutShareTokensInput = {
    id?: string
    name: string
    members?: CareCircleMemberUncheckedCreateNestedManyWithoutCareCircleInput
  }

  export type CareCircleCreateOrConnectWithoutShareTokensInput = {
    where: CareCircleWhereUniqueInput
    create: XOR<CareCircleCreateWithoutShareTokensInput, CareCircleUncheckedCreateWithoutShareTokensInput>
  }

  export type CareCircleUpsertWithoutShareTokensInput = {
    update: XOR<CareCircleUpdateWithoutShareTokensInput, CareCircleUncheckedUpdateWithoutShareTokensInput>
    create: XOR<CareCircleCreateWithoutShareTokensInput, CareCircleUncheckedCreateWithoutShareTokensInput>
    where?: CareCircleWhereInput
  }

  export type CareCircleUpdateToOneWithWhereWithoutShareTokensInput = {
    where?: CareCircleWhereInput
    data: XOR<CareCircleUpdateWithoutShareTokensInput, CareCircleUncheckedUpdateWithoutShareTokensInput>
  }

  export type CareCircleUpdateWithoutShareTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: CareCircleMemberUpdateManyWithoutCareCircleNestedInput
  }

  export type CareCircleUncheckedUpdateWithoutShareTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    members?: CareCircleMemberUncheckedUpdateManyWithoutCareCircleNestedInput
  }

  export type MetricCreateManyUserInput = {
    id?: string
    key: string
    valueNum?: number | null
    valueText?: string | null
    unit?: string | null
    recordedAt?: Date | string
  }

  export type AssessmentResponseCreateManyUserInput = {
    id?: string
    type: string
    score?: number | null
    answers: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CareCircleMemberCreateManyUserInput = {
    id?: string
    careCircleId: string
    role: string
    joinedAt?: Date | string
  }

  export type MetricUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    valueNum?: NullableFloatFieldUpdateOperationsInput | number | null
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    valueNum?: NullableFloatFieldUpdateOperationsInput | number | null
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    valueNum?: NullableFloatFieldUpdateOperationsInput | number | null
    valueText?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResponseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResponseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentResponseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    answers?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareCircleMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    careCircle?: CareCircleUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CareCircleMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    careCircleId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareCircleMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    careCircleId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareCircleMemberCreateManyCareCircleInput = {
    id?: string
    userId: string
    role: string
    joinedAt?: Date | string
  }

  export type ShareTokenCreateManyCareCircleInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt?: Date | string | null
    scopes: JsonNullValueInput | InputJsonValue
  }

  export type CareCircleMemberUpdateWithoutCareCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCareCirclesNestedInput
  }

  export type CareCircleMemberUncheckedUpdateWithoutCareCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareCircleMemberUncheckedUpdateManyWithoutCareCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShareTokenUpdateWithoutCareCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: JsonNullValueInput | InputJsonValue
  }

  export type ShareTokenUncheckedUpdateWithoutCareCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: JsonNullValueInput | InputJsonValue
  }

  export type ShareTokenUncheckedUpdateManyWithoutCareCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scopes?: JsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}