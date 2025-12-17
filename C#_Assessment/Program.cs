using System;

namespace PatientManagementSystem
{
    // ---------------- DELEGATE ----------------
    delegate double BillingDelegate(double amount);

    // ---------------- BASE CLASS ----------------
    abstract class Patient
    {
        public int PatientId;
        public string Name;

        public Patient(int id, string name)
        {
            PatientId = id;
            Name = name;
        }

        public abstract double CalculateBill();
    }

    // ---------------- DERIVED CLASS ----------------
    class GeneralPatient : Patient
    {
        public GeneralPatient(int id, string name) : base(id, name) { }

        public override double CalculateBill()
        {
            return 2000;
        }
    }

    class EmergencyPatient : Patient
    {
        public EmergencyPatient(int id, string name) : base(id, name) { }

        public override double CalculateBill()
        {
            return 5000;
        }
    }

    // ---------------- EVENT PUBLISHER ----------------
    class Hospital
    {
        public event Action<string> NotifyDepartments;

        public void AdmitPatient(Patient patient)
        {
            Console.WriteLine("Patient Admitted: " + patient.Name);
            NotifyDepartments?.Invoke("Patient admitted: " + patient.Name);
        }
    }

    // ---------------- EVENT SUBSCRIBER ----------------
    class NotificationService
    {
        public void ReceiveNotification(string message)
        {
            Console.WriteLine("Notification Sent: " + message);
        }
    }

    // ---------------- BILLING ----------------
    class Billing
    {
        public double ApplyBilling(BillingDelegate billingDelegate, double amount)
        {
            return billingDelegate(amount);
        }
    }

    // ---------------- MAIN CLASS ----------------
    class Program
    {
        static void Main()
        {
            Hospital hospital = new Hospital();
            NotificationService notification = new NotificationService();

            hospital.NotifyDepartments += notification.ReceiveNotification;

            Console.WriteLine("Select Patient Type:");
            Console.WriteLine("1. General");
            Console.WriteLine("2. Emergency");

            int choice = int.Parse(Console.ReadLine());

            Patient patient;

            if (choice == 1)
                patient = new GeneralPatient(1, "Rahul");
            else
                patient = new EmergencyPatient(2, "Ankit");

            hospital.AdmitPatient(patient);

            double baseAmount = patient.CalculateBill();

            Billing billing = new Billing();

            BillingDelegate discountDelegate = amount => amount * 0.9;

            double finalBill = billing.ApplyBilling(discountDelegate, baseAmount);

            Console.WriteLine("Final Bill Amount: ₹" + finalBill);
        }
    }
}