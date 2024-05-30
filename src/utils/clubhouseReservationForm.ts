export function getData(formData: FormData) {
  const reservationDate = new Date(formData.get("reservation-date") as string);
  const emailAddress = formData.get("email-address") as string;
  const phoneNumber = formData.get("phone-number") as string;
  const address = formData.get("address") as string;
  const eventType = formData.get("event-type") as string;
  const description = formData.get("description") as string;
  return {
    reservationDate,
    emailAddress,
    phoneNumber,
    address,
    eventType,
    description,
  };
}

export function validateData({
  reservationDate,
  emailAddress,
  phoneNumber,
  address,
  eventType,
}: {
  reservationDate: Date;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  eventType: string;
  description: string;
}) {
  if (
    !reservationDate ||
    !emailAddress ||
    !phoneNumber ||
    !address ||
    !eventType
  )
    return false;
  return (
    !isNaN(reservationDate.valueOf()) &&
    typeof emailAddress === "string" &&
    typeof phoneNumber === "string" &&
    typeof address === "string" &&
    typeof eventType === "string"
  );
}

export function convertDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
