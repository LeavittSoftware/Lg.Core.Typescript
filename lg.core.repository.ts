// ----------------------
// <auto-generated>
//     generated using a custom program
// </auto-generated>
// ----------------------
import { NewSurgeSegment,NewSurgeCrmPoint,CLGameSegment,CLGamePoint } from './lg.core'

export interface PermissionHolderDto {
    FirstName: string | null;
    LastName: string | null;
    PermissionSource: Array<string> | null;
    PersonId: number;
}

export interface UserPermissionsDto {
    PermissionId: number;
    PermissionName: string | null;
    PersonToPermissionId: number | null;
}

export interface AMSCodeDto {
    Code: string | null;
    Name: string | null;
}

export interface Ams360EmployeeDto {
    EmpCode: string | null;
    FirstName: string | null;
    LastName: string | null;
}

export interface Ams360EmployeesDto {
    Executives: Array<Partial<Ams360EmployeeDto>> | null;
    Representatives: Array<Partial<Ams360EmployeeDto>> | null;
}

export interface BookedReportDto {
    AgencyName: string | null;
    BookedAmount: Partial<number> | null;
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
}

export interface CommissionReportDto {
    AgencyName: string | null;
    Amount: Partial<number> | null;
    FirstName: string | null;
    LastModifiedDate: string | null;
    LastName: string | null;
    PersonId: number;
}

export interface WrittenReportDto {
    AgencyName: string | null;
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    WrittenAmount: Partial<number> | null;
}

export interface ChartsLeaderDto {
    AgencyName: string | null;
    CompanyIds: Array<number> | null;
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    Rank: number;
    ThreeMonthSales: Partial<number> | null;
    WrittenAmount: Partial<number> | null;
}

export interface VitalSignsLeaderDto {
    AgencyName: string | null;
    CompanyId: number;
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    Rank: number;
    WrittenAmount: Partial<number> | null;
}

export interface SurgeAuditSummaryDto {
    Difference: Partial<number>;
    FirstName: string | null;
    IsEditedByAdmin: boolean;
    LastName: string | null;
    PersonId: number;
    TotalCRMPoints: Partial<number>;
    TotalPoints: Partial<number>;
}

export interface SurgeAuditBreakdownsBySegmentDto {
    Breakdowns: Array<Partial<SurgeAuditBreakdownDto>> | null;
    CrmTotal: Partial<number>;
    IsAfterSurge: boolean;
    IsBeforeSurge: boolean;
    Segment: Partial<NewSurgeSegment> | null;
    SegmentId: number | null;
    SurgeTotal: Partial<number>;
}

export interface SurgeAuditBreakdownCommissionDto {
    Amount: Partial<number>;
    Date: string | null;
    Id: number;
    LastModifiedDate: string | null;
    LineOfCoverage: string | null;
    Name: string | null;
}

export interface SurgeAuditBreakdownDto {
    AmountsMatch: boolean;
    CrmCommission: Partial<SurgeAuditBreakdownCommissionDto> | null;
    DatesMatch: boolean;
    IsCrmCommissionDeleted: boolean;
    IsPointCreatedByAdmin: boolean;
    SortDate: string | null;
    SurgeCrmPoint: Partial<NewSurgeCrmPoint> | null;
}

export interface PLGameBreakdownDto {
    Divisions: Array<Partial<PLGameDivisionBreakdownDto>> | null;
}

export interface PLGameDivisionBreakdownDto {
    DivisionId: number;
    DivisionName: string | null;
    DivisionSequence: number;
    Teams: Array<Partial<PLGameTeamBreakdownDto>> | null;
}

export interface PLGameTopPlayerDto {
    FirstName: string | null;
    GrandPrizeName: string | null;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    TotalPoints: Partial<number>;
}

export interface PLGamePlayerBreakdownDto {
    FirstName: string | null;
    GrandPrizeName: string | null;
    IsTeamCaptain: boolean;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    TeamStartDate: string;
    TotalPoints: Partial<number>;
}

export interface PLGameTeamBreakdownDto {
    GrandPrizeName: string | null;
    Players: Array<Partial<PLGamePlayerBreakdownDto>> | null;
    PrizeAmount: Partial<number> | null;
    TeamId: number;
    TeamImageCdnFileName: string | null;
    TeamImageExtension: string | null;
    TeamImageId: number | null;
    TeamImagePreviewExtension: string | null;
    TeamImagePreviewSizes: string | null;
    TeamName: string | null;
    TotalPoints: Partial<number>;
}

export interface SurgeReportsBreakdownDto {
    Divisions: Array<Partial<SurgeReportsDivisionBreakdownDto>> | null;
}

export interface SurgeReportsDivisionBreakdownDto {
    DivisionId: number;
    DivisionName: string | null;
    DivisionSequence: number;
    Teams: Array<Partial<SurgeReportsTeamBreakdownDto>> | null;
}

export interface SurgeReportsPlayerBreakdownDto {
    FirstName: string | null;
    GrandPrizeName: string | null;
    IsTeamCaptain: boolean;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    TeamStartDate: string;
    TotalSold: Partial<number>;
}

export interface SurgeReportsTeamBreakdownDto {
    CdnFileName: string | null;
    GrandPrizeName: string | null;
    ImageExtension: string | null;
    Players: Array<Partial<SurgeReportsPlayerBreakdownDto>> | null;
    PreviewExtension: string | null;
    PreviewSizes: string | null;
    PrizeAmount: Partial<number> | null;
    TeamId: number;
    TeamName: string | null;
    TeamTotalSold: Partial<number>;
}

