import { Checkbox } from "@mantine/core";

export function TermsAndConditionCheckbox() {
  return (
    <Checkbox
      label={
        <span>
          I agree to the{" "}
          <a
            href="./terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
          >
            terms and conditions
          </a>
        </span>
      }
      name="terms-and-conditions"
    />
  );
}
