pnpm build


cd dist/element-plus


if [ "" = "--provenance" ]; then
  npm publish --provenance
else
  npm publish
fi