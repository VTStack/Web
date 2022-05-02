install:
	npm install pnpm -g
	pnpm install --frozen-lockfile
	pnpm install nx -g

test:
	pnpm exec nx run-many --target=test --all

build:
	pnpm exec nx run-many --target=build --all