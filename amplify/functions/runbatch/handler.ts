import { Handler } from 'aws-lambda';
import axios from "axios";
import { env } from '$amplify/env/runbatch';
import { IApartResponse } from './IApartResponse';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../data/resource'
import { HistoryDto, HistoryKey, HistoryData } from './historyDto';

const client = generateClient<Schema>();

export const handler: Handler = async (event, context) => {
    axios.get(`${env.APART_API_MEME_URI}`, { params: {
        ServiceKey: `${env.API_KEY}`,
        pageNo: 1,
        numOfRows: 9999,
        LAWD_CD: dongCode[0],
        DEAL_YMD: 202405
      }})
      .then(e => {
        const history: HistoryDto[] = collectData(e.data, dongCode[0]);
        insertData(history);
      });
};

function collectData(response: IApartResponse[], code: number) : HistoryDto[] {
  const historyMap = new Map();
  response.forEach(e => {
    const key: HistoryKey = {
      completion: e.건축년도,
      year: e.년,
      month: e.월,
      date: e.일,
      code: code};

    if (historyMap.has(key)) {
      const beforeData: HistoryData = historyMap.get(key);
      const totalPrice = beforeData.price * beforeData.volume + e.거래금액;
      const totalVolume = beforeData.volume + 1;
      historyMap.set(key, {price: totalPrice / totalVolume, volume: totalVolume});
    } else {
      historyMap.set(key, {price: e.거래금액 / e.전용면적, volume: 0});
    }
  })

  const historyDtoList: HistoryDto[] = [];
  historyMap.forEach((values, key, obj) => {
    historyDtoList.push({
      completion: key.completion,
      year: key.year,
      month: key.month,
      date: key.date,
      code: key.code,
      price: values.price,
      volume: values.volume,
    })
  })
  return historyDtoList;
}

function insertData(data: HistoryDto[]): void {
  data.forEach(e => {
    client.models.History.create({
      year: e.year,
      month: e.month,
      date: e.date,
      completion: e.completion,
      price: e.price,
      housingType: e.code,
      dongCode: e.code,
    })
  });
}