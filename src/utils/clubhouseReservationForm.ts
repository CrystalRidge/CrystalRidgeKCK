export function getData(formData: FormData) {
  const reservationDate = new Date(formData.get("reservation-date") as string);
  const emailAddress = formData.get("email-address") as string;
  const phoneNumber = formData.get("phone-number") as string;
  return { reservationDate, emailAddress, phoneNumber };
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

export function formatDate(date: Date) {
  let month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
