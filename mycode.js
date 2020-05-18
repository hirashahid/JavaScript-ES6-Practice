class Element1 {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Parks1 extends Element1{
    constructor(name, buildYear, area,  noOfTress){
        super(name, buildYear);
        this.noOfTress = noOfTress;
        this.area = area;
    }
    density(){
        const densityTree = this.noOfTress / this.area;
        console.log(`${this.name} has a tree density of ${this.densityTree}`);

    }
}
class Streets1 extends Element1{
   
    constructor(name, buildYear, lengthOfPark, size = 3){
        super(name, buildYear);
        this.lengthOfPark = lengthOfPark;
        this.size = size;
    }
    classifyStreet(){
        const classification =  new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name} built in  ${this.buildYear} has size of ${classification.get(this.size)} street`);
    }

}
const allParks1 = [new Parks1('Saeed', 1990, 2.3, 90),
                  new Parks1('National Park', 1894, 2.9, 3541),
                  new Parks1('Oak Park', 1953, 0.4, 949)];
                  
const allStreets = [new Streets1('Ocean Avenue', 1999, 1.1, 4),
new Streets1('Evergreen Street', 2008, 2.7, 2),
new Streets1('4th Street', 2015, 0.8),
new Streets1('Sunset Boulevard', 1982, 2.5, 5)];
function cal1(arr){
   const sum =  arr.reduce((prev, cur, index) => prev + cur + 0);
   return [sum, sum/arr.length]
}

function reportPark(p){
    console.log('*************Report Of Park****************');
    //density
    p.forEach(el => el.density());

    //age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const[totalAge, avgAge] = cal1(ages);
    console.log(`Our ${p.length} parks have ${avgAge} years`);
    //has more than 1000 tress
    const i = p.map(el => el.noOfTress).findIndex(el => el.noOfTress > 1000);
    console.log(`  has more than 1000 tress`);


}
function reportStreet(s){
    console.log('*************Report Of Street****************');
    //classify 
    s.forEach(el => el.classifyStreet());
    //length
    const[totalLength, avgLength] = cal1(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

}

reportPark(allParks1);
reportStreet(allStreets);