﻿namespace PetCure.Business.CQRS.PatientManagement.Pets.DTOs
{
    public class OwnerInfoDTO
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        public string Address { get; set; }

        public string? City { get; set; }

        public string? State { get; set; }

        public string? ZipCode { get; set; }

        public string EmergencyContact { get; set; }
    }
}
