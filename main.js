function getAverage(marks){
  return average = Math.floor(marks.reduce((acc, grade)=> acc + grade, 0)/ marks.length)
}
// Test Cases:
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);


  });
});
