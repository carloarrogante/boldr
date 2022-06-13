export interface Root {
    status: string
    "message-type": string
    "message-version": string
    message: Message
  }
  
  export interface Message {
    "items-per-page": number
    query: Query
    "total-results": number
    "next-cursor": string
    items: Item[]
  }
  
  export interface Query {
    "start-index": number
    "search-terms": string
  }
  
  export interface Item {
    institution: Institution
    indexed: Indexed
    posted: Posted
    "publisher-location": string
    "update-to": UpdateTo[]
    "standards-body": StandardsBody[]
    "edition-number": string
    "group-title": string[]
    "reference-count": number
    publisher: string
    issue: string
    "isbn-type": IsbnType[]
    license: License[]
    funder: Funder[]
    "content-domain": ContentDomain
    chair: Chair[]
    "short-container-title": string
    accepted: Accepted
    "content-updated": ContentUpdated
    "published-print": PublishedPrint
    abstract: string
    DOI: string
    type: string
    created: Created
    approved: Approved
    page: string
    "update-policy": string
    source: string
    "is-referenced-by-count": number
    title: string[]
    prefix: string
    volume: string
    "clinical-trial-number": ClinicalTrialNumber[]
    author: Author[]
    member: string
    "content-created": ContentCreated
    "published-online": PublishedOnline
    reference: Reference
    "container-title": string[]
    review: Review
    "original-title": string[]
    language: string
    link: Link[]
    deposited: Deposited
    score: number
    degree: string
    subtitle: string[]
    translator: Translator[]
    "free-to-read": FreeToRead
    editor: Editor[]
    "component-number": string
    "short-title": string[]
    issued: Issued
    ISBN: string[]
    "references-count": number
    "part-number": string
    "journal-issue": JournalIssue
    "alternative-id": string[]
    URL: string
    archive: string[]
    relation: Relation
    ISSN: string[]
    "issn-type": IssnType[]
    subject: string[]
    "published-other": PublishedOther
    published: Published
    assertion: Assertion[]
    subtype: string
    "article-number": string
  }
  
  export interface Institution {
    name: string
    place: string[]
    department: string[]
    acronym: string[]
  }
  
  export interface Indexed {
    "date-parts": number[][]
    "date-time": string
    timestamp: number
  }
  
  export interface Posted {
    "date-parts": number[][]
  }
  
  export interface UpdateTo {
    label: string
    DOI: string
    type: string
    updated: Updated
  }
  
  export interface Updated {
    "date-parts": number[][]
    "date-time": string
    timestamp: number
  }
  
  export interface StandardsBody {
    name: string
    acronym: string[]
  }
  
  export interface IsbnType {
    type: string
    value: string[]
  }
  
  export interface License {
    URL: string
    start: Start
    "delay-in-days": number
    "content-version": string
  }
  
  export interface Start {
    "date-parts": number[][]
    "date-time": string
    timestamp: number
  }
  
  export interface Funder {
    name: string
    DOI: string
    "doi-asserted-by": string
    award: string[]
  }
  
  export interface ContentDomain {
    domain: string[]
    "crossmark-restriction": boolean
  }
  
  export interface Chair {
    ORCID: string
    suffix: string
    given: string
    family: string
    affiliation: Affiliation[]
    name: string
    "authenticated-orcid": boolean
    prefix: string
    sequence: string
  }
  
  export interface Affiliation {
    name: string
  }
  
  export interface Accepted {
    "date-parts": number[][]
  }
  
  export interface ContentUpdated {
    "date-parts": number[][]
  }
  
  export interface PublishedPrint {
    "date-parts": number[][]
  }
  
  export interface Created {
    "date-parts": number[][]
    "date-time": string
    timestamp: number
  }
  
  export interface Approved {
    "date-parts": number[][]
  }
  
  export interface ClinicalTrialNumber {
    "clinical-trial-number": string
    registry: string
    type: string
  }
  
  export interface Author {
    ORCID: string
    suffix: string
    given: string
    family: string
    affiliation: Affiliation2[]
    name: string
    "authenticated-orcid": boolean
    prefix: string
    sequence: string
  }
  
  export interface Affiliation2 {
    name: string
  }
  
  export interface ContentCreated {
    "date-parts": number[][]
  }
  
  export interface PublishedOnline {
    "date-parts": number[][]
  }
  
  export interface Reference {
    issn: string
    "standards-body": string
    issue: string
    key: string
    "series-title": string
    "isbn-type": string
    "doi-asserted-by": string
    "first-page": string
    isbn: string
    doi: string
    component: string
    "article-title": string
    "volume-title": string
    volume: string
    author: string
    "standard-designator": string
    year: string
    unstructured: string
    edition: string
    "journal-title": string
    "issn-type": string
  }
  
  export interface Review {
    type: string
    "running-number": string
    "revision-round": string
    stage: string
    "competing-interest-statement": string
    recommendation: string
    language: string
  }
  
  export interface Link {
    URL: string
    "content-type": string
    "content-version": string
    "intended-application": string
  }
  
  export interface Deposited {
    "date-parts": number[][]
    "date-time": string
    timestamp: number
  }
  
  export interface Translator {
    ORCID: string
    suffix: string
    given: string
    family: string
    affiliation: Affiliation3[]
    name: string
    "authenticated-orcid": boolean
    prefix: string
    sequence: string
  }
  
  export interface Affiliation3 {
    name: string
  }
  
  export interface FreeToRead {
    "start-date": StartDate
    "end-date": EndDate
  }
  
  export interface StartDate {
    "date-parts": number[][]
  }
  
  export interface EndDate {
    "date-parts": number[][]
  }
  
  export interface Editor {
    ORCID: string
    suffix: string
    given: string
    family: string
    affiliation: Affiliation4[]
    name: string
    "authenticated-orcid": boolean
    prefix: string
    sequence: string
  }
  
  export interface Affiliation4 {
    name: string
  }
  
  export interface Issued {
    "date-parts": number[][]
  }
  
  export interface JournalIssue {
    issue: string
  }
  
  export interface Relation {
    additionalProp1: AdditionalProp1
    additionalProp2: AdditionalProp2
    additionalProp3: AdditionalProp3
  }
  
  export interface AdditionalProp1 {
    "id-type": string
    id: string
    "asserted-by": string
  }
  
  export interface AdditionalProp2 {
    "id-type": string
    id: string
    "asserted-by": string
  }
  
  export interface AdditionalProp3 {
    "id-type": string
    id: string
    "asserted-by": string
  }
  
  export interface IssnType {
    type: string
    value: string[]
  }
  
  export interface PublishedOther {
    "date-parts": number[][]
  }
  
  export interface Published {
    "date-parts": number[][]
  }
  
  export interface Assertion {
    group: Group
    explanation: Explanation
    name: string
    value: string
    URL: string
    order: number
  }
  
  export interface Group {
    name: string
    label: string
  }
  
  export interface Explanation {
    URL: string
  }
  