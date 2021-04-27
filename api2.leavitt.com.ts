// ----------------------
// <auto-generated>
//     generated using a custom program
// </auto-generated>
// ----------------------
import { BenefitPointCustomer,Ams360Customer } from './elasticsearch'
import { Ams360PersonRole,Ams360SupplementalCode,Ams360EmpCode,Person,CrmAccount,FailReason,ProducerCommissionRate,ConferenceAttendeePersonRole,Conference,ConferenceSponsorship,PeopleGroup } from './lg.core'

export interface Ams360ConflictDto {
    Conflicts: Array<Partial<Ams360CustomerConflict>> | null;
    Count: number;
}

export interface Ams360CustomerConflict {
    Email: string | null;
    NumberOfConflicts: number | null;
}

export interface BenefitPointConflictDto {
    Conflicts: Array<Partial<BenefitPointCustomerConflict>> | null;
    Count: number;
}

export interface BenefitPointCustomerConflict {
    Email: string | null;
    NumberOfConflicts: number | null;
}

export interface AutomatedAppDto {
    ErrorCount: number;
    Id: number;
    LastHeardFromDateTime: string | null;
    LastHeardFromIp: string | null;
    LastRunDateTime: string | null;
    Name: string | null;
}

export interface Ams360UpsertDto {
    Ams360PersonRole: Partial<Ams360PersonRole> | null;
    Ams360SupplementalCode: Partial<Ams360SupplementalCode> | null;
    Id: number;
}

export interface Ams360EmpCodesDto {
    Agency: Partial<EmpCodeInstanceDto> | null;
    Ams360DatabaseId: number;
    Ams360SupplementalCode: Partial<Ams360SupplementalCode> | null;
    AssignedRole: Partial<Ams360PersonRole> | null;
    Database: string | null;
    EmpCode: Partial<Ams360EmpCode> | null;
    IsMapped: boolean;
    Status: string | null;
}

export interface EmpCodeInstanceDto {
    CompanyName: string | null;
    InstanceId: number | null;
}

export interface TemplateDataItemDto {
    Key: string | null;
    Value: string | null;
}

export interface FirebasePostNotification {
    LastPostDate: string;
    PersonId: number;
    PostId: number;
}

export interface MergerLocationsDto {
    CurrLocationId: number;
    DestLocationId: number;
}

export interface RecaptchaResponseDto {
    ErrorCodes: string | null;
    Success: boolean;
}

export interface TeamWithTotalPoints {
    TeamId: number;
    TotalPoints: Partial<number>;
}

export interface SupplimentalProducerCodeEntry {
    Ams360FullName: string | null;
    CompanyName: string | null;
    EmpCode: string | null;
    EndDate: string | null;
    Id: number;
    IsExpired: boolean | null;
    isMapped: boolean | null;
    ManagementSystemDatabaseName: string | null;
    ManagementSystemId: number;
    PersonFullName: string | null;
    PersonId: number | null;
    ProducerCodeTypeId: number | null;
    ProducerCodeTypeName: string | null;
    StartDate: string;
}

export interface Ams360ManagementSystemSearchResult {
    CompanyName: string | null;
    databaseNumber: string | null;
    Id: number;
    shortDatabaseNumber: string | null;
}

export interface LeagueReportEntry {
    LeagueId: number;
    LeagueName: string | null;
    LeagueSequence: number;
    Teams: Array<Partial<LeagueReportTeamEntry>> | null;
}

export interface LeagueReportMemberEntry {
    FullName: string | null;
    IsTeamCaptain: boolean;
    PersonId: number;
    TerminationDate: string | null;
    TotalPoints: Partial<number>;
}

export interface LeagueReportTeamEntry {
    Members: Array<Partial<LeagueReportMemberEntry>> | null;
    PictureAttachmentId: number | null;
    TeamId: number;
    TeamName: string | null;
}

export interface PersonSearchActiveDirectoryResult {
    AccountActive: boolean;
    AccountLocked: boolean;
    DatabaseName: string | null;
    DistinguishedName: string | null;
    ExchangeServer: string | null;
    HomeDirectory: string | null;
    HomeDrive: string | null;
    Id: number;
    ImEnabled: boolean;
    IsOffice360User: boolean;
    LastLogin: string | null;
    LdapEmailAdddresses: Array<string> | null;
    LdapUserGroups: Array<string> | null;
    ProfilePath: string | null;
    StorageGroups: string | null;
    UserDefaults: boolean;
}

