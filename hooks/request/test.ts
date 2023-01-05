import { ResponseModel } from "@/models/shared";
import fetcher from "@/utils/request";
import { useRequest } from "ahooks";

export const useReuestToGetProfile = (): ResponseModel<string> => {
  const { loading, data, refresh } = useRequest(
    () =>
      fetcher({
        uri: `/get-test`,
        method: "GET",
      }).then((response) => response.json()),
    {
      debounceWait: 500,
      cacheKey: "get-test",
      retryCount: 2,
    }
  );

  return {
    loading,
    refresh,
    data: data === undefined ? undefined : data.data,
  };
};
