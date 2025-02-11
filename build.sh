cd packages/element-plus

# 执行版本更新
npm version patch --no-git-tag-version || true

cd ..
cd ..

pnpm build


cd dist/element-plus


if [ "" = "--provenance" ]; then
  npm publish --provenance
else
  npm publish
fi


cd ..

cd ..