import { DatePicker } from "@mantine/dates";
import { useEffect, useRef, useState } from "react";
import { formatDate } from "../utils/clubhouseReservationForm";

const nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));

export function DateInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    if (date && inputRef?.current) {
      inputRef.current.value = formatDate(date);
    }
  }, [date, inputRef]);

  return (
    <>
      <DatePicker
        className="mb-4"
        value={date}
        onChange={setDate}
        minDate={new Date()}
        maxDate={nextYear}
      />
      <input type="date" name="reservation-date" ref={inputRef} hidden />
    </>
  );
}
