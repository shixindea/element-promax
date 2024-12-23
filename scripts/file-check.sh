#! /bin/bash#! /bin/bash

# 获取 element-plus 最新发布的 tarball 链接
CURRENT_PUBLISHED_TARBALL="$(npm view element-plus dist.tarball)"

# 输出 tarball 链接，方便调试或记录
echo $CURRENT_PUBLISHED_TARBALL

# 创建临时目录 tmp，如果目录已存在则不会报错
mkdir -p tmp

# 使用 curl 下载最新的 tarball 文件并保存为 ./tmp/latest.tgz
curl -o ./tmp/latest.tgz $CURRENT_PUBLISHED_TARBALL

# 解压下载的 tarball 文件到 ./tmp 目录中
tar zxvf ./tmp/latest.tgz -C ./tmp

# 比较解压后的 ./tmp/package 目录与本地构建的 ./dist/element-plus 目录
# 使用 diff 命令递归地比较两个目录
# 过滤出只有在一方存在的文件（即使用 grep "Only"）
# 截取路径部分（cut -c 8-）
# 将结果排序后保存到 ./tmp/diff.txt 文件中
diff -qr ./tmp/package ./dist/element-plus | grep "Only" | cut -c 8- | sort > ./tmp/diff.txt

CURRENT_PUBLISHED_TARBALL="$(npm view element-plus dist.tarball)"

echo $CURRENT_PUBLISHED_TARBALL

mkdir -p tmp

curl -o ./tmp/latest.tgz $CURRENT_PUBLISHED_TARBALL
tar zxvf ./tmp/latest.tgz -C ./tmp

diff -qr ./tmp/package ./dist/element-plus | grep "Only" | cut -c 8- | sort > ./tmp/diff.txt
