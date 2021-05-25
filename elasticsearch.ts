// ----------------------
// <auto-generated>
//     generated using a custom program
// </auto-generated>
// ----------------------

export interface AccountAddress {
    AddressType: AddressTypeString;
    City: string | null;
    Country: string | null;
    State: string | null;
    Street1: string | null;
    Street2: string | null;
    Zip: string | null;
}

export enum AccountType {
    None_Selected = 0,
    Client = 1,
    Informational = 2,
    Marketing_Group = 3,
    Other = 4,
    Prospect = 5
}

export type AccountTypeString = keyof typeof AccountType;

export enum AddressType {
    Main = 0,
    Billing = 1,
    Mailing = 2
}

export type AddressTypeString = keyof typeof AddressType;

export interface BenefitPointCustomers {
    Customer: Partial<BenefitPointCustomer> | null;
    Database: string | null;
    DeletedDate: string | null;
    LastVisitedBy: string | null;
    UpdatedDate: string | null;
}

export interface BenefitPointCustomer {
    AccountName: string | null;
    AccountType: AccountTypeString;
    Addresses: Array<Partial<AccountAddress>> | null;
    AdministratorUserId: number;
    BudgetedTotalAnnualPremium: Partial<number>;
    BudgetedTotalAnnualRevenue: Partial<number>;
    Contacts: Array<Partial<Contact>> | null;
    CoreCompanyId: number;
    CoreCompanyName: string | null;
    DatabaseName: string | null;
    Dba: string | null;
    DeletedDate: string | null;
    DepartmentId: number;
    Id: string | null;
    MarketSize: string | null;
    NaicsCode: string | null;
    OfficeName: string | null;
    PrimaryContactUserId: number;
    PrimarySalesLeadUserId: number;
    PrimaryServiceLeadUserId: number;
    Products: Array<Partial<Product>> | null;
}

export interface Contact {
    Email: string | null;
    FirstName: string | null;
    IsEmailValid: boolean;
    IsPrimary: boolean;
    LastName: string | null;
    Phones: Array<Partial<Phone>> | null;
    Title: string | null;
}

export interface Phone {
    AreaCode: string | null;
    Number: string | null;
    PhoneType: PhoneTypeString;
}

export enum PhoneType {
    None_Selected = 0,
    Assistant = 1,
    Customer_Service = 2,
    Fax = 3,
    Home = 4,
    Main = 5,
    Mobile = 6,
    Pager = 7,
    Work = 8,
    Other = 9
}

export type PhoneTypeString = keyof typeof PhoneType;

export interface Product {
    NumberOfEligibleEmployees: number;
    ProductStatus: ProductStatusString;
}

export enum ProductStatus {
    None_Selected = 0,
    Cancelled = 1,
    Current = 2,
    Expired = 3,
    Pending = 4
}

export type ProductStatusString = keyof typeof ProductStatus;

export interface Account {
    AccountId: string | null;
    AccountStage: number | null;
    AccountType: number;
    Address1: string | null;
    Address2: string | null;
    Ams360AccountId: string | null;
    AnnualPayroll: string | null;
    City: string | null;
    CompanySize: number | null;
    ContactFirstName: string | null;
    ContactJobTitle: string | null;
    ContactLastName: string | null;
    CreatedOn: string | null;
    CrmInstance: number;
    CustomerRepFirstName: string | null;
    CustomerRepId: number | null;
    CustomerRepLastName: string | null;
    DoNotCall: boolean;
    EffectiveDate: string | null;
    Email: string | null;
    FullName: string | null;
    Id: number;
    InitialAppointment: string | null;
    InitialConversation: string | null;
    LastActivityDate: string | null;
    LastModifiedDate: string | null;
    NAICSCode: string | null;
    Name: string | null;
    NumberOfEmployees: string | null;
    NumberOfLocations: string | null;
    OriginalSource: string | null;
    OwnerBusinessUnitId: string | null;
    OwnerId: string | null;
    PersonId: number | null;
    Phone: string | null;
    PotentialRevenue: Partial<number> | null;
    PreferredContactMethod: number;
    RecentSource: string | null;
    StageClientDate: string | null;
    StageProspectDate: string | null;
    StageSuspectDate: string | null;
    State: string | null;
    StateCode: number;
    Status: number;
    SurgeId: number | null;
    Topic: string | null;
    WrittenYtd: Partial<number> | null;
    Zip: string | null;
}

export interface CrmAccounts {
    Account: Partial<Account> | null;
    DeletedDate: string | null;
    LastVisitedBy: string | null;
    UpdatedDate: string | null;
}

export interface Ams360Customer {
    Active: string | null;
    Addr1: string | null;
    Addr2: string | null;
    BusFullPhone: string | null;
    BusSince: string | null;
    City: string | null;
    CoreCompanyId: number | null;
    CoreCompanyName: string | null;
    County: string | null;
    CsrName: string | null;
    CsrPersonId: number | null;
    CustId: string | null;
    DatabaseName: string | null;
    Dba: string | null;
    EMail: string | null;
    EMail2: string | null;
    FirmNameCust: string | null;
    FirstName: string | null;
    FullName: string | null;
    GLBrnchCodeName: string | null;
    GLDeptCodeName: string | null;
    GLDivCodeName: string | null;
    GLGrpCodeName: string | null;
    Id: string | null;
    IsEmailValid: boolean;
    LastName: string | null;
    MarineFullPhone: string | null;
    NAICS: string | null;
    Occupation: string | null;
    OtherFullPhone: string | null;
    PagerFullPhone: string | null;
    Policies: Array<Partial<BasicPolInfo>> | null;
    ProdName: string | null;
    ProdPersonId: number | null;
    ResFullPhone: string | null;
    SortName: string | null;
    State: string | null;
    TypeCust: string | null;
    ZipCode: string | null;
}

export interface Ams360Customers {
    Customer: Partial<Ams360Customer> | null;
    Database: string | null;
    DeletedDate: string | null;
    LastVisitedBy: string | null;
    UpdatedDate: string | null;
}

export interface BasicPolInfo {
    CoverageHomes: Array<Partial<CoverageHome>> | null;
    IsSuspended: string | null;
    PolEffDate: string | null;
    PolExpDate: string | null;
    PolId: string | null;
    PolNo: string | null;
    PolTypeLOB: string | null;
    RenewalList: string | null;
    SVehicles: Array<Partial<SVehicle>> | null;
    Vehicles: Array<Partial<Vehicle>> | null;
}

export interface CoverageHome {
    Addr1: string | null;
    Addr2: string | null;
    CHomId: string | null;
    City: string | null;
    EffDate: string | null;
    State: string | null;
    Status: string | null;
    Zip: string | null;
}

export interface SVehicle {
    EffDate: string | null;
    Status: string | null;
    UVehId: string | null;
    VehicleType: string | null;
}

export interface Vehicle {
    EffDate: string | null;
    LobId: string | null;
    Make: string | null;
    Model: string | null;
    Status: string | null;
    TotalPrem: string | null;
    VehicleNo: string | null;
    VehId: string | null;
    VehYear: string | null;
    Vin: string | null;
}

export interface Version {
    Build: number;
    Major: number;
    MajorRevision: number;
    Minor: number;
    MinorRevision: number;
    Revision: number;
}

