// ----------------------
// <auto-generated>
//     generated using a custom program
// </auto-generated>
// ----------------------

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
    TeamImageId: number | null;
    TeamName: string | null;
    TotalPoints: Partial<number>;
}

