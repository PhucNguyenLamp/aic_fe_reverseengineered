import { REST_API } from "@/config";
import { HttpService } from "./http-service";

export const getVideoByGroupVideoId = async (
  videoId: string,
  groupId: string
): Promise<any> => {
  // const url = REST_API.GET_VIDEO.uri
  //   .replace("{{group_id}}", groupId.toString())
  //   .replace("{{video_id}}", videoId.toString());
  const url = "/test/video/L0{{group_id}}_V00{{video_id}}.mp4"
    .replace("{{group_id}}", groupId.toString())
    .replace("{{video_id}}", videoId.toString());

  return await HttpService.fetch<any, Blob>({
    apiConfig: {
      uri: url,
      method: "GET",
    },
    configs: {
      responseType: "blob",
    },
  });
};
