# NgpackagrIssue

This project was created to demonstrate an issue with `ng-packagr` for re-exporting secondary endpoints in the primary endpoint like `@angular/material` does:

If you run the following commands

```sh
yarn install
yarn ng-packagr
yarn build --prod
```

You will see an error:

```sh
ERROR in : Unexpected value 'CoreModule in ~/ngpackagr-issue/dist/abbazabacto-ngpackagr-issue.d.ts' imported by the module 'AppModule in ~/ngpackagr-issue/demo/app/app.module.ts'. Please add a @NgModule annotation.
```

The metadata looks incomplete, as there is no reference to the `CoreModule` of `@abbazabacto/ngpackagr-issue/core`:
```json
{
  "__symbolic": "module",
  "version": 4,
  "exports": [
    {
      "from": "@abbazabacto/ngpackagr-issue/foo"
    }
  ],
  "metadata": {},
  "origins": {},
  "importAs": "@abbazabacto/ngpackagr-issue"
}
```

If I remove the `CoreModule` import in the demo application, the error disappears. So it seemed the `@abbazabacto/ngpackagr-issue/foo` reference is working.

If I add the missing reference of `@abbazabacto/ngpackagr-issue/core` to the metadata file manually, the build also succeeds.

```json
{
  "__symbolic": "module",
  "version": 4,
  "exports": [
    {
      "from": "@abbazabacto/ngpackagr-issue/core"
    },
    {
      "from": "@abbazabacto/ngpackagr-issue/foo"
    }
  ],
  "metadata": {},
  "origins": {},
  "importAs": "@abbazabacto/ngpackagr-issue"
}
```

It has nothing to do with `FooModule` depending on `CoreModule`, when all references between each other are removed the generated metadata is still incomplete.
