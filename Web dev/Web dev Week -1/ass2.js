function canVote(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
let ans = canVote(17);
console.log(ans);
