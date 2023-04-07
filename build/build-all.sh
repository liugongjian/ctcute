#!/bin/bash

## 一键打包所有 package

echo -e "\n----------- start build @cutedesign/ui -----------\n"
yarn workspace @cutedesign/ui run build

echo -e "\n----------- start build @cutedesign/chart -----------\n"
yarn workspace @cutedesign/chart run build

echo -e "\n----------- start build @cutedesign/appendix -----------\n"
yarn workspace @cutedesign/appendix run build

echo -e "\n----------- start build @cutedesign/sort-table -----------\n"
yarn workspace @cutedesign/sort-table run build

echo -e "\n----------- start build @cutedesign/authenticate -----------\n"
yarn workspace @cutedesign/authenticate run build

echo -e "\n----------- start build @cutedesign/vxe-table -----------\n"
yarn workspace @cutedesign/vxe-table run build
