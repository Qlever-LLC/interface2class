# @qlever-llc/interface2class

[![Version](https://img.shields.io/npm/v/@qlever-llc/interface2class.svg)](https://npmjs.org/package/@qlever-llc/interface2class)
[![Coverage Status](https://coveralls.io/repos/Qlever-LLC/interface2class/badge.svg?branch=master)](https://coveralls.io/r/Qlever-LLC/interface2class?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/github/license/Qlever-LLC/interface2class)](LICENSE)

A TypeScript utility to create a class from an interface
without having to duplicate the interface's properties.

## Installation

```shell
yarn add @qlever-llc/interface2class
# type-fest is needed as a devDependency
yarn add -D type-fest
```

## Usage

### Basic

```typescript
import { makeClass } from '@qlever-llc/interface2class';

interface Foo {
  bar: string;
  baz: number;
}

class FooClass extends makeClass<Foo>() {
  // Add whatever else you want to the class
}

const foo = new FooClass({ bar: 'bar', baz: 1 });

console.log(foo.bar); // 'bar'
console.log(foo.baz); // 1
```

### Adding Defaults

```typescript
import { makeClass } from '@qlever-llc/interface2class';

interface Foo {
  bar: string;
  baz?: number;
}

class FooClass extends makeClass<Foo, 'baz'>() {
  constructor({ baz = 4, ...rest }: Foo) {
    super({ baz, ...rest }});

    // Do whatever else you want in the constructor
  }
}

// Property baz is now always defined on foo (and any instance of `FooClass`)
const foo = new FooClass({ bar: 'bar' });

console.log(foo.bar); // 'bar'
console.log(foo.baz); // 4
```
