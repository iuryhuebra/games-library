export function InputText({
  label,
  title,
  text,
  onChange,
}: {
  label: string;
  title: string;
  text: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <label htmlFor={label}>{title}</label>
      <input type="text" id={label} value={text} onChange={onChange} />
    </>
  );
}
