const people = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

export const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
};

export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
};

<RegularList
  items={people}
  resourceName="person"
  itemComponent={SmallPersonListItem}
/>;

//list should be in charge of laying out the list items
