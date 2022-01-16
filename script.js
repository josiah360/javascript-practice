var students = [
    {
    name: 'Josiah Olajide', 
    track: 'Front-End Development',
    achievements: ['html', 'css', 'javascript', 'figma'],
    points: 287
    },

    {
    name: 'Ifeoluwa Abel', 
    track: 'Back-End Development',
    achievements: ['node.js', 'express', 'mongodb', 'mpn'],
    points: 1208
    },

        {
    name: 'Mariam Balogun', 
    track: 'UX Design',
    achievements: ['figma', 'adobe xd', 'research', 'whimsical'],
    points: 965
    },

    {
    name: 'Inioluwa Olajide', 
    track: 'Full-stack',
    achievements: ['html', 'css', 'javascript', 'figma', 'node.js', 'express', 'mongodb', 'mpn'],
    points: 5233
    },

    {
    name: 'Inioluwa Olajide', 
    track: 'Full-stack',
    achievements: ['html', 'css', 'javascript', 'figma', 'node.js', 'express', 'mongodb', 'mpn'],
    points: 1111
    },


    {
    name: 'David Oladapo', 
    track: 'Front-End Development',
    achievements: ['html', 'css', 'javascript', 'figma'],
    points: 7685
    }
    
]

var studentReport = '';

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getReport(student) {
    var html = "<ol>"
    html += "<li><strong>Name:</strong> " + student.name + "</li>";
    html += "<li><strong>Track:</strong> " + student.track + "</li>";
    html += "<li><strong>Achievements:</strong> " + student.achievements.join(', ') + "</li>";
    html += "<li><strong>Points:</strong> " + student.points + "</li>";
    html += "</ol>";   
    return html;
}




var search;

while (true) {
    search = prompt('Search student record. Type \'quit\' to exit');
    if (search.toLowerCase() === 'quit') {
        break;
    }

    for (var i = 0; i < students.length; i += 1) {
        var student = students[i];
        if (search.toLowerCase() === student.name.toLowerCase()) {
            studentReport += getReport(student);
            print(studentReport);
        }
        else {
            if(studentReport === '') {
                print('<p>There is no student named ' + search + ' in our records</p>');
            }
        }
    }
}



