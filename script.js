/*Цього разу без графічного супроводження. 
У першому варіанті можна незалежні одна від іншої змінні створювати, типа
sum1 = makeSum();
sum2 = makeSum();
sum3 = makeSum();
...
Так шо обираємо в залежності від обставин)
Юзер нічого не вводить, тому без валідації:)*/

/*----------------1 вар----------*/
{
  function makeSum() {
    let sum = 0;
    return function (number) {
      sum += number;
      return sum;
    };
  }

  const sum = makeSum();
  const sum1 = makeSum();
  const sum2 = makeSum();

  console.log(sum(2));
  console.log(sum(2));
  console.log(sum(3));
  console.log(sum(11));
  console.log(sum(5));
  console.log(sum(6));
}

/*----------------2 вар----------*/

{
  const sum = (() => {
    let sum = 0;
    return (number) => {
      sum += number;
      return sum;
    };
  })();

  console.log(sum(1));
  console.log(sum(2));
  console.log(sum(3));
  console.log(sum(4));
  console.log(sum(5));
  console.log(sum(6));
}
