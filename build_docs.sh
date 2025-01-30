pnpm docs:build

rm -rf ../element-promax-docs/*

scp -r docs/.vitepress/dist/* ../element-promax-docs/docs/


