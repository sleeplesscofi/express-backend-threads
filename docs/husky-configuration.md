## Husky setup

> [!NOTE]
> Add husky, in version 8 it didn't give me any errors

```bash
pnpm add -D husky@8 lint-staged
```

> [!NOTE]
> Add the .lintstagedrc file with the following script
```bash
{ "*.ts": ["eslint --fix", "prettier --write"] }
```

> [!NOTE]
> Add the script to husky's package.json
```bash
"prepare": "husky install"
```

> [!NOTE]
> Add eslint to the repository for troubleshooting code errors

```bash
npx eslint --init
```

>[!NOTE]
> Add prettier by lint-staged extension

```bash
pnpm add prettier --save-dev
```

>[!NOTE]
> Add configuration to husky shell scripts for **pre-commit**

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```
