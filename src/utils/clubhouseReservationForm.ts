export function getData(formData: FormData) {
  const reservationDate = new Date(formData.get("reservation-date") as string);
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const emailAddress = formData.get("email-address") as string;
  const phoneNumber = formData.get("phone-number") as string;
  const address = formData.get("address") as string;
  const eventType = formData.get("event-type") as string;
  const description = formData.get("description") as string;
  const termsAndConditions = Boolean(formData.get("terms-and-conditions"));

  return {
    reservationDate,
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    address,
    eventType,
    description,
    termsAndConditions,
  };
}

export function isNotSpecialDate(date: Date) {
  const specialDates = [
    new Date(2024, 5, 8), // June 8th
    new Date(2024, 6, 1), // July 1st
    new Date(2024, 6, 2), // July 2nd
    new Date(2024, 6, 3), // July 3rd
    new Date(2024, 6, 4), // July 4th
    new Date(2024, 6, 5), // July 5th
    new Date(2024, 6, 11), // July 11th
    new Date(2024, 7, 10), // August 10th
    new Date(2024, 7, 17), // August 17th
    new Date(2024, 8, 12), // September 12th
    new Date(2024, 9, 12), // October 12th
    new Date(2024, 9, 26), // October 26th
    new Date(2024, 10, 14), // November 14th
    new Date(2024, 11, 14), // December 14th
    new Date(2024, 11, 21), // December 21st
  ];

  // Check if the given date is one of the special dates
  for (let i = 0; i < specialDates.length; i++) {
    if (date.getTime() === specialDates[i].getTime()) {
      return false;
    }
  }

  return true;
}

export function validateData({
  reservationDate,
  firstName,
  lastName,
  emailAddress,
  phoneNumber,
  address,
  eventType,
  termsAndConditions,
}: {
  reservationDate: Date;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  eventType: string;
  description: string;
  termsAndConditions: boolean;
}) {
  if (!termsAndConditions) return false;

  if (
    !reservationDate ||
    !firstName ||
    !lastName ||
    !emailAddress ||
    !phoneNumber ||
    !address ||
    !eventType
  )
    return false;

  if (
    isNaN(reservationDate.valueOf()) ||
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof emailAddress !== "string" ||
    typeof phoneNumber !== "string" ||
    typeof address !== "string" ||
    typeof eventType !== "string"
  )
    return false;

  return isNotSpecialDate(reservationDate);
}

export function convertDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
