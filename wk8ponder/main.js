const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js-logo.png',
    sections: [
    { sectionNum: 1, roomNum: 'STC 031', enrolled: 26, days: 'TTh', instructor: 'Bro K.Chancellor'},
    { sectionNum: 2, roomNum: 'STC 029', enrolled: 28, days: 'TTh', instructor: 'Bro E.Thomas III'},
    { sectionNum: 3, roomNum: 'STC 025', enrolled: 22, days: 'MWF', instructor: 'Bro R.Sherman'},
    { sectionNum: 4, roomNum: 'STC 089', enrolled: 30, days: 'MWF', instructor: 'Bro D.Baldwin'},
    { sectionNum: 5, roomNum: 'STC 003', enrolled: 24, days: 'TTh', instructor: 'Bro R.Wilson'},
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
  };

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

//an object is a collection of key-value pairs. All keys are properties. When one is a function, it is called a method.
// a class is an undefined object that acts as a template for objects. helps defined properties and methods. 
// "This" always works in a class. 