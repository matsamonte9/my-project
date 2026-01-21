type HelloProps = {
  name: string;
};

export function Hello({ name }: HelloProps) {
  const unusedVariable = 42;
  return <h1>Hello, {name}!</h1>;
}