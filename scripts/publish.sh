#!/bin/sh

# 设置脚本在遇到错误时立即退出
set -e

# 安装项目依赖，使用锁定的依赖版本以确保一致性
pnpm i --frozen-lockfile

# 更新项目的版本号
pnpm update:version

# 构建项目
pnpm build

# 进入 element-plus 的构建输出目录并发布包到 npm，并记录出处（provenance）
cd dist/element-plus
npm publish --provenance
cd -

# # 进入内部的 eslint-config 目录并发布该配置包到 npm
# cd internal/eslint-config
# npm publish
# cd -

# # 进入内部的 metadata 目录，构建并发布该包到 npm
# cd internal/metadata
# pnpm build
# npm publish
# cd -

# 输出发布完成的信息
echo "✅ Publish completed"