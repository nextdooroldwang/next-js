const domain = (env?: string) => {
  switch (env) {
    case "local":
      // return "https://dev-cha-api.o2o-marketing.com/app";
      return "https://mock.apifox.cn/m1/2092172-0-default/api";
    case "dev":
      return "https://dev.com/api";
    case "prod":
      return "https://mock.apifox.cn/m1/2092172-0-default/api";

    default:
      return "https://dev.com/api";
  }
};
export default domain(process.env.NEXT_PUBLIC_DOMAIN_ENV);
