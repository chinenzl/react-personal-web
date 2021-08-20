 // @符号
 const path = require("path");
 const {
     override,
     addWebpackAlias
 } = require("customize-cra");
 //按需加载组件
 module.exports = override(
     addWebpackAlias({
         ["@"]: path.resolve(__dirname, "src"),
         ["@@"]: path.resolve(__dirname, "src", "components"),
     }),
 );