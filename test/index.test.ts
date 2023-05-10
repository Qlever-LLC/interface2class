/**
 * @license
 * Copyright 2023 Qlever LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import test from 'ava';

// eslint-disable-next-line node/no-extraneous-import
import { makeClass } from '@qlever-llc/interface2class';

interface Foo {
  a?: number;
  readonly b: string;
}

class FooClass extends makeClass<Foo>() {}

class F extends FooClass {}

class FooClass2 extends makeClass<Foo, 'a'>() {
  constructor({ a = 4, ...rest }: Foo) {
    super({ a, ...rest });
  }
}

test('Create class from interface', (t) => {
  const foo: Foo = { a: 1, b: '2' };
  const fooClass = new FooClass(foo) satisfies Foo;

  t.deepEqual(Object.entries(fooClass), Object.entries(foo));
});

test('Extend class from interface', (t) => {
  const foo: Foo = { a: 1, b: '2' };
  const fooClass = new F(foo) satisfies Foo;

  t.deepEqual(Object.entries(fooClass), Object.entries(foo));
});

test('Access interface fields on class', (t) => {
  const foo: Foo = { a: 1, b: '2' };
  const fooClass = new FooClass(foo) satisfies Foo;

  const { a } = fooClass;
  t.is(a, 1);
});

test('Add defaults for optional fields', (t) => {
  const foo: Foo = { b: '2' };
  const fooClass = new FooClass2(foo) satisfies Foo;

  const { a } = fooClass;
  t.is(a, 4);
});