export interface PersonSearchGroupResult {
    Description: string | null;
    Email: string | null;
    Id: number;
    Name: string | null;
}

export interface PersonSearchPersonResult {
    CompanyName: string | null;
    FirstName: string | null;
    Id: number;
    IsOldEmployee: boolean;
    LastName: string | null;
    PersonId: number;
    Rank: number;
}

export interface LGEmployeeSearchResult {
    CompanyName: string | null;
    DateFirstProducer: string | null;
    DateLicensed: string | null;
    FirstName: string | null;
    Id: number;
    JobRoles: Array<Partial<JobRoleSearchResult>> | null;
    LastName: string | null;
    PersonId: number;
}

export interface JobRoleSearchResult {
    CompanyId: number;
    CompanyName: string | null;
    Id: number;
    IsFullTimeEquivalenceType: boolean;
    JobRoleAssignmentPercentage: number;
    JobRoleTotalAssignmentPercentage: number;
    JobRoleTypeName: string | null;
}

export interface LgImageDTO {
    ContentType: string | null;
    Id: number;
    ImageBytes: Array<string> | null;
}

export interface TheGameRegistrationDto {
    GameId: number;
    PersonId: number;
    RegistrationNote: string | null;
}

export interface TopSellersReportEntry {
    FullName: string | null;
    PersonId: number;
    TotalPoints: Partial<number>;
}

export interface GuestUserDto {
    AccessUntilDate: string | null;
    FirstName: string | null;
    LastName: string | null;
    NeedForAccessDescription: string | null;
    Password: string | null;
    RequestedByPersonId: number;
    Username: string | null;
}

export interface TransferDTO {
    CompanyAddressId: number;
    DepartmentId: number | null;
    IsLicensedAgent: boolean;
    IsTest: boolean;
    NewCommercialLines: number;
    NewCommercialLinesHealth: number;
    NewCommercialLinesLife: number;
    NewPersonalLines: number;
    NewPersonalLinesHealth: number;
    NewPersonalLinesLife: number;
    Position: string | null;
    RenewCommercialLines: number;
    RenewCommercialLinesHealth: number;
    RenewCommercialLinesLife: number;
    RenewPersonalLines: number;
    RenewPersonalLinesHealth: number;
    RenewPersonalLinesLife: number;
    TransferDate: string | null;
}

export interface RehireDTO {
    AmsAuthority: string | null;
    Comments: string | null;
    CompanyAddressId: number;
    CRMCredentials: string | null;
    DepartmentId: number | null;
    EmailLists: string | null;
    EmployeeBenefits: boolean;
    EmploymentType: 'PaidEmployee'|'UnpaidEmployee'|'Contractor';
    HireDate: string | null;
    HoursPerWeek: number | null;
    IsAgencyPartner: boolean;
    IsLicensedAgent: boolean;
    IsOfficeManager: boolean;
    IsTemporaryEmployee: boolean;
    IsTest: boolean;
    LicenseDate: string | null;
    ModelAfter: string | null;
    NewCommercialLines: number;
    NewCommercialLinesHealth: number;
    NewCommercialLinesLife: number;
    NewPersonalLines: number;
    NewPersonalLinesHealth: number;
    NewPersonalLinesLife: number;
    OtherInsuranceType: boolean;
    Position: string | null;
    PropertyCasualty: boolean;
    RenewCommercialLines: number;
    RenewCommercialLinesHealth: number;
    RenewCommercialLinesLife: number;
    RenewPersonalLines: number;
    RenewPersonalLinesHealth: number;
    RenewPersonalLinesLife: number;
}

export interface TerminateDto {
    AgencyName: string | null;
    Comments: string | null;
    DaysToForwardEmail: number | null;
    EligibleForReHire: boolean;
    EmployeeName: string | null;
    ForwordIncomingMailTo: string | null;
    IsTest: boolean;
    LastDayWorked: string | null;
    MailingAddress: string | null;
    MobilePhoneForCompanyEmails: boolean;
    NeedsDomoLicenseRemoved: boolean;
    Phone: string | null;
    Reason: string | null;
    RemoveWebAccess: boolean;
    SubmittedBy: string | null;
    SubmittedByEmail: string | null;
    TerminationDate: string | null;
}

export interface NewUserResult {
    Id: number;
}

