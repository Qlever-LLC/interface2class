/**
 * @license
 * Copyright 2023 Qlever LLC
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Class, SetRequired } from 'type-fest';

export interface I2Class<I, D extends keyof I = never>
  extends Class<SetRequired<I, D>, [SetRequired<I, D>]> {}

/**
 * Returns the _value_ of a class corresponding to a given interface.
 *
 * This return value can be given to `extends` to create a class
 *
 * @typeParam I - The interface to create a class from
 * @typeParam D - The keys of `I` that should be required to set
 * @see {@link I2Class}
 */
export const makeClass: <I, D = never>() => I2Class<I, D>;
