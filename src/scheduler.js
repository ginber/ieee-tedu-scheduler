var courses = [];
courses[0] = [];
courses[0] = [
    {
        "Code": "CMPE 103",
        "Name": "Information Technologies",
        "Section": "CMPE 103_02",
        "Dept.": "Faculty of Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "İsmail Bora Çelikkale (S)",
        "Room": "A514-L",
        "Schedule": "Mo 16 - 18 We 13 - 15",
        "# of Students": "47"
    },
    {
        "Code": "CMPE 103",
        "Name": "Information Technologies",
        "Section": "CMPE 103_03",
        "Dept.": "Faculty of Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "İsmail Bora Çelikkale (S)",
        "Room": "A514-L",
        "Schedule": "Mo 16 - 18 Th 11 - 13",
        "# of Students": "48"
    },
    {
        "Code": "CMPE 103",
        "Name": "Information Technologies",
        "Section": "CMPE 103_04",
        "Dept.": "Faculty of Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "İsmail Bora Çelikkale (S)",
        "Room": "A514-L",
        "Schedule": "Mo 16 - 18 Tu 15 - 17",
        "# of Students": "38"
    }];
courses[1] = [
    {
        "Code": "EDU 101",
        "Name": "Introduction to Education",
        "Section": "EDU 101_01",
        "Dept.": "Early Childhood Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "Sibel Balcı",
        "Room": "D232",
        "Schedule": "We 15 - 17",
        "# of Students": "2"
    },
    {
        "Code": "EDU 101",
        "Name": "Introduction to Education",
        "Section": "EDU 101_02",
        "Dept.": "Early Childhood Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "Tülin Haşlaman",
        "Room": "H105",
        "Schedule": "We 16 - 18",
        "# of Students": "2"
    },
    {
        "Code": "EDU 101",
        "Name": "Introduction to Education",
        "Section": "EDU 101_03",
        "Dept.": "Early Childhood Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "Elif Öztürk",
        "Room": "D230",
        "Schedule": "Tu 09 - 11",
        "# of Students": "4"
    },
    {
        "Code": "EDU 101",
        "Name": "Introduction to Education",
        "Section": "EDU 101_04",
        "Dept.": "Early Childhood Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "Elif Öztürk",
        "Room": "D228",
        "Schedule": "Mo 14 - 16",
        "# of Students": "5"
    },
    {
        "Code": "EDU 101",
        "Name": "Introduction to Education",
        "Section": "EDU 101_06",
        "Dept.": "Early Childhood Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "Tolga Erdoğan",
        "Room": "D230",
        "Schedule": "We 09 - 11",
        "# of Students": "2"
    }
]
courses[2] = [
    {
        "Code": "ELE 209",
        "Name": "Approaches to ELT",
        "Section": "ELE 209_01",
        "Dept.": "English Language Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "Zeynep Bilki",
        "Room": "D032",
        "Schedule": "Tu 14 - 16 We 13 - 14",
        "# of Students": "23"
    },
    {
        "Code": "ELE 209",
        "Name": "Approaches to ELT",
        "Section": "ELE 209_02",
        "Dept.": "English Language Education",
        "Cr": "3",
        "Category": "Course",
        "Lecturer": "Erdem Aksoy",
        "Room": "F215 F121",
        "Schedule": "We 17 - 18 Fr 14 - 16",
        "# of Students": "18"
    }
]


function canBePlaced(c, s, checkTable) {
    let sch = courses[c][s].Schedule;
    for (let i = 0; i < sch.length; i += 11) {
        let pro = sch.substring(i, (i + 11));
        let day = pro.substring(0, 2);
        let strt = pro.substring(3, 5);
        let end = pro.substring(8, 10);
        if (day == "Mo") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                if (checkTable[0][h] != 0)
                    return false;
                //checkTable[0][h]=courses[c][s].Code;
            }
        } else if (day == "Tu") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                if (checkTable[1][h] != 0)
                    return false;
                //checkTable[1][h]=courses[c][s].Code;
            }
        } else if (day == "We") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                if (checkTable[2][h] != 0)
                    return false;
                //checkTable[2][h]=courses[c][s].Code;
            }
        } else if (day == "Th") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                if (checkTable[3][h] != 0)
                    return false;
                //checkTable[3][h]=courses[c][s].Code;
            }
        } else if (day == "Fr") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                if (checkTable[4][h] != 0)
                    return false;
                //checkTable[4][h]=courses[c][s].Code;
            }
        }
    }
    return true;
}