export interface NewHireDTO {
    AmsAuthority: string | null;
    Comments: string | null;
    CompanyAddressId: number;
    CRMCredentials: string | null;
    DateOfBirth: string | null;
    DepartmentId: number | null;
    EmailLists: string | null;
    EmployeeBenefits: boolean;
    EmploymentType: 'PaidEmployee'|'UnpaidEmployee'|'Contractor';
    FirstName: string | null;
    Gender: string | null;
    HireDate: string | null;
    HoursPerWeek: number | null;
    IsAgencyPartner: boolean;
    IsLicensedAgent: boolean;
    IsOfficeManager: boolean;
    IsTemporaryEmployee: boolean;
    IsTest: boolean;
    LastName: string | null;
    LicenseDate: string | null;
    MiddleName: string | null;
    ModelAfter: string | null;
    NewCommercialLines: number;
    NewCommercialLinesHealth: number;
    NewCommercialLinesLife: number;
    NewPersonalLines: number;
    NewPersonalLinesHealth: number;
    NewPersonalLinesLife: number;
    OtherInsuranceType: boolean;
    Position: string | null;
    PreferredFirstName: string | null;
    PropertyCasualty: boolean;
    RenewCommercialLines: number;
    RenewCommercialLinesHealth: number;
    RenewCommercialLinesLife: number;
    RenewPersonalLines: number;
    RenewPersonalLinesHealth: number;
    RenewPersonalLinesLife: number;
}

export interface RehireEmployeeResult extends IIdentity {
}

export interface CompanySearchResult {
    Contacts: Array<Partial<CompanySearchResultContact>> | null;
    Departments: Array<Partial<CompanySearchResultDepartment>> | null;
    Employees: Array<Partial<CompanySearchResultEmployee>> | null;
    Id: number;
    Name: string | null;
    Numbers: Array<Partial<CompanySearchResultNumber>> | null;
}

export interface PersonSearchResult {
    Extensions: Array<Partial<PersonSearchResultExtension>> | null;
    Id: number;
    Numbers: Array<Partial<PersonSearchResultNumber>> | null;
    ProfilePictureAttachmentId: number | null;
    SubTitle: string | null;
    Title: string | null;
}

export interface PersonSearchResultNumber extends AcmSearchDetail {
}

export interface PersonSearchResultExtension extends AcmSearchDetail {
}

export interface CompanySearchResultDepartment extends AcmSearchDetail {
}

export interface CompanySearchResultContact extends AcmSearchDetail {
}

export interface CompanySearchResultEmployee extends AcmSearchDetail {
}

export interface CompanySearchResultNumber extends AcmSearchDetail {
}

export interface AcmSearchDetail {
    AreaCode: string | null;
    CountryCode: string | null;
    Id: number;
    LineNumber: string | null;
    SubTitle: string | null;
    Title: string | null;
}

export interface SendTemplateDto {
    AdditionalRecipients: Array<string> | null;
    FromAddress: string | null;
    IsTest: boolean | null;
    TemplateData: Array<Partial<TemplateDataItemDto>> | null;
}

export interface TopSellersByLeagueReportEntry {
    LeagueId: number;
    LeagueName: string | null;
    Sequence: number;
    TopSellers: Array<Partial<TopSellersReportEntry>> | null;
}

export interface PlayerReportDTO {
    MyPrizeAmount: Partial<number>;
    MyTotalPoints: number;
    TeamRank: number;
    TeamTotalPoints: number;
}

export interface PlayerScoreboardReportDto {
    PersonId: number;
    PlayerName: string | null;
    Rank: number;
    TotalPoints: number;
}

export interface TeamScoreboardReportDto {
    Name: string | null;
    Players: Array<Partial<PlayerScoreboardReportDto>> | null;
    PrizeAmount: Partial<number>;
    Rank: number;
    TeamId: number;
    TeamTotalPoints: number;
}

export interface VitalPersonIdAndCompanyIdDto {
    CompanyId: number;
    PersonId: number;
}

export interface AuditorDto {
    CompanyId: number;
    Email: string | null;
    ExpirationDate: string;
    FirstName: string | null;
    LastName: string | null;
}

export interface InvestorDto {
    Email: string | null;
    ExpirationDate: string | null;
    FirstName: string | null;
    Id: number;
    LastName: string | null;
}

export interface GuestDto {
    Description: string | null;
    Email: string | null;
    ExpirationDate: string | null;
    FirstName: string | null;
    Id: number;
    LastName: string | null;
    RequestedByPersonId: number;
}

