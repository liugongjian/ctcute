#!/bin/bash

## 一键打包所有 package

echo -e "\n----------- start build @cutedesign/ui -----------\n"
yarn workspace @cutedesign/ui run build

echo -e "\n----------- start build @cutedesign/authenticate -----------\n"
yarn workspace @cutedesign/authenticate run build

