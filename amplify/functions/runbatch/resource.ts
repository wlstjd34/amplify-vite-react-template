import { defineFunction, secret } from '@aws-amplify/backend';

export const runbatch = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'runbatch',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts',
  
  environment: {
    APART_API_MEME_URI: "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev",
    APART_API_SE_URI: "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcSilvTrade",
    DASE_API_MEME_URI: "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHTrade",
    DASE_API_SE_URI: "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcRHRent",
    OPI_API_MEME_URI: "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiTrade",
    OPI_API_SE_URI: "http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcOffiRent",
    API_KEY: secret('jQBr1mkEpiibW1aDnBgjVoApTFm%2BUxbLIhIlrSoAxsWSymqbEUV5elZ5O86apdA27z4QU%2FI5oQ%2BWyUTw29PMIw%3D%3D')
  }
});