export interface LdapAdObject {
    AccountName: string | null;
    AccountStatus: 'Locked'|'Disabled'|'PasswordExpired'|'Active'|'NeverLoggedIn';
    CommonName: string | null;
    DisplayName: string | null;
    DistinguishedName: string | null;
    FirstName: string | null;
    Guid: string;
    LastName: string | null;
    MatchingPerson: Partial<Person> | null;
    Path: string | null;
    SchemaClassName: string | null;
    Sid: string | null;
}

export interface EmailAddressesDto {
    Addresses: Array<string> | null;
}

export interface CrmAccountExtendedDto extends CrmAccount {
    Latitude: number;
    Longitude: number;
}

export interface Ams360CustomerDto {
    AccountExecCode: string | null;
    AccountRepCode: string | null;
    AddressLine1: string | null;
    AddressLine2: string | null;
    Ams360Guid: string;
    Ams360InstanceId: number;
    BusinessAreaCode: string | null;
    BusinessPhone: string | null;
    City: string | null;
    CrmAccount: string;
    CustomerType: string | null;
    Email: string | null;
    FaxAreaCode: string | null;
    FaxPhone: string | null;
    FirmName: string | null;
    GLBranchCode: string | null;
    GLDepartmentCode: string | null;
    GLDivisionCode: string | null;
    GLGroupCode: string | null;
    State: string | null;
    WebAddress: string | null;
    ZipCode: string | null;
}

export interface PLGamePlayerDto {
    CompanyName: string | null;
    FirstName: string | null;
    IsCaptain: boolean;
    LastName: string | null;
    PersonId: number;
    PlayerId: number;
    PlayerPersonRoleId: number | null;
    TeamId: number | null;
    TeamName: string | null;
    TeamPersonRoleId: number | null;
    TotalPoints: Partial<number>;
}

export interface AccountsJobRoleDto {
    BenefitsAssignmentPercentage: number | null;
    CommercialAssignmentPercentage: number | null;
    CompanyId: number;
    CompanyName: string | null;
    Id: number;
    JobRoleTypeId: number;
    JobRoleTypeName: string | null;
    LifeAssignmentPercentage: number | null;
    PersonalAssignmentPercentage: number | null;
}

export interface CrmCarrierDto {
    CarrierId: number;
    CarrierName: string | null;
}

export interface UserSurgesDto {
    IsActive: boolean;
    Name: string | null;
    SurgeId: number;
    SurgeStartDate: string;
}

export interface PhonesCrashReportDto {
    Date: string;
    Id: string | null;
    Message: string | null;
    StackTrace: string | null;
    Username: string | null;
    Version: string | null;
}

export interface AgencyProfitabilityReportDto {
    AgencyProfitabilityPercentage: number;
    AgencyProfitabilityValue: number;
    Year: number;
}

export interface CriteriaStatus {
    FailReasons: Array<Partial<FailReason>> | null;
    ReturnReason: string | null;
    ReturnStatus: 'Continue'|'SwitchingProtocols'|'OK'|'Created'|'Accepted'|'NonAuthoritativeInformation'|'NoContent'|'ResetContent'|'PartialContent'|'MultipleChoices'|'Ambiguous'|'MovedPermanently'|'Moved'|'Found'|'Redirect'|'SeeOther'|'RedirectMethod'|'NotModified'|'UseProxy'|'Unused'|'TemporaryRedirect'|'RedirectKeepVerb'|'BadRequest'|'Unauthorized'|'PaymentRequired'|'Forbidden'|'NotFound'|'MethodNotAllowed'|'NotAcceptable'|'ProxyAuthenticationRequired'|'RequestTimeout'|'Conflict'|'Gone'|'LengthRequired'|'PreconditionFailed'|'RequestEntityTooLarge'|'RequestUriTooLong'|'UnsupportedMediaType'|'RequestedRangeNotSatisfiable'|'ExpectationFailed'|'UpgradeRequired'|'InternalServerError'|'NotImplemented'|'BadGateway'|'ServiceUnavailable'|'GatewayTimeout'|'HttpVersionNotSupported';
}

export interface MinimumSalesExpectationReportDto {
    AnnualizedBooked: number;
    Date: string;
    QFAs: number;
    Written: number;
}

export interface NuppReportDto {
    DrawsAfterMonth43: Array<string> | null;
    ExpectationStartDate: string;
    SalesExpectationId: number;
    SubsidyAfterMonth49: Array<string> | null;
    Year4StandardCommissionsX2: number;
    YearNuppTotals: Array<number> | null;
}

export interface ProducerInvestmentReportDto {
    BookOfBusiness: number;
    CumulativeProfit: number;
    CumulativeProfitMargin: number;
    EstAnnualProfit: number;
    LessAcquisitionCost: number;
}

export interface ProducerOpportunityReportDto {
    NewWrittenCommissionsGoal: number;
    NewWrittenCommissionsMinimum: number;
    QFAsMonthlyMinimum: number;
}

export interface ProducerOpportunityReportValueDto {
    DeferredCompensation: number;
    Draw: number;
    NewCommission: number;
    RenewalCommission: number;
    RenewalCommissionAssignedBook: number;
    Subsidy: number;
    TotalIncome: number;
    TotalProducerOpportnityValue: number;
}

export interface CommissionRateDto {
    ProducerCommissionRate: Partial<ProducerCommissionRate> | null;
    ReplacementId: number | null;
}

export interface AgencyInvestmentReportDto {
    LessAcquisitionCost: number;
    LessDeferredCompLiability: number;
    NetAsset: number;
    OrganicAssetValue: number;
    Type: 'Minimum'|'Goal';
}

export interface MarketingBenefitPointCustomerDto extends BenefitPointCustomer {
    IsMaster: boolean;
}

export interface MarketingAms360CustomerDto extends Ams360Customer {
    IsMaster: boolean;
}

export interface MarketingManagerEloquaBenefitPointContactDto {
    AccountName: string | null;
    Administrator: string | null;
    BenefitManagementSystem: string | null;
    Company: string | null;
    CompanyId: string | null;
    CustomerId: string | null;
    CustomerType: string | null;
    Department: string | null;
    DoingBusinessAs: string | null;
    EstimatedAnnualizedPremiumRevenue: string | null;
    FirstName: string | null;
    Id: number | null;
    LastName: string | null;
    MarketSize: string | null;
    MobilePhone: string | null;
    Naics: string | null;
    NumberOfEmployees: string | null;
    Office: string | null;
    PremiumYTD: Partial<number>;
    PrimaryContact: string | null;
    PrimarySalesLead: string | null;
    PrimaryServiceLead: string | null;
    RevenueYTD: Partial<number>;
    Status: string | null;
}

export interface MarketingManagerEloquaAms360ContactDto {
    Acquisition: string | null;
    Active: string | null;
    AMS360BenefitsEmployees: string | null;
    AMS360BenefitsIndustry: string | null;
    AMS360BenefitsLeadSource: string | null;
    AMS360BenefitsSaleProbablity: string | null;
    AMS360EstimatedBenefitsRevenue: string | null;
    AMS360Notation: string | null;
    BenefitsBusinessType: string | null;
    Branch: string | null;
    Broker: string | null;
    BusinessEntity: string | null;
    BusinessOrigin: string | null;
    BusinessType: string | null;
    CompanyAMS360: string | null;
    CompanyID: string | null;
    CustomerAddedDate: string | null;
    CustomerID: string | null;
    CustomerType: string | null;
    Department: string | null;
    Division: string | null;
    DoingBusinessAs: string | null;
    FirstNameAMS360: string | null;
    Id: number | null;
    InBusinessSince: string | null;
    KnownbyAgencyBrokerSinceYear: string | null;
    LastNameAMS360: string | null;
    MaritalStatus: string | null;
    MobilePhone: string | null;
    MutliEntityCustomerType: string | null;
    NAICS: string | null;
    NumberofDependentUnits: string | null;
    NumberofEligibleEmployees: string | null;
    Occupation: string | null;
    Producer: string | null;
    ResidencePhone: string | null;
    Salesperson: string | null;
    SICNAICS: string | null;
    VERTAMDateofBirth: string | null;
    YearEmployed: string | null;
}

export interface EloquaToCrmCompareDtoV2 {
    CrmContact: Partial<MarketingManagerEloquaCrmContactDto> | null;
    EloquaContact: Partial<MarketingManagerEloquaCrmContactDto> | null;
    HasConflicts: boolean;
    Id: number;
    MasterProducer: Partial<MasterProducerDto> | null;
}

export interface MarketingManagerCampaignDtoV2 {
    CampaignToEloquaId: number;
    CanClaim: boolean;
    Description: string | null;
    Id: number;
    IsEnabled: boolean;
    Name: string | null;
}

