type HelloProps = {
  name: string;
};

export function Hello({ name }: HelloProps) {
  const unusedVariable = 23;
  return <h1>Hello, I'm {name}! Age, {unusedVariable}. From the land of corrupt politicians, Philippines! and I thank you! yikes</h1>;
}