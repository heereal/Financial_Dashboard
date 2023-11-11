type FormHelperTextProps = {
  errors: string[] | undefined;
  fieldName: string;
};

export default function FormHelperText({
  errors,
  fieldName,
}: FormHelperTextProps) {
  const isError = !!errors;

  if (!isError) {
    return null;
  }

  return (
    <div
      id={`${fieldName}-error`}
      aria-live="polite"
      className="mt-2 text-sm text-red-500"
    >
      {errors.map((error: string) => (
        <p key={error}>{error}</p>
      ))}
    </div>
  );
}