export interface MarketingManagerDtoV2 {
    Campaigns: Array<Partial<MarketingManagerCampaignDtoV2>> | null;
    CrmAccountId: number;
    CrmAccountName: string | null;
    CrmContactId: number;
    CrmFirstName: string | null;
    CrmLastName: string | null;
    DoNotCall: boolean;
    EloquaAccountName: string | null;
    EloquaContactId: number;
    EloquaFirstName: string | null;
    EloquaId: number | null;
    EloquaLastName: string | null;
    EloquaUserId: number;
    EmailAddress: string | null;
    IsGloballySubscribed: boolean;
    IsLocked: boolean;
    OriginalSource: string | null;
    PreferredContactMethod: 'Any'|'Email'|'Phone'|'Fax'|'Mail'|'Text';
    RecentSource: string | null;
}

export interface CcrtListItemDto {
    ConflictTotal: number;
    Email: string | null;
}

export interface EloquaToCrmCompareDto {
    CrmAccount: Partial<MarketingManagerEloquaCrmContactDto> | null;
    EloquaContact: Partial<MarketingManagerEloquaCrmContactDto> | null;
    HasConflicts: boolean;
    Id: number;
    MasterProducer: Partial<MasterProducerDto> | null;
}

export interface MarketingManagerBulkUnassignDto {
    AlreadyDisabledWarnings: number;
    EnabledByAnotherUserWarnings: number;
    Failures: number;
    Successes: number;
}

export interface MarketingManagerBulkAssignDto {
    EnabledByAnotherUserWarnings: number;
    Failures: number;
    NoActivationIdWarnings: number;
    NoEmailAddressWarnings: number;
    Successes: number;
}

export interface LocDto {
    Id: number;
    LineOfCoverageFriendlyName: string | null;
}

export interface MarketingManagerEloquaCrmContactDto {
    Address1: string | null;
    Address2: string | null;
    AnnualPayroll: string | null;
    City: string | null;
    ContactFirstName: string | null;
    ContactLastName: string | null;
    EffectiveDate: string | null;
    Email: string | null;
    Id: number | null;
    NAICSCode: string | null;
    Name: string | null;
    NumberOfEmployees: string | null;
    NumberOfLocations: string | null;
    OriginalSource: string | null;
    Phone: string | null;
    RecentSource: string | null;
    State: string | null;
    Topic: string | null;
    Zip: string | null;
}

export interface MarketingManagerCampaignDto {
    CampaignToCrmAccountId: number;
    CanClaim: boolean;
    Description: string | null;
    Id: number;
    IsEnabled: boolean;
    Name: string | null;
}

export interface MarketingManagerDto {
    Campaigns: Array<Partial<MarketingManagerCampaignDto>> | null;
    CrmAccountId: number;
    CrmAccountName: string | null;
    CrmFirstName: string | null;
    CrmLastName: string | null;
    DoNotCall: boolean;
    EloquaAccountName: string | null;
    EloquaFirstName: string | null;
    EloquaId: number | null;
    EloquaLastName: string | null;
    EloquaUserId: number;
    EmailAddress: string | null;
    IsGloballySubscribed: boolean;
    IsLocked: boolean;
    OriginalSource: string | null;
    PreferredContactMethod: 'Any'|'Email'|'Phone'|'Fax'|'Mail'|'Text';
    RecentSource: string | null;
}

export interface MasterProducerDto {
    Email: string | null;
    FullName: string | null;
    PersonId: number;
}

export interface LeaderBoardDto {
    Leaders: Array<Partial<LeaderDto>> | null;
    TotalProducerCount: number;
}

export interface LeaderDto {
    Amount: Partial<number>;
    FirstName: string | null;
    LastName: string | null;
    PersonId: number;
    Rank: number;
}

export interface CourseStatsItemDto {
    CourseCategoryId: number | null;
    CourseCategoryName: string | null;
    CourseId: number;
    CourseTitle: string | null;
    ParticipantsAttempted: number;
    ParticipantsCompleted: number;
    StartDate: string;
}

export interface CourseStatsDto {
    CourseStatsLessons: Array<Partial<CourseStatsLessonDto>> | null;
    Participants: number;
    ParticipantsAttempted: number;
    ParticipantsCompleted: number;
}

export interface CourseStatsLessonDto {
    AverageAttemptsToPass: Partial<number>;
    AverageTimeWatchedPercentage: Partial<number> | null;
    AverageTotalTimeSpent: string;
    LessonId: number;
    Name: string | null;
    ParticipantsAttempted: number;
    ParticipantsCompleted: number;
    PassRate: Partial<number> | null;
}

