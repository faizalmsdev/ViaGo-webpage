import React from "react";

const DeleteAccountPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Account Deletion Policy</h1>
      <p className="mb-4">
        At Viago, we respect your privacy and provide an option to delete your
        account and associated data. If you wish to proceed with account
        deletion, please follow the steps below.
      </p>

      <h2 className="text-xl font-semibold mb-2">How to Request Account Deletion</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Send an email to <strong>viagocabs@gmail.com</strong> with your registered phone number.</li>
        <li>Use the in-app settings to request deletion (if available).</li>
        <li>Our team will process your request within 7 business days.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">What Data is Deleted?</h2>
      <p className="mb-4">
        Once your account is deleted, the following data will be permanently removed:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Personal information (name, phone number, email).</li>
        <li>Ride history and transaction details.</li>
        <li>Saved payment methods (if applicable).</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Data Retention Policy</h2>
      <p className="mb-4">
        Some data may be retained for legal and security purposes for up to 90
        days, including:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Transaction history required for financial audits.</li>
        <li>Fraud prevention and security records.</li>
      </ul>

      <p className="text-sm text-gray-600">
        If you have any questions or need assistance, contact us at{" "}
        <strong>viagocabs@gmail.com</strong>.
      </p>
    </div>
  );
};

export default DeleteAccountPage;
