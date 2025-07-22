import { REST_API } from "@/config";
import { HttpService } from "./http-service";
import {
  TSearchKeyframePayload,
  TSearchKeyframesByRangePayload,
  TSearchNearestIndexFromKeyframePayload,
  TSearchParams,
} from "@/types/apis/search";
import qs from "query-string";

export const getRecordByIndex = async (): Promise<any> => {
  return await HttpService.fetch<any, any>({
    apiConfig: REST_API.GET_BY_INDEX,
    queryParams: {
      index: 1,
    },
  });
};

type KeyframeWithConfidence = {
  key: number;
  value: string;
  confidence: number | number[]; // if list[float] is possible
  video_id: number;
  group_id: number;
};

export const searchKeyframes = async (
  payload: TSearchKeyframePayload[],
  queryParams?: TSearchParams
): Promise<KeyframeWithConfidence[]> => {
  const params = queryParams ? qs.stringify(queryParams) : "";
  const url = `${REST_API.SEARCH_KEYFRAMES.uri}${params ? `?${params}` : ""}`;
  // return HttpService.post<TSearchKeyframePayload[], any>(url, payload);
  // mock the response for now
  // return list of class KeyframeWithConfidence(BaseModel):
  //   key: int
  //   value: str
  //   confidence: Optional[float] | list[float]
  //   video_id: int
  //   group_id: int
  return Promise.resolve([
    {
      key: 0,
      value: "01/001/00000000",
      confidence: 0.95,
      video_id: 1,
      group_id: 1,
    },
    {
      key: 596,
      value: "01/001/00000596",
      confidence: 0.9,
      video_id: 1,
      group_id: 1,
    },
    {
      key: 399,
      value: "01/002/00000399",
      confidence: 0.8,
      video_id: 2,
      group_id: 1,
    },
  ]);
};

export const getNearestIndexFromKeyframe = async (
  payload: TSearchNearestIndexFromKeyframePayload
): Promise<any> => {
  const url = `${REST_API.SEARCH_NEAREST_INDEX_FROM_KEYFRAME.uri}`;
  return HttpService.post<TSearchNearestIndexFromKeyframePayload, any>(
    url,
    payload
  );
};

export const searchKeyframesByRange = async (
  payload: TSearchKeyframesByRangePayload[]
): Promise<any> => {
  const url = `${REST_API.SEARCH_KEYFRAMES_BY_RANGE.uri}`;
  return HttpService.post<TSearchKeyframesByRangePayload[], any>(url, payload);
};