export interface SurgeReportsTopPlayerDto {
    FirstName: string | null;
    GrandPrizeName: string | null;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    TotalSold: Partial<number>;
}

export interface ForumPermissionsDto {
    IsFolderAdmin: boolean;
    IsMember: boolean;
}

export interface LeaderDto {
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    Rank: number;
    WrittenAmount: Partial<number> | null;
}

export interface MemberContactDto {
    AreaCode: string | null;
    City: string | null;
    CompanyName: string | null;
    Email: string | null;
    FirstName: string | null;
    LastName: string | null;
    LineNumber: string | null;
    State: string | null;
    Street1: string | null;
    Zip: string | null;
}

export interface MyForumDto {
    ForumId: number;
    Name: string | null;
    NewPostCount: number;
}

export interface FileExplorerDto {
    CanUpload: boolean;
    Files: Array<Partial<FileExplorerFileDto>> | null;
    Folders: Array<Partial<FileExplorerFolderDto>> | null;
    ForumName: string | null;
    Path: Array<Partial<FileExplorerPathDto>> | null;
}

export interface FileExplorerPathDto {
    FolderId: number | null;
    ForumId: number | null;
    IsReadOnly: boolean;
    Name: string | null;
}

export interface FileExplorerFileDto {
    CdnFileName: string | null;
    CreatedDate: string;
    Description: string | null;
    DownloadCount: number;
    Extension: string | null;
    FileName: string | null;
    Id: number;
    Name: string | null;
    OwnerFirstName: string | null;
    OwnerId: number;
    OwnerLastName: string | null;
    PreviewExtension: string | null;
    PreviewSizes: string | null;
    Size: number;
}

export interface FileExplorerFolderDto {
    CanEdit: boolean;
    CreatedDate: string;
    CreatorPersonFirstName: string | null;
    CreatorPersonId: number;
    CreatorPersonLastName: string | null;
    Id: number;
    IsReadOnly: boolean;
    Name: string | null;
}

export interface CLGameAuditBreakdownCommissionDto {
    Amount: Partial<number>;
    Date: string | null;
    Id: number;
    LastModifiedDate: string | null;
    LineOfCoverage: string | null;
    Name: string | null;
}

export interface CLGameAuditBreakdownsBySegmentDto {
    Breakdowns: Array<Partial<CLGameAuditBreakdownDto>> | null;
    CrmTotal: Partial<number>;
    GameTotal: Partial<number>;
    IsAfterGame: boolean;
    IsBeforeGame: boolean;
    Segment: Partial<CLGameSegment> | null;
    SegmentId: number | null;
}

export interface CLGameAuditBreakdownDto {
    AmountsMatch: boolean;
    CLGamePoint: Partial<CLGamePoint> | null;
    CrmCommission: Partial<CLGameAuditBreakdownCommissionDto> | null;
    DatesMatch: boolean;
    IsCrmCommissionDeleted: boolean;
    IsPointCreatedByAdmin: boolean;
    SortDate: string | null;
}

export interface CLGameAuditSummaryDto {
    Difference: Partial<number>;
    FirstName: string | null;
    IsEditedByAdmin: boolean;
    LastName: string | null;
    PersonId: number;
    TotalCLPoints: Partial<number>;
    TotalCRMPoints: Partial<number>;
}

export interface CLGameBreakdownDto {
    Divisions: Array<Partial<CLGameDivisionBreakdownDto>> | null;
}

export interface CLGameDivisionBreakdownDto {
    DivisionId: number;
    DivisionName: string | null;
    DivisionSequence: number;
    Teams: Array<Partial<CLGameTeamBreakdownDto>> | null;
}

export interface CLGamePlayerBreakdownDto {
    FirstName: string | null;
    GrandPrizeName: string | null;
    IsTeamCaptain: boolean;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    TeamStartDate: string;
    TotalPoints: Partial<number>;
}

export interface CLGameTeamBreakdownDto {
    GrandPrizeName: string | null;
    Players: Array<Partial<CLGamePlayerBreakdownDto>> | null;
    PrizeAmount: Partial<number> | null;
    TeamId: number;
    TeamImageCdnFileName: string | null;
    TeamImageExtension: string | null;
    TeamImageId: number | null;
    TeamImagePreviewExtension: string | null;
    TeamImagePreviewSizes: string | null;
    TeamName: string | null;
    TotalPoints: Partial<number>;
}

export interface CLGameTopPlayerDto {
    AgencyId: number | null;
    AgencyName: string | null;
    FirstName: string | null;
    GrandPrizeName: string | null;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    TotalPoints: Partial<number>;
}

export interface CallManagerPhoneNumberDto {
    CompanyName: string | null;
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    Title: string | null;
}

export interface CallManagerEmployeeDto {
    CompanyName: string | null;
    FirstName: string | null;
    HomePhoneAreaCode: string | null;
    HomePhoneExtension: string | null;
    HomePhoneLineNumber: string | null;
    LastName: string | null;
    MobilePhoneAreaCode: string | null;
    MobilePhoneExtension: string | null;
    MobilePhoneLineNumber: string | null;
    PersonId: number;
    Title: string | null;
    WorkPhoneAreaCode: string | null;
    WorkPhoneExtension: string | null;
    WorkPhoneLineNumber: string | null;
}