function addToTimetable(c, s, currentTT) {
    let sch = courses[c][s].Schedule;
    let crs = {};
    for (let i = 0; i < sch.length; i += 11) {
        let pro = sch.substring(i, (i + 11));
        let day = pro.substring(0, 2);
        let strt = pro.substring(3, 5);
        let end = pro.substring(8, 10);
        if (day == "Mo") {
            for (let h = (strt - 9); h < (end - 9); h++) {
               crs.eventName  = courses[c][s].Section;
               crs.starthour = strt;
               crs.endhour = end;
                currentTT[0][h] = crs;
            }
        } else if (day == "Tu") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                crs.eventName  = courses[c][s].Section;
                crs.starthour = strt;
                crs.endhour = end;
                 currentTT[0][h] = crs;
            }
        } else if (day == "We") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                crs.eventName  = courses[c][s].Section;
                crs.starthour = strt;
                crs.endhour = end;
                 currentTT[0][h] = crs;
            }
        } else if (day == "Th") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                crs.eventName  = courses[c][s].Section;
                crs.starthour = strt;
                crs.endhour = end;
                 currentTT[0][h] = crs;
            }
        } else if (day == "Fr") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                crs.eventName  = courses[c][s].Section;
                crs.starthour = strt;
                crs.endhour = end;
                 currentTT[0][h] = crs;
            }
        }
    }
    return currentTT;
}

let marked = [];
var possibleSchs = [];
var tempArray = [];
let curTimeTable = [];
curTimeTable = resetTimeTable(curTimeTable);
let finalScheduler = [];

//setTimeout(function() {dfs(0, 0, finalScheduler)}, 2000);
console.log();

let a = [];
a = resetTimeTable(a);

dfs(0, a);

console.log(possibleSchs);

function dfs(lecture, curTimeTable) {

    if (lecture >= courses.length) {
            possibleSchs.push(curTimeTable.toString());
    }
    else {
        for (let i = 0; i < courses[lecture].length; i++) {
            if (canBePlaced(lecture, i, curTimeTable)) {
                curTimeTable = addToTimetable(lecture, i, curTimeTable);
                dfs(lecture + 1, curTimeTable);
                curTimeTable = removeCourse(lecture, i, curTimeTable);
            }
        }
    }
}

function arrangeSections() {
    let results = [];
    let used = [];
    let timeTable = [];

    for (let i = 0; i < courses.length; i++) {

        for (let j = 0; j < courses[i].length; j++) {
            if (!used.includes(i)) {
                if (canBePlaced(i, j, timeTable)) {
                    timeTable = addToTimetable(i, j, timeTable);
                    j = courses[i].length;
                }
            }
        }
        used.push(i);
        results.push(timeTable);
        for (let i = 0; i < 5; i++) {
            timeTable[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
    }
    return results;
}

function removeCourse(c, s, remTable) {
    let sch = courses[c][s].Schedule;
    for (let i = 0; i < sch.length; i += 11) {
        let pro = sch.substring(i, (i + 11));
        let day = pro.substring(0, 2);
        let strt = pro.substring(3, 5);
        let end = pro.substring(8, 10);
        if (day == "Mo") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                remTable[0][h] = 0;

            }
        } else if (day == "Tu") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                remTable[1][h] = 0;
            }
        } else if (day == "We") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                remTable[2][h] = 0;
            }
        } else if (day == "Th") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                remTable[3][h] = 0;
            }
        } else if (day == "Fr") {
            for (let h = (strt - 9); h < (end - 9); h++) {
                remTable[4][h] = 0;
            }
        }
    }
    return remTable;
}

function resetTimeTable(timeTable) {
    for (let i = 0; i < 5; i++) {
        timeTable[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    return timeTable;
}

function printTable(printing){
    for (let i = 0; i < 5; i++) {
       console.log("day " + i + ": ");
       for (let j = 0; j < printing[i].length; j++) {
          console.log(printing[i][j] + "   ");
       }
        
    }
}
