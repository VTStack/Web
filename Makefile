install:
	pnpm install --frozen-lockfile
	pnpm install nx -g

test:
	nx run-many --target=test --all

build:
	nx run-many --target=build --all