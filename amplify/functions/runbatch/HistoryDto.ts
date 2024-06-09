export interface HistoryKey {
    completion: number,
    year: number,
    month: number,
    date: number,
    code: number,
}

export interface HistoryData {
    price: number,
    volume: number,
}

export interface HistoryDto {
    completion: number,
    year: number,
    month: number,
    date: number,
    code: number,
    price: number,
    volume: number,
}