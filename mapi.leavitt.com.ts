// ----------------------
// <auto-generated>
//     generated using a custom program
// </auto-generated>
// ----------------------
import { Stationery } from './lg.core'

export interface Base64Dto {
    FileName: string | null;
    Value: string | null;
}

export interface StationeryOrderItemDto {
    BackFields: Array<Partial<PdfField>> | null;
    FrontFields: Array<Partial<PdfField>> | null;
    OrderedFor: string | null;
    PriceId: number;
    Stationery: Partial<Stationery> | null;
    StationeryId: number;
}

export interface PdfFieldData {
    Fields: Array<Partial<PdfField>> | null;
}

export interface PdfField {
    Name: string | null;
    Value: string | null;
}

export interface StationeryOrderDto {
    AgencyId: number;
    AgencyName: string | null;
    City: string | null;
    Items: Array<Partial<StationeryOrderItemDto>> | null;
    SpecialInstructions: string | null;
    State: string | null;
    Street1: string | null;
    Street2: string | null;
    TotalPrice: Partial<number>;
    TotalQuantity: number;
    Zip: string | null;
}

export interface NaicsReportTopAgenciesDto {
    Agency: string | null;
    AgencyId: number;
    NaicsCode: number;
    PolicyType: string | null;
    Premium: number;
    Rank: number;
}

export interface NaicsReportTopProducersDto {
    AgencyId: number;
    AgencyName: string | null;
    NaicsCode: number;
    PolicyType: string | null;
    Premium: number;
    Producer: string | null;
    ProducerId: number | null;
    Rank: number;
}

export interface NaicsReportTopCarriersDto {
    NaicsCode: number;
    ParentCompany: string | null;
    PolicyType: string | null;
    Premium: number;
    Rank: number;
}

export interface NaicsReportTopStatesDto {
    NaicsCode: number;
    PolicyType: string | null;
    Premium: number;
    Rank: number;
    State: string | null;
}

