export function getData(formData: FormData) {
  const emailAddress = formData.get("email-address") as string;
  const phoneNumber = formData.get("phone-number") as string;
  return { emailAddress, phoneNumber };
}

export function validateData({
  reservationDate,
  emailAddress,
  phoneNumber,
}: {
  reservationDate: Date;
  emailAddress: string;
  phoneNumber: string;
}) {
  if (!reservationDate || !emailAddress || !phoneNumber) return false;
  return (
    !isNaN(reservationDate.valueOf()) &&
    typeof emailAddress === "string" &&
    typeof phoneNumber === "string"
  );
}
