pnpm docs:build

rm -rf ../element-promax-docs/docs/*

scp -r docs/.vitepress/dist/* ../element-promax-docs/docs/


