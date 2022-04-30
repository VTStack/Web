install:
	pnpm install --frozen-lockfile

test:
	pnpm exec nx run-many --target=test --all

build:
	pnpm exec nx run-many --target=build --all