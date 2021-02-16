// ----------------------
// <auto-generated>
//     generated using a custom program
// </auto-generated>
// ----------------------
import { ChartsLeaderDto,LeaderDto } from './lg.core.repository'
import { BasicPolInfo } from './elasticsearch'

export interface CustomerSearchResultDto {
    AccountName: string | null;
    Address1: string | null;
    Address2: string | null;
    AgencyId: number;
    AgencyName: string | null;
    City: string | null;
    ContactName: string | null;
    CustomerRepId: number | null;
    CustomerRepName: string | null;
    CustomerRepPhone: string | null;
    Email: string | null;
    EsBasicPolInfos: Array<Partial<BasicPolInfo>> | null;
    Id: string | null;
    LastModifiedDate: string | null;
    Phone: string | null;
    Score: number;
    SortName: string | null;
    State: string | null;
    Zip: string | null;
}

export interface DuplicateSearchResultDto {
    AccountName: string | null;
    AccountStage: 'Lead'|'Suspect'|'Prospect'|'Client' | null;
    AccountType: number | null;
    Active: string | null;
    Address1: string | null;
    Address2: string | null;
    City: string | null;
    ContactFirstName: string | null;
    ContactLastName: string | null;
    CreatedOn: string | null;
    CustId: number;
    CustomerRepId: number | null;
    CustomerRepName: string | null;
    DatabaseName: string | null;
    EffectiveDate: string | null;
    Email: string | null;
    Id: string | null;
    LastActivityDate: string | null;
    LastModifiedDate: string | null;
    PersonId: number | null;
    Phone: string | null;
    Score: number;
    Source: 'Core'|'Ams360';
    State: string | null;
    StateCode: 'Active'|'Inactive';
    Status: 'Active'|'Inactive';
    Zip: string | null;
}

export interface VsSoldReportDTO {
    CompanyName: string | null;
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    SoldAmount: Partial<number> | null;
}

export interface SoldReportPremiumDTO {
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    PremiumAmount: Partial<number> | null;
}

export interface SponsoredSoldReportDTO {
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    SoldAmount: Partial<number> | null;
}

export interface AllPointsReportDTO {
    CrmTotalRevenue: Partial<number> | null;
    PersonId: number;
    PersonName: string | null;
    PrizeAmount: Partial<number>;
    Rank: number;
    TotalPoints: number;
    TotalVisitedPoints: number;
}

export interface ChartsLeaderBoardDto {
    Leaders: Array<Partial<ChartsLeaderDto>> | null;
    TotalProducerCount: number;
}

export interface GameResultDto {
    IsYourTeam: boolean;
    LeagueId: number;
    PrizeAmount: Partial<number>;
    Rank: number;
    TeamId: number;
    TeamName: string | null;
    TeamPictureAttachmentId: number | null;
    TotalPoints: Partial<number>;
}

export interface LeaderBoardDto {
    Leaders: Array<Partial<LeaderDto>> | null;
    TotalProducerCount: number;
}

