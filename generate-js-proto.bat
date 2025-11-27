@echo off
REM Generate JavaScript static module
npx -p protobufjs-cli pbjs -t static-module -w es6 -o ./src/generated/MockFxPricingService.js ./server/app/src/main/proto/MockFxPricingService.proto

REM Generate TypeScript definitions
npx -p protobufjs-cli pbts -o ./src/generated/MockFxPricingService.d.ts ./src/generated/MockFxPricingService.js
