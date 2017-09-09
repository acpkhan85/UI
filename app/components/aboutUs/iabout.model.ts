export class IAboutUs {
    public aboutUsInfo: string;
    public leaders: LeadersDto[];
    public prospectus: SchoolProsepectusDto;
    public youTubeUrl : YouTubeUrl[];
}
export class SchoolProsepectusDto {
    public SchoolProsepectusId: number;
    public ProspectusImage: string;
    public Description: string;
}
export class LeadersDto {
    public Title: string;
    public FirstName: string;
    public LastName: string;
    public Designation: string;
}

export class YouTubeUrl {
    public Title: string;
    public URL: string;
}