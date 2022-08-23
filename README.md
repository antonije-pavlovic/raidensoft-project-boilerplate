# Raidensoft project boilerplate

# Code style

## ES lint setup
ES lint is a customizable linter to check your code for problems and bad practice, it can be used in VS Code by installing it from the VS Code Marketplace.
All team members must follow a common code style in project.
ESLint, isn't intended to perform code style fixes automatically though.

Usefull link:
1. [ES Lint rules](https://eslint.org/docs/latest/rules/)
2. [ESlint recommended rules](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts)
3. [Typescript esl lint recomended rules](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts)

# Pre commit
The pre-commit hook is run first, before you even type in a commit message. It's used to inspect the snapshot that's about to be committed, to see if you've forgotten something, to make sure tests run, or to examine whatever you need to inspect in the code.

Install using python

```
pip install pre-commit

pre-commit install --install-hooks

```