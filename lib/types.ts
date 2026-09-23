export type SponsorshipType = '1975-klubben'|'Brons'|'Silver'|'Guld'|'Platina'|'Vet inte ännu / vill veta mer'
export type LeadStatus = 'new'|'contacted'|'meeting'|'interested'|'won'|'lost'
export type SponsorLead = {
  id:string; company_name:string; organization_number:string; contact_name:string; email:string; phone:string; website:string|null;
  sponsorship_type:SponsorshipType; message:string|null; status:LeadStatus; notes:string|null; created_at:string; updated_at:string;
}
