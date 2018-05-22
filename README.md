# NgpackagrIssue

This project was created to demonstrate an issue with `ng-packagr`, using path alias results into a failing package build.

Path alias in ```src/tsconfig.json```:
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@abbazabacto/ngpackagr-issue/*": ["./*"]
    }
  }
}
```

There are two modules **Core** and **Foo**, **Foo** dependends on **Core**'s config and service.

The path alias seems to work fine when running the dummy application in `src` using the modules directly:
```
yarn start
```

The path alias seems to work fine when building the application in `src` using the modules directly:
```
yarn build
```

The path alias breaks DI when building the package:
```
yarn ng-packagr
```

It throws an warning:
```
Warning: Can't resolve all parameters for FooService in ~/ngpackagr-issue/foo/foo.service.ts: (?, ?). This will become an error in Angular v6.x
Warning: Can't resolve all parameters for FooService in ~/ngpackagr-issue/foo/foo.service.ts: (?, ?). This will become an error in Angular v6.x
```

But in the real project the same issue resolves into a less detectable:
```
BUILD ERROR
Cannot read property 'isSkipSelf' of null
TypeError: Cannot read property 'isSkipSelf' of null
```