export interface ParticipantDashboardDto {
    LessonsAvailable: number;
    LessonsCompleted: number;
    ParticipantDashboardLessons: Array<Partial<ParticipantDashboardLessonDto>> | null;
    TotalTimeSpent: string;
}

export interface ParticipantDashboardLessonDto {
    Attempts: number;
    AttemptStatus: 'Pass'|'Fail'|'InProgress' | null;
    GradePercentage: number | null;
    LessonId: number;
    Name: string | null;
    TimeWatchedPercentage: Partial<number> | null;
}

export interface ConferenceEventsDto {
    Events: Array<Partial<ConferenceScheduleDto>> | null;
    TimeZone: string | null;
}

export interface ConferenceAttendeeDto {
    AttendeeId: number;
    Balance: Partial<number>;
    CompanyName: string | null;
    FirstName: string | null;
    Guests: number;
    IsLGEmployee: boolean;
    IsSpouse: boolean;
    LastName: string | null;
    PersonId: number;
    RegisteredById: number | null;
    RegistrationDate: string;
}

export interface ConferenceScheduleDto {
    Description: string | null;
    Id: number;
    Name: string | null;
    SponsorAttachmentCdnFileName: string | null;
    SponsorAttachmentExtension: string | null;
    SponsorAttachmentId: number | null;
    SponsorName: string | null;
    TimeslotEndDate: string;
    TimeslotId: number;
    TimeslotName: string | null;
    TimeslotStartDate: string;
    Type: string | null;
}

export interface RegistrationStatusDto {
    CompanyName: string | null;
    FirstName: string | null;
    HasAddress: boolean;
    IsLgEmployee: boolean;
    LastName: string | null;
    Title: string | null;
}

export interface ConferenceDashboardDto {
    AttendeeRole: Partial<ConferenceAttendeePersonRole> | null;
    Balance: Partial<number>;
    Conference: Partial<Conference> | null;
    ConferenceRegistrationStatus: 'Open'|'NotStarted'|'Finished';
    Id: number;
    Sponsorships: Array<Partial<ConferenceSponsorship>> | null;
}

export interface ConferenceCcPaymentDto {
    Amount: Partial<number>;
    BillingAddress: string | null;
    City: string | null;
    CreditCardNumber: string | null;
    Cvv: string | null;
    ExpirationDate: string;
    Name: string | null;
    State: string | null;
    Zip: string | null;
}

export interface ConferencePersonDto {
    City: string | null;
    Company: string | null;
    Email: string | null;
    FirstName: string | null;
    LastName: string | null;
    State: string | null;
    Street: string | null;
    Title: string | null;
    Zip: string | null;
}

export interface PotentialDto {
    OpenPotential: Partial<number>;
    PeriodPotential: Partial<number>;
}

export interface AccountActivityOverviewDto {
    NewProspects: number;
    NewProspectsYtd: number;
    NewSuspects: number;
    NewSuspectsYtd: number;
    PhoneCallDetails: Array<Partial<OverviewPhoneCallDetailsDto>> | null;
    PhoneCalls: number;
    PhoneCallsYtd: number;
}

export interface AccountStageReportDto {
    Clients: number;
    Leads: number;
    Prospects: number;
    Suspects: number;
}

export interface AccountSizeReportDto {
    AverageAccountSize: Partial<number>;
    MinSizeGoal: Partial<number>;
    NumberOfAccounts: number;
}

export interface ActivityGoalAppointmentDetailsDto {
    AccountName: string | null;
    Details: string | null;
    InitialAppointmentOn: string | null;
}

export interface ActivityGoalConversationDetailsDto {
    AccountName: string | null;
    Details: string | null;
    InitialConversationOn: string | null;
}

export interface ActivityGoalsDto {
    AppointmentDetails: Array<Partial<ActivityGoalAppointmentDetailsDto>> | null;
    ConversationDetails: Array<Partial<ActivityGoalConversationDetailsDto>> | null;
    InitialAppointmentsGoalAnnual: number;
    InitialAppointmentsGoalWeekly: number;
    InitialAppointmentsGoalYTD: number;
    InitialAppointmentsPeriod: number;
    InitialAppointmentsPeriodGoal: number;
    InitialAppointmentsYTD: number;
    InitialConversationsGoalAnnual: number;
    InitialConversationsGoalWeekly: number;
    InitialConversationsGoalYTD: number;
    InitialConversationsPeriod: number;
    InitialConversationsPeriodGoal: number;
    InitialConversationsYTD: number;
}

export interface OverviewPhoneCallDetailsDto {
    AccountName: string | null;
    Details: string | null;
    MostRecentCall: string | null;
    NumberOfCallsMade: number;
}

export interface RevenueReportDto {
    Bor: Partial<number>;
    Goal: Partial<number>;
    Total: Partial<number>;
}

export interface AccountDto {
    AccountType: 'Commercial'|'Personal'|'EmployeeBenefits'|'FinancialServices'|'CenterofInfluence';
    Id: string;
    Name: string | null;
    Opportunities: Array<Partial<OpportunityDto>> | null;
    OwnerId: string | null;
}

export interface OpportunityDto {
    AccountId: string;
    ActivityDate: string | null;
    Commission: Partial<number> | null;
    CommissionFee: Partial<number> | null;
    Id: string;
    IsSponsored: boolean;
    IsSponsored2: boolean;
    LineOfBusiness: 'Commercial'|'Personal'|'EmployeeBenefits'|'Retirement';
    LineOfCoverage: 'Auto'|'BuildersRisk'|'BusinessOwnerPolicy'|'Dental'|'DirectorsOfficers'|'Dwelling'|'Earthquake'|'EPLI'|'Flood'|'GeneralLiability'|'GroupLife'|'Home'|'IndividualHealth'|'IndividualLife'|'InlandMarine'|'LongTermDisability'|'MedicalGroup'|'Other'|'PAF'|'ProfessionalLiability'|'Property'|'Retirement'|'SecondaryHome'|'ShortTermDisability'|'Surety'|'Umbrella'|'Vision'|'VoluntaryLines'|'WorkComp'|'WorkSite'|'BHCCP'|'EBConsultOutsource'|'BenefitsTechnology'|'COBRAAdministration'|'DefinedContribution'|'DirectReimbursePlan'|'EBOutsourcing'|'EBReview'|'EBEdEnrollment'|'EmployeeStatements'|'ExpenseReimbursement'|'FSA'|'HRA'|'HSA'|'InvestmentCommFees'|'LongTermCareIns'|'MBAAlliance'|'MERP'|'PensionPlanAssets'|'PremiumOnlyPlan'|'RetirementPlanAdmin'|'RHCCP'|'SalaryEBSurvey'|'FullServiceInvestment'|'FullServiceAdmin'|'PlanDocAdminWork'|'Package';
    Name: string | null;
    Other: string | null;
    Premium: Partial<number> | null;
    TotalRevenue: Partial<number> | null;
}

export interface CLGamePrizePayoutDto {
    FirstName: string | null;
    GrandPrizeName: string | null;
    LastName: string | null;
    PersonId: number;
    PrizeAmount: Partial<number> | null;
    Rank: number;
}

export interface CLGameCrmCarrierDto {
    CarrierId: number;
    CarrierName: string | null;
}

export interface CLGamePlayerDto {
    CompanyName: string | null;
    FirstName: string | null;
    IsCaptain: boolean;
    LastName: string | null;
    PersonId: number;
    PlayerId: number;
    PlayerPersonRoleId: number | null;
    TeamId: number | null;
    TeamName: string | null;
    TeamPersonRoleId: number | null;
    TotalPoints: Partial<number>;
}

export interface ViewableUsersDTO {
    CustomAccess: Array<Partial<ViewableUsersPersonDTO>> | null;
    DefaultAccess: Array<Partial<Person>> | null;
    Id: number;
    People: Array<Partial<ViewableUsersPersonDTO>> | null;
    PeopleGroups: Array<Partial<PeopleGroup>> | null;
}

export interface ViewableUsersPersonDTO {
    FirstName: string | null;
    LastName: string | null;
    LinkingId: number;
    PeopleGroupName: string | null;
    PersonId: number;
    WaysIncluded: string | null;
}

export interface NaicsReportTopCarriersDto {
    NaicsCode: number;
    ParentCompany: string | null;
    Premium: number;
    Rank: number;
}

export interface NaicsCsvUploadDto {
    FileName: string | null;
    RecordCount: number;
}

export interface NaicsReportTopStatesDto {
    NaicsCode: number;
    Premium: number;
    Rank: number;
    State: string | null;
}

export interface IIdentity {
    Id: number;
}

