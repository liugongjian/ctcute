# 生成 SASS 导出变量、变量 TS 类型文件、变量说明文档

使用 node 执行 scss-export.js，后面加上 SCSS 变量的文件路径(默认为 default 主题的 SCSS 变量路径)

```
node scss-export.js <your-cutedesign-folder>/packages/ui/style/themes/default/variables.scss
```

如果生成 default 主题的相关文件，可以无需传入参数

```
node scss-export.js
```

执行完成后会在传入的 SCSS 变量同级目录下生成 3 个文件：

1. index.scss (SASS 导出变量)
2. index.scss.d.ts (SASS 导出变量的 TS 类型文件)
3. variables-doc.js (变量说明文档)

# 主题生成

自动生成不同颜色的主题。只需要变更主题下的\_palette.scss 和 variables-source.scss，然后通过工具会基于 default 主题下的变量自动生成完整的变量文件。

首先，在 packages/ui/style/themes 目录下创建主题目录，例如深色+蓝色主题则创建目录 packages/ui/style/themes/dark/blue

然后，在新建的目录下创建\_palette.scss 和 variables-source.scss，variables-source.scss 只需要写出和 default 主题有差异的变量，例如：

```
$color-bg-1: #242528 !default;
$color-bg-2: #212224 !default;
$color-bg-3: #1a1c1d !default;

$shadow-1: 0 0 8px 0 rgba(0, 0, 0, 10%) !default;
$shadow-2: 0 0 15px 0 rgba(0, 0, 0, 20%) !default;
$shadow-3: 0 0 40px 0 rgba(0, 0, 0, 30%) !default;
$shadow-form-item: 0 2px 2px 0 rgba(0, 0, 0, 20%) !default;

$cute-layout-header-bg: $neutral-1 !default;
$cute-layout-header-border: $neutral-5 !default;
$header-input-bg: $neutral-2 !default;
$header-search-text-color: $neutral-7 !default;
```

然后，使用 node 执行 scss-theme.js，后面加上 variables-source.scss 文件路径。

```
node scss-theme.js <your-cutedesign-folder>/packages/ui/style/themes/dark/blue/variables-source.scss
```

执行完成后会在传入的 SCSS 变量同级目录下生成 4 个文件，变量的配套文件已自动生成，无需额外再执行 scss-export：

1. variables.scss (主题的完整 SASS 变量)
2. index.scss (SASS 导出变量)
3. index.scss.d.ts (SASS 导出变量的 TS 类型文件)
4. variables-doc.js (变量说明文档)
