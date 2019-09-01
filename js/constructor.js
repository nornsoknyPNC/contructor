class Person {
    constructor(name,age,province,gender,school){
        this.mName = name;
        this.mAge = age;
        this.mProvince = province;
        this.mGeder = gender;
        this.mSchool = school;
    }
}
const person1 = new Person("sokny",20,"Pursat","F","WEB-A");
console.log(person1);

//******************* */

class Computer {
    constructor(brand,price){
        this.mBrand = brand;
        this.mPrice = price;
    }
}
const com = new Computer("Dell",2000 + "$");
console.log(com);
// console.log(com.mPrice);