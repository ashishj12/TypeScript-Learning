// Partial<Type>
// Required<Type>
// ReadOnly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type,ExcludedUnion>
// NotNullable<Type>

// Parameters<Type>

// Partial<Type> ->

// type User = {
//   name: String;
//   email: String;
// };

// type User2 = Partial<User>; //make props to optional

//Required<Type> - Opposite of partial

type User = {
  name?: string;
  email?: string;
};

type User2 = Required<User>
