let studentCount = 1; // Boshlang'ich raqam

function addStudentRow() {
    const table = document.getElementById("progressTable").getElementsByTagName('tbody')[0];
    
    let newRow = table.insertRow();
    newRow.innerHTML = 
       ` <td contenteditable="true">Student ${studentCount + 1}</td>
        <td contenteditable="true">0</td>
        <td contenteditable="true">0</td>
        <td contenteditable="true">0</td>
        <td contenteditable="true">0</td>
        <td contenteditable="true">0</td>
        <td>0</td>
        <td><button onclick="markAbsent(this)">K</button></td>
    `;
    studentCount++;
}

function calculateAverages() {
    const table = document.getElementById("progressTable");
    const rows = table.getElementsByTagName('tbody')[0].rows;
    
    for (let i = 0; i < rows.length; i++) {
        let vocab = parseFloat(rows[i].cells[1].textContent) || 0;
        let speaking = parseFloat(rows[i].cells[2].textContent) || 0;
        let reading = parseFloat(rows[i].cells[3].textContent) || 0;
        let listening = parseFloat(rows[i].cells[4].textContent) || 0;
        let practise = parseFloat(rows[i].cells[5].textContent) || 0;

        let average = (vocab + speaking + reading + listening + practise) / 5;
        rows[i].cells[6].textContent = average.toFixed(2);
        
        // Ranglarni belgilash
        if (average < 40) {
            rows[i].style.backgroundColor = "red";
            rows[i].cells[6].textContent += " (Juda past)";
        } else if (average >= 40 && average < 70) {
            rows[i].style.backgroundColor = "yellow";
            rows[i].cells[6].textContent += " (Urtacha)";
        } else {
            rows[i].style.backgroundColor = "aqua";
            rows[i].cells[6].textContent += " (Yaxshi)";
        }
    }
}

// Kelmagan tugmasini bosganda qatorni muzlatish
function markAbsent(button) {
    const row = button.parentElement.parentElement;
    row.style.backgroundColor = "gray"; // Muzlatish rangi
    row.cells[0].textContent += " (Kelmagan)";
    row.cells[1].textContent = "N/A"; // Barcha foizlarni N/A ga o'zgartirish
    row.cells[2].textContent = "N/A";
    row.cells[3].textContent = "N/A";
    row.cells[4].textContent = "N/A";
    row.cells[5].textContent = "N/A";
    row.cells[6].textContent = "N/A";
}

// Sanani ko'rsatish
function displayCurrentDate() {
    const currentDate = new Date();
    document.getElementById("currentDate").textContent = currentDate.toLocaleDateString();
}

// Sahna yuklanganda sanani ko'rsatish
window.onload = displayCurrentDate;