let data = [8, 2, 4, 12];
function quickSort (left, right) {
  let i = left, j = right, temp;
  if (left > right) {
    return data;
  }
  temp = data[i]
  while (i != j) {
    while (data[j] >= temp && i < j) {
      j--
    }
    while (data[i] <= temp && i < j) {
      i++;
    }

    if (i < j) {
      let t = data[j];
      data[j] = data[i];
      data[i] = t;
    }
    console.log(data);
  }
  data[left] = data[i];
  data[i] = temp;
  quickSort(left, i - 1);
  quickSort(i + 1, right)

}

quickSort(0, data.length - 1);
console.log(data)