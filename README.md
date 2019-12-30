- map over doggos
- pass click function down to each doggo
- onMouseEnter / onMouseLeave fun


let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((number) => number * 2);
console.log(doubled)
[2, 4, 6, 8, 10]

let weeks = ['Advanced OOP', 'HTTP', 'React', 'Advanced React', 'Databases', 'Rails']

let weekList = weeks.map(title => {
  return <li>{title}</li>
})
