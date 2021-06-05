docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate  -i https://corrently.io/dist.yaml -g go -o /local/out/go
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate  -i https://corrently.io/dist.yaml -g php -o /local/out/php
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate  -i https://corrently.io/dist.yaml -g typescript -o /local/out/typescript
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate  -i https://corrently.io/dist.yaml -g python -o /local/out/python
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate  -i https://corrently.io/dist.yaml -g java -o /local/out/java
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate  -i https://corrently.io/dist.yaml -g nodejs -o /local/out/nodejs